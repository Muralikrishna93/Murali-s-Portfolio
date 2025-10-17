import React from "react";
import '../index.css';

const skills = [
    {
      name: "React",
      icon: "/Images/react.png"
    },
    {
      name: "NodeJs",
      icon: "/Images/nodejs.png"
    },
    {
      name: "ExpressJs",
      icon: "/Images/express.png"
    },
    {
      name: "MongoDB",
      icon: "/Images/mongodb.png"
    },
    {
      name: "JavaScript",
      icon: "/Images/javascript.png"
    },
    {
      name: "Tailwind CSS",
      icon: "/Images/tailwind.png"
    },
    {
      name: "HTML5",
      icon: "/Images/html5.png"
    },
    {
      name: "CPP",
      icon: "/Images/cpp.png"
    },
    {
      name: "MySQL",
      icon: "/Images/mysql.png"
    },
    {
      name: "CSS3",
      icon: "/Images/css.png"
    },
    {
      name: "Git",
      icon: "/Images/git.png"
    }
  ];

export default function Skills() {

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container text-center">
        <h2 className="text-light fw-bold mb-5">Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-content">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p className="skill-name">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
