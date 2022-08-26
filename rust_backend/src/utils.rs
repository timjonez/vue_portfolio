use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct JsonError {
    error: String
}

impl JsonError {
    pub fn new(err: String) -> JsonError{
        Self {
            error: err
        }
    }
}
