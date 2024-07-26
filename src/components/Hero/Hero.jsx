import React from "react";
import pfp from "../../assets/pfp.jpg"
import "./Hero.css";

const Hero = () => {

    return (
        <div className="hero">
            <div className="leftside">
                <img src={pfp} alt=""></img>
            </div>
            <div className="rightside">
                <h1 className="name">ETHAN HO</h1>
                <p className="subtext">Aspiring Software Engineer</p>
            </div>
        </div>
    )

}

export default Hero