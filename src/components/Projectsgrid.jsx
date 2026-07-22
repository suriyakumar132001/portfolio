import "./Projectsgrid.css";

// Replace the image URLs with your own screenshots (e.g. import from /assets)
const projects = [
  {
    number: "01",
    tag: "Web",
    title: "Insurance Policy CRM (MERN Stack) — Personal Project",
    stack: "React JS, Node JS and MongoDB",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&q=80",
    link: "https://crm-frontend-qupq.vercel.app/login",
  },
  
];

function ProjectCard({ project }) {
  const handleClick = () => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project-card" onClick={handleClick} >
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-tag">{project.tag}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>

      <p className="project-stack-label">Techstack used</p>
      <p className="project-stack">{project.stack}</p>

      <div className="project-image-wrap">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>

      <div className="project-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
    </div>
  );
}

export default function ProjectsGrid() {
  return (
    <section className="projects-section" id="projects">
      <div className="glow-bottom-right" />
      <div className="glow-top-left" />

      <div className="projects-container">
        <h2 className="projects-heading">
          I make Incredible <br className="mobile-break" />
          <span className="highlight">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
