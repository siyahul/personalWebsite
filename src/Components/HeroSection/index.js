import React, { memo } from "react";
import "./HeroSection.css";
import MongoDB from "../../Assets/images/Logos/Mongodb.png";
import Express from "../../Assets/images/Logos/express.png";
import ReactLogo from "../../Assets/images/Logos/react.png";
import NodeJs from "../../Assets/images/Logos/nodejs.png";
import Banner from "../../Assets/images/banner/banner.png";

function HeroSection() {
  return (  
    <div className="heroSection">
      <div className="heroSection__container">
        <div className="heroSection__hi">
          <p>Hi...</p>
        </div>
        <div className="heroSection__name">
          <p>
            I am<span> SIYAHUL HAQ</span>
          </p>
          <p className="heroSection__info">
            Full Stack Web and Mobile App Devoloper
          </p>
        </div>
        <div className="heroSection__banner">
          <img src={Banner} alt="banner" />
        </div>
        <div className="heroSection__logos">
          <img alt="logo" src={MongoDB}></img>
          <img alt="logo" src={Express}></img>
          <img alt="logo" src={ReactLogo}></img>
          <img alt="logo" src={NodeJs}></img>
        </div>
      </div>
    </div>
  );
}

export default memo(HeroSection);
