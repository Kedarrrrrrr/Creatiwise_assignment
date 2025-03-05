import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Lead Product Designer",
    company: "Fortknox",
    date: "Mar 2022 - Oct 2023",
  },
  {
    role: "Intern Designer",
    company: "OmniSafe",
    date: "Mar 2022 - Oct 2023",
  },
  {
    role: "UI Designer",
    company: "Doradesign",
    date: "Mar 2022 - Oct 2023",
  },
  {
    role: "Frontend Developer",
    company: "OpacityAuthor",
    date: "Mar 2022 - Oct 2023",
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>✹ Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="role">{exp.role}</div>
            <div className="company">
              <span>{exp.company}</span>
              <p>{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
