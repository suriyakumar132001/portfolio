import "./ProjectsGrid.css";

// Replace the image URLs with your own screenshots (e.g. import from /assets)
const projects = [
  {
    number: "01",
    tag: "Web",
    title: "E-Commerce Store",
    stack: "React JS, Node JS and MongoDB",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&q=80",
    link: "https://your-project-link.com/ecommerce-store",
  },
  {
    number: "02",
    tag: "Web",
    title: "Chat Application",
    stack: "React JS, Socket.io and Express",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80",
    link: "https://your-project-link.com/chat-app",
  },
  {
    number: "03",
    tag: "Mobile",
    title: "Fitness Tracker App",
    stack: "React Native and Firebase",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    link: "https://your-project-link.com/fitness-tracker",
  },
  {
    number: "04",
    tag: "Web",
    title: "Portfolio Website",
    stack: "HTML, CSS, JavaScript, Anime JS, & Swiper JS",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    link: "https://your-project-link.com/portfolio-website",
  },
  {
    number: "05",
    tag: "Web",
    title: "Sales Team Dashboard",
    stack: "React JS, Tailwind CSS and Supabase",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    link: "https://your-project-link.com/sales-dashboard",
  },
  {
    number: "06",
    tag: "Web",
    title: "Employee Management System",
    stack: "React JS, Tailwind CSS and Context API",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    link: "https://your-project-link.com/employee-management",
  },
];

function ProjectCard({ project }) {
  const handleClick = () => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project-card" onClick={handleClick}>
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
    <section className="projects-section">
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