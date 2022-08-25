use rust_backend::app::run;

#[tokio::main]
async fn main() {
    println!("Hello, world!");
    run().await.expect("Failed to start server");
}
