import "./AboutMe.css";
import profilePic from "../assets/profile.png";

export default function AboutMe() {
  return (
    <section className="about-wrapper">
      {/* LEFT: Picture */}
      <div className="about-left">
        <img src={profilePic} alt="Habib Ur Rehman" className="about-image" />
      </div>

      {/* RIGHT: Content */}
      <div className="about-right">
        <h3 className="about-eyebrow">Creativity</h3>
        <h2 className="about-title">Is My Passion</h2>

        <p className="about-text">
          I'm a <span className="highlight">MERN Stack Developer</span>{" "}
          passionate about experimenting with new{" "}
          <span className="highlight">skills and creativity.</span> Driven by
          learning and curiosity, I'm always looking to explore and learn new
          development skills.
        </p>

        {/* RESUME BUTTON - downloads the file from the public folder */}
        <a href="/resume.pdf" download="Suryakumar_Resume.pdf" className="resume-btn">Resume</a>
      </div>
    </section>
  );
}
