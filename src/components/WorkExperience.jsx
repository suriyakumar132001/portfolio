import  { useState } from "react";
import "./WorkExperience.css";

const experienceData = [
  
  {
    role: "MERN stack Developer",
    company: "Internship",
    duration: "Mar - may 2026",
    description:
      "Completed a project Frontend Web Developer internship, creating a personal portfolio using HTML, CSS , JavaScript and React .",
  },
];

const educationData = [
  {
    role: "BE Computer Science",
    company: "Francis xavier Engineering College",  
    duration: "2019 - 22",
    description:
      "Studying core computer science subjects including data structures, algorithms, databases, and web development, with a focus on building real-world projects alongside coursework.",
  },
  {
    role: "Diploma in Computer Sciences",
    company: "Sankar Polytechnic College",
    duration: "2016 - 19",
    description:
      "Completed higher secondary education with a focus on mathematics and physics, building the foundation for a computer science degree.",
  },
];

function TimelineList({ items }) {
  return (
    <div className="timeline">
      <div className="timeline-line" />
      {items.map((item, index) => (
        <div className="timeline-row" key={index}>
          <div className="timeline-role">
            <h3>{item.role}</h3>
            <p className="timeline-company">{item.company}</p>
          </div>

          <div className="timeline-duration">{item.duration}</div>

          <div className="timeline-desc">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function WorkExperience() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="work-section">
      <div className="work-heading">
        <span className="work-heading-sub">My Work</span>
        <h2 className="work-heading-main">Experience</h2>
      </div>

      <div className="work-tabs">
        <button
          className={`work-tab ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          Experience <span className="tab-icon">💼</span>
        </button>
        <button
          className={`work-tab ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education <span className="tab-icon">🎓</span>
        </button>
      </div>

      <div className="work-content">
        {activeTab === "experience" ? (
          <TimelineList items={experienceData} />
        ) : (
          <TimelineList items={educationData} />
        )}
      </div>
    </section>
  );
}
