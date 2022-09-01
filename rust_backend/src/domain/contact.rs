use serde::{Deserialize, Serialize};

pub struct Contact {
    pub name: String,
    pub email: String,
    pub message: String,
}
