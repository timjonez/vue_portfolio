use actix_web::{App, HttpServer};
use crate::routes;

pub async fn run() -> std::io::Result<()> {
    let server = HttpServer::new(move|| {
        App::new()
            .service(routes::get_project_list)
    })
    .bind(("127.0.0.1", 8000))?
    .run();
    server.await
}
