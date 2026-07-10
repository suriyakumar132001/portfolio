import "./Hero.css";
import profilePic from "../assets/profile.png";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Surya Coders</div>
        <ul className="nav-links">
          <li>
            <a href="#about" className="nav-link">About Me</a>
          </li>
          <li>
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>

      {/* MAIN HERO CONTENT */}
      <div className="hero-content">
        {/* LEFT: Name */}
        <div className="hero-left hero-anim-left">
          <p className="greeting">Hello, I'm</p>
          <h1 className="hero-name">
            Surya
            <br />
            kumar
          </h1>
        </div>

        {/* CENTER: Picture */}
        <div className="hero-center">
          <div className="hero-image-glow"></div>
          <img
            src={profilePic}
            alt="Surya Kumar"
            className="hero-image hero-anim-image"
          />
        </div>

        {/* RIGHT: Role */}
        <div className="hero-right hero-anim-right">
          <p className="role-eyebrow">Creative</p>
          <h2 className="role-title">
            <span className="role-gradient">MERN Stack</span>
            <span className="role-white">Developer</span>
          </h2>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="social-icons hero-anim-icons">
        <a href="https://www.linkedin.com/in/suriyakumar-developer/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
        </a>
        <a href="https://github.com/suriyakumar132001" target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}