import { useEffect, useRef, useState, useCallback } from "react";
import "./AboutMe.css";
import profilePic from "../assets/profile.png";

export default function AboutMe() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Resets then re-triggers the animation (forces CSS animation restart)
  const playAnimation = useCallback(() => {
    setIsVisible(false);
    // double rAF gives the browser a frame to apply the "hidden" state
    // before we flip back to visible, so the CSS animation restarts
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  }, []);

  useEffect(() => {
    // Play once when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Play again whenever an "About Me" nav link is clicked
    const handleNavClick = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      playAnimation();
    };

    window.addEventListener("about-nav-click", handleNavClick);

    return () => {
      observer.disconnect();
      window.removeEventListener("about-nav-click", handleNavClick);
    };
  }, [playAnimation]);

  return (
    <section className="about-wrapper" id="about" ref={sectionRef}>
      {/* LEFT: Picture */}
      <div className={`about-left ${isVisible ? "about-anim-left" : "about-hidden"}`}>
        <img src={profilePic} alt="Habib Ur Rehman" className="about-image" />
      </div>

      {/* RIGHT: Content */}
      <div className={`about-right ${isVisible ? "about-anim-right" : "about-hidden"}`}>
        <h3 className="about-eyebrow">Creativity</h3>
        <h2 className="about-title">Is My Passion</h2>

        <p className="about-text">
          I'm a <span className="highlight">MERN Stack Developer</span>{" "}
          passionate about experimenting with new{" "}
          <span className="highlight">skills and creativity.</span> Driven by
          learning and curiosity, I'm always looking to explore and learn new
          development skills.
        </p>

        <a href="/Surya_Kumar_N_MERN_Resume.pdf" download="Surya_Kumar_N_MERN_Resume.pdf" className="resume-btn">
          Resume
        </a>
      </div>
    </section>
  );
}