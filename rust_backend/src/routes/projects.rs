use actix_web::{get, HttpResponse};
use crate::app::get_db_connection;
use crate::domain::Project;

#[get("/projects")]
pub async fn get_project_list() -> HttpResponse {
    let db_pool = get_db_connection().await;
    let projects = sqlx::query_as!(Project, "select * from projects where active = 1")
        .fetch_all(&db_pool)
        .await
        .expect("Failed to get projects");
    HttpResponse::Ok().json(projects)
}
