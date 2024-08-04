import React from "react";
import Navbar from '../Navbar/Navbar.jsx';
import pfp from "../../assets/pfp.jpg"
import "./Hero.css";

const Hero = () => {

    return (
        <div className="herocontainer">
            <Navbar />
            <div className="hero">
                <div className="leftside">
                    <img src={pfp} alt=""></img>
                </div>
                <div className="rightside">
                    <h1 className="name">ETHAN HO</h1>
                    <p className="subtext">Student in <br/>Computer Engineering</p>
                </div>
            </div>
        </div>
    )

}

export default Hero;