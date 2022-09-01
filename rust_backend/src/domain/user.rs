use serde::{Deserialize, Serialize};
use uuid::Uuid;
use sqlx::FromRow;
use validator::validate_email;

#[derive(Deserialize, Serialize, Debug, FromRow)]
pub struct User {
    pub id: Uuid,
    pub name: String,
    pub email: String,
    pub password: String,
    pub is_admin: bool
}

impl User {
    pub fn new(name: String, email: String, password: String, is_admin: bool) -> Result<User, std::io::Error> {

    }
}
