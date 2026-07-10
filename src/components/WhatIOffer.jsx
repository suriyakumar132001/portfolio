import { useState } from "react";
import "./WhatIOffer.css";

const skills = [
  "Html",
  "CSS",
  "JavaScript",
  "Python",
  "Tailwind CSS",
  "React JS",
  "Node JS",
  "Express JS",
  "Mongo DB",
  "My SQL",
  "Rest API's",
  "Git & GitHub",
];

const tools = [
  "VS Code",
  "Claude",
  "Git",
  "GitHub",
  "ChatGPT",
];

function OfferCard({ title, description, label, tags }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`offer-card ${open ? "open" : ""}`}>
      <h3 className="offer-title">{title}</h3>
      <p className="offer-desc">{description}</p>

      <div className="offer-reveal">
        <p className="offer-label">{label}</p>
        <div className="offer-tags">
          {tags.map((tag) => (
            <span className="offer-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        className="offer-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Collapse" : "Expand"}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}

export default function WhatIOffer() {
  return (
    <section className="offer-section">
      <h2 className="offer-heading">
        What I <span className="highlight">Offer</span>
      </h2>

      <div className="offer-grid">
        <OfferCard
          title={
            <>
              Development
              <br />
              Skills
            </>
          }
          description="Website Creation with React JS, Tailwind CSS & Node JS. Professional websites with React, Tailwind and lots of creativity."
          label="Skills"
          tags={skills}
        />
        <OfferCard
          title={
            <>
              Development
              <br />
              Tools
            </>
          }
          description="I leverage powerful tools to streamline my workflow, improve productivity, and deliver high-quality projects."
          label="Tools"
          tags={tools}
        />
      </div>
    </section>
  );
}
