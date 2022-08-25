use actix_web::get;

#[get("/projects")]
pub async fn get_project_list() -> String {
    "Hello World".to_owned()
}
