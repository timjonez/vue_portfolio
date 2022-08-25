use uuid::Uuid;
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Debug)]
pub struct Project {
    pub id: String,
    pub slug: String,
    pub title: String,
    pub sub_title: Option<String>,
    pub live_link: Option<String>,
    pub source_link: Option<String>,
    pub description: String,
    pub active: bool,
}

impl Project {
    pub fn new() -> Result<Project, std::io::Error> {
        let project = Project {
            id: Uuid::new_v4().to_string(),
            slug: "test".to_string(),
            title: "Test Project".to_string(),
            sub_title: Some("This is the test project".to_string()),
            live_link: Some("".to_string()),
            source_link: Some("".to_string()),
            description: "This is the best project for testing.".to_string(),
            active: true
        };
        Ok(project)
    }
    
}
