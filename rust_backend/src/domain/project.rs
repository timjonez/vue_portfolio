use uuid::Uuid;

#[derive(serde::Deserialize, Debug)]
pub struct Project {
    pub id: Uuid,
    pub slug: String,
    pub title: String,
    pub sub_title: Option<String>,
    pub live_link: Option<String>,
    pub source_link: Option<String>,
    pub description: String,
}

impl Project {
    pub fn new() -> Result<Project, std::io::Error> {
        let project = Project {
            id: Uuid::new_v4(),
            slug: "test".to_string(),
            title: "Test Project".to_string(),
            sub_title: Some("This is the test project".to_string()),
            live_link: Some("".to_string()),
            source_link: Some("".to_string()),
            description: "This is the best project for testing.".to_string()
        };
        Ok(project)
    }
    
}
