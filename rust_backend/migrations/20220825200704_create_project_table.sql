-- Add migration script here
-- Create projects table
CREATE TABLE projects(
    id uuid NOT NULL,
    slug VARCHAR(127) NOT NULL,
    title VARCHAR(127) NOT NULL,
    sub_title VARCHAR(255) NULL,
    live_link VARCHAR(255) NULL,
    source_link VARCHAR(255) NULL,
    description TEXT NOT NULL,
    active BOOL NOT NULL,
    PRIMARY KEY (id)
);
