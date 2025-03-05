import React from "react";
import "./HeroSection.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";

const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* Main Hero Heading */}
      <div className="hero-text-container">
        <h1>
          I AM A <span className="hero-image"><img src={img1} alt="Design" /></span> FREELANCE
          <br /> DESIGNER <span className="hero-image"><img src={img2} alt="Portfolio" /></span> FROM
          <br /> SAN FRANCISCO
        </h1>
      </div>

      {/* Logos & Text in One Line */}
      <div className="hero-bottom">
        <div className="hero-logos">
          <img src={logo1} alt="Logo1" />
          <img src={logo2} alt="Logo2" />
          <img src={logo3} alt="Logo3" />
        </div>
        <p className="hero-description">
          Welcome to my portfolio. Here, artistry meets functionality. Dive into a 
          curated showcase of distinctive branding and web designs, each crafted to 
          captivate and inspire.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
