use crate::routes;
use crate::utils::JsonError;
use actix_web::{error, web, App, HttpResponse, HttpServer};
use sqlx::SqlitePool;

pub async fn get_db_connection() -> SqlitePool {
    SqlitePool::connect("sqlite://db.sqlite3")
        .await
        .expect("Failed to connect to database")
}

pub async fn run() -> std::io::Result<()> {
    let server = HttpServer::new(move || {
        App::new()
            .service(routes::get_project_list)
            .service(routes::save_project)
            .app_data(web::JsonConfig::default().error_handler(|err, req| {
                error::InternalError::from_response(
                    "",
                    HttpResponse::BadRequest()
                        .content_type("application/json")
                        .json(JsonError::new(err.to_string())),
                )
                .into()
            }))
    })
    .bind(("127.0.0.1", 8000))?
    .run();
    server.await
}
