import  { useState } from "react";
import "./ContactMe.css";

const EMAIL = "suriyakumar132001@gmail.com";

const socialLinks = [
  { label: "Linkedin", href: "https://www.linkedin.com/in/suriyakumar-developer/" },
  { label: "GitHub", href: "https://github.com/suriyakumar132001" },
];

const talkLinks = [
  { label: "WhatsApp", href: "https://wa.me/7448787643" },
];

export default function ContactMe() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-subheading">Tell me about your next project.</p>

      <button className="copy-email-btn" onClick={handleCopyEmail}>
        {copied ? "Email Copied!" : "Copy Email"}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      </button>

      <div className="contact-grid">
        {/* Column 1: Email + Location */}
        <div className="contact-col">
          <div className="contact-block">
            <h3>Email</h3>
            <p>{EMAIL}</p>
          </div>
          <div className="contact-block">
            <h3>Location</h3>
            <p>kurichy, melapalayam</p>
          </div>
        </div>

        {/* Column 2: Social Media */}
        <div className="contact-col">
          <h3>Social Media</h3>
          <ul className="contact-links">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Write Me & We'll Talk */}
        <div className="contact-col">
          <h3>Write Me &amp; We'll Talk</h3>
          <ul className="contact-links">
            {talkLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
