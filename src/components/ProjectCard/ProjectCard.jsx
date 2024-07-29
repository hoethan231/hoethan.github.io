import React from "react";
import "./ProjectCard.css";

const ProjectCard = () => {
    
    return (
        <div className="card">
            <div className="pName">
                <h2>Project 1</h2>
                <p>Season, Year</p>
            </div>
            <div className="pInfo">
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Impedit, saepe nemo optio nobis officia in a esse sint similique non illum amet nisi. 
                    Animi tenetur ducimus beatae, repellendus facere nam.
                </h2>
                <p>Skills: Python, Java, C++</p>
            </div>
        </div>
    )
}

export default ProjectCard;