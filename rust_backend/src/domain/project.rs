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
    pub fn generate_slug(value: String) -> String {
        value.to_lowercase().replace(" ", "-")
    }
}

impl TryFrom<ProjectForm> for Project {
    type Error = String;

    fn try_from(value: ProjectForm) -> Result<Self, Self::Error> {
        let slug = match value.slug {
            Some(slug) => slug,
            None => Self::generate_slug(value.title.clone())
        };

        Ok(Self {
            id: Uuid::new_v4().to_string(),
            slug,
            title: value.title,
            sub_title: value.sub_title,
            live_link: value.live_link,
            source_link: value.source_link,
            description: value.description,
            active: true,
        })
    }
}


#[derive(Deserialize, Debug)]
pub struct ProjectForm {
    pub slug: Option<String>,
    pub title: String,
    pub sub_title: Option<String>,
    pub live_link: Option<String>,
    pub source_link: Option<String>,
    pub description: String,
}
