import React from "react";
import "./Navbar.css";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo">
                <h1>Ethan</h1>
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
        </div>
    )

}

export default Navbar;