import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard.jsx"
import "./Projects.css";

const Projects = () => {

    return (
        <section className="projects-container">
            <h1 className="title">MY PROJECTS</h1>
            <div className="projects">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </section>
    )
}

export default Projects;