import React from "react";
import "../assets/pages/Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const contactDetails = [
  {
    type: "Email",
    value: "anisarahman1119@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:anisarahman1119@gmail.com",
  },
  {
    type: "GitHub",
    value: "github.com/yourusername",
    icon: <FaGithub />,
    link: "https://github.com/yourusername",
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/yourprofile",
  },
  {
    type: "Phone",
    value: "+8801307171541",
    icon: <FaPhone />,
    link: "tel:+8801307171541",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-intro">
        Feel free to reach out for collaborations, projects, or a friendly hello.
      </p>

      <div className="contact-grid">
        {contactDetails.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">{contact.icon}</div>
            <div className="contact-info">
              <span className="contact-type">{contact.type}</span>
              <span className="contact-value">{contact.value}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
