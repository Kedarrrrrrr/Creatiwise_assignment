import React, { useState } from "react";
import "./Testimonials.css";
import userImg from "../../assets/Testimonials.png"; 

const testimonials = [
  {
    name: "Floyd Miles",
    company: "eBay",
    image: userImg,
    feedback:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    name: "Jane Cooper",
    company: "Google",
    image: userImg,
    feedback:
      "The platform is amazing. I created a polished resume in minutes and landed my dream job. Highly recommend it to everyone!",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonial-section">
      <h2>✶ What they say</h2>

      <div className="testimonial-content">
        <div className="testimonial-user">
          <img src={testimonials[index].image} alt="User" className="user-img" />
          <div className="user-info">
            <h3>{testimonials[index].name}</h3>
            <p>{testimonials[index].company}</p>
          </div>
        </div>

        <div className="testimonial-text">
          <span className="quote-mark">“</span>
          <p>{testimonials[index].feedback}</p>
        </div>

        <div className="testimonial-nav">
          <button onClick={prevTestimonial}>←</button>
          <button onClick={nextTestimonial}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
