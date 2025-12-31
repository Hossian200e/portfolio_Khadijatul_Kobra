import React, { useState } from "react";
import "../assets/pages/Experience.css";

const jobExperiences = [
  {
    title: "Account Manager",
    company: "Eastern Bank Ltd.",
    duration: "July 2020 – May 2021",
    description: [
      "Supported clients and the team in achieving their goals.",
      "Managed client relationships and resolved account-related issues.",
      "Built trust and long-term client relationships through communication.",
      "Coordinated with internal teams to improve operational efficiency.",
      "Thrived in challenging environments and contributed to success.",
    ],
  },
  {
    title: "Sales Manager (Product Sales)",
    company: "RJ Fashion",
    duration: "March 2024 – November 2024",
    description: [
      "Led project-based sales initiatives to meet targets.",
      "Communicated with clients to provide tailored solutions.",
      "Managed pipelines, follow-ups, and negotiations.",
      "Analyzed market trends and enhanced sales strategy.",
      "Ensured customer satisfaction through team coordination.",
    ],
  },
  {
    title: "Counselor",
    company: "Scholars Global Network (SGN)",
    duration: "July 2025 – September 2025",
    description: [
      "Provided study abroad guidance for students.",
      "Managed admission applications and documentation.",
      "Assisted with visa processing and regular communication.",
      "Collaborated with team members to deliver service.",
      "Performed daily outreach calls to promote programs.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("job");

  const renderJobExperiences = () => (
    <div className="experience-grid">
      {jobExperiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3 className="experience-title">{exp.title}</h3>
          <p className="experience-company">{exp.company}</p>
          <span className="experience-duration">{exp.duration}</span>
          <ul className="experience-description">
            {exp.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderEntrepreneurLoading = () => (
    <div className="experience-loading">
      <div className="spinner"></div>
      <h3>Entrepreneur & Organizing</h3>
      <p>Content is currently being prepared. Please check back soon.</p>
    </div>
  );

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-tabs">
        <button
          className={`tab-btn ${activeTab === "job" ? "active" : ""}`}
          onClick={() => setActiveTab("job")}
        >
          Job Experience
        </button>
        <button
          className={`tab-btn ${activeTab === "entrepreneur" ? "active" : ""}`}
          onClick={() => setActiveTab("entrepreneur")}
        >
          Entrepreneur & Organizing
        </button>
      </div>

      <div className="experience-container">
        {activeTab === "job" && renderJobExperiences()}
        {activeTab === "entrepreneur" && renderEntrepreneurLoading()}
      </div>
    </section>
  );
};

export default Experience;
