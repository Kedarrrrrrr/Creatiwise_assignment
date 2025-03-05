import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-tags">
        <span>FLOW</span>
        <span className="star">✦</span>
        <span>FIGMA</span>
        <span className="star">✦</span>
        <span>DESIGNER</span>
        <span className="star">✦</span>
        <span>DEVELOPER</span>
      </div>

      <div className="footer-content">
        <span className="cursor-label">Amit Pant</span>
        <h1 className="footer-title">LET'S TALK!</h1>
        <a href="mailto=rehanurraihan@gmail.com" className="footer-email">
          rehanurraihan@gmail.com ↗
        </a>
      </div>

      <div className="footer-bottom">
        <p>© Rehan Raihan - 2023</p>
        <div className="social-links">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
