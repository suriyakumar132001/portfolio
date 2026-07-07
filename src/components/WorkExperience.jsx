import  { useState } from "react";
import "./WorkExperience.css";

const experienceData = [
  {
    role: "Frontend Web Developer",
    company: "Phaton",
    duration: "Oct - Jan 26",
    description:
      "Completed a Frontend Web Developer internship, where I collaborated with a team to build a fully functional e-commerce platform, developing responsive and dynamic interfaces using React.js and Tailwind CSS.",
  },
  {
    role: "Frontend Web Developer",
    company: "Internship",
    duration: "Aug - July",
    description:
      "Completed a 4-project Frontend Web Developer internship, creating a personal portfolio, landing page, weather app, and a music website clone using HTML, CSS, and JavaScript.",
  },
];

const educationData = [
  {
    role: "BS Computer Science",
    company: "Your University",
    duration: "2022 - 26",
    description:
      "Studying core computer science subjects including data structures, algorithms, databases, and web development, with a focus on building real-world projects alongside coursework.",
  },
  {
    role: "Intermediate (Pre-Engineering)",
    company: "Your College",
    duration: "2020 - 22",
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
