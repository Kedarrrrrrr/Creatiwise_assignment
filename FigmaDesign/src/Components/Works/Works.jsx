import React from "react";
import "./Works.css";
import img1 from "../../assets/work 1.png";
import img2 from "../../assets/work 2.png";
import img3 from "../../assets/work 3.png";

const Works = () => {
  return (
    <section className="works">
      <div className="works-header">
        <h2>✹ Works</h2>
        <a href="#" className="view-all">view all</a>
      </div>

      {/* Work Item 1 */}
      <div className="work-item">
        <img src={img1} alt="Analysis Application" className="work-image" />
        <div className="work-content">
          <h3>Analysis Application</h3>
          <p>With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.</p>
          
          {/* Tags */}
          <div className="tags">
            <span>FIGMA</span>
            <span>UX</span>
          </div>

          {/* Case Study Button */}
          <button className="case-study-btn">View Case Study</button>
        </div>
      </div>

      {/* Work Item 2 */}
      <div className="work-item">
        <img src={img2} alt="Fortknox Application" className="work-image" />
        <div className="work-content">
          <h3>Fortknox Application</h3>
          <p>With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.</p>
          
          {/* Tags */}
          <div className="tags">
            <span>MOBILE</span>
            <span>WEB</span>
          </div>

          {/* Case Study Button */}
          <button className="case-study-btn">View Case Study</button>
        </div>
      </div>

      {/* Work Item 3 */}
      <div className="work-item">
        <img src={img3} alt="Zenocide Application" className="work-image" />
        <div className="work-content">
          <h3>Zenocide Application</h3>
          <p>With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.</p>
          
          {/* Tags */}
          <div className="tags">
            <span>APP</span>
            <span>WEB</span>
          </div>

          {/* Case Study Button */}
          <button className="case-study-btn">View Case Study</button>
        </div>
      </div>
    </section>
  );
};

export default Works;
