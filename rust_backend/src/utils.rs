use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct JsonError {
    error: String,
}

impl JsonError {
    pub fn new(err: String) -> JsonError {
        Self { error: err }
    }

    pub fn from_str(err: &str) -> JsonError {
        Self { error: String::from(err) }
    }
}
