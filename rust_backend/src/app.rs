use actix_web::{App, HttpServer, web, error, Error, HttpResponse};
use crate::routes;
use sqlx::{SqlitePool};
use serde_json;
use actix_web::error::JsonPayloadError::Deserialize;
use crate::utils::JsonError;

pub async fn get_db_connection() -> SqlitePool {
    SqlitePool::connect("sqlite://db.sqlite3")
        .await
        .expect("Failed to connect to database")
}

pub async fn run() -> std::io::Result<()> {
    let server = HttpServer::new(move|| {
        App::new()
            .service(routes::get_project_list)
            .service(routes::save_project)
            .app_data(
                web::JsonConfig::default().error_handler(|err, req| {
                        error::InternalError::from_response(
                            "",
                            HttpResponse::BadRequest()
                                .content_type("application/json")
                                .json(JsonError::new(err.to_string()))

                        )
                        .into()
                    })
            )
    })
    .bind(("127.0.0.1", 8000))?
    .run();
    server.await
}
