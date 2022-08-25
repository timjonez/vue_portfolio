use rust_backend::domain::Project;

#[tokio::main]
async fn main() {
    println!("Hello, world!");
    let project = Project::new().expect("Failed to create project");
    println!("project: {:?}", project)
}
