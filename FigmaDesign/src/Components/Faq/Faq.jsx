import React from "react";
import "./Faq.css"; // Import CSS for styling

const Faq = () => {
  return (
    <div className="faq-section">
      <h2 className="faq-heading">✨ Frequently asked questions</h2>

      <div className="faq-item">
        <h3 className="faq-question">What is your design process?</h3>
        <p className="faq-answer">
          My design process typically involves four key phases: research, design, prototype, and test.
          In the research phase, I gather insights about the user and their needs. In the design phase,
          I create wireframes and visual designs that meet those needs. In the prototype phase, I create 
          interactive models of the design for testing. In the test phase, I collect feedback from users 
          to refine the design.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What tools and software do you use for UX design?</h3>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">How do you measure the success of your UX designs?</h3>
      </div>
    </div>
  );
};

export default Faq;
