use crate::app::get_db_connection;
use crate::domain::{Project, ProjectForm};
use crate::utils::JsonError;
use actix_web::{get, post, web, HttpResponse};

#[get("/projects")]
pub async fn get_project_list() -> HttpResponse {
    let db_pool = get_db_connection().await;
    let projects = sqlx::query_as!(Project, "select * from projects where active = 1")
        .fetch_all(&db_pool)
        .await
        .expect("Failed to get projects");
    HttpResponse::Ok().json(projects)
}

#[get("/project/{slug}")]
pub async fn get_project(slug: web::Path<String>) -> HttpResponse {
    let db_pool = get_db_connection().await;

    let query =  sqlx::query_as::<_, Project>(r#"SELECT * FROM projects WHERE slug = $1"#)
        .bind(&slug[..])
        .fetch_optional(&db_pool)
        .await
        .expect("Failed to find project");

    match query {
        Some(project) => HttpResponse::Ok().json(project),
        None => HttpResponse::NotFound().json(JsonError::from_str("Project not found"))
    }
}

#[post("/project/")]
pub async fn save_project(project_data: web::Json<ProjectForm>) -> HttpResponse {
    let db_pool = get_db_connection().await;
    let project_form: ProjectForm = project_data.0.into();
    let project = match Project::try_from(project_form) {
        Ok(p) => p,
        Err(_) => {
            return HttpResponse::BadRequest()
                .json(JsonError::new("Failed to create project".to_string()))
        }
    };

    let query = sqlx::query!(
        r#"
            INSERT INTO projects (id, slug, title, sub_title, live_link, source_link, description, active)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        "#,
        project.id,
        project.slug,
        project.title,
        project.sub_title,
        project.live_link,
        project.source_link,
        project.description,
        project.active,
    )
    .execute(&db_pool)
    .await;

    match query {
        Ok(_) => HttpResponse::Created().json(project),
        Err(e) => {
            if e.to_string().contains("UNIQUE") {
                return HttpResponse::BadRequest().json(JsonError::new(
                    "Project with this slug already exists".to_string(),
                ));
            }
            HttpResponse::BadRequest().json(JsonError::new(e.to_string()))
        }
    }
}
