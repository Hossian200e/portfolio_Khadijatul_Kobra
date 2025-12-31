import React from "react";
import "../assets/pages/Achievements.css";
import { FaTrophy, FaMedal, FaStar, FaUsers, FaCommentDots, FaBriefcase, FaClipboardList, FaEye, FaCalendarAlt } from "react-icons/fa";

const achievementsList = [
  {
    title: "Competitive Programming",
    description:
      "Participated in multiple coding contests on Codeforces, CodeChef, and university competitions, achieving high rankings.",
    icon: <FaTrophy />,
  },
  {
    title: "Academic Excellence",
    description:
      "Maintained top CGPA throughout the semesters and received Dean's and VC's Awards for consistent performance.",
    icon: <FaMedal />,
  },
  {
    title: "Project-Based Achievements",
    description:
      "Built multiple innovative projects including AI-powered apps, web platforms, and interactive games.",
    icon: <FaStar />,
  },
];

const softSkillsList = [
  { skill: "Teamwork", icon: <FaUsers /> },
  { skill: "Communication", icon: <FaCommentDots /> },
  { skill: "Professionalism", icon: <FaBriefcase /> },
  { skill: "Organization", icon: <FaClipboardList /> },
  { skill: "Observation", icon: <FaEye /> },
  { skill: "Planning", icon: <FaCalendarAlt /> },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2 className="achievements-title">Achievements & Skills</h2>
      <p className="achievements-intro">
        Highlights of my accomplishments in academics, programming, project work, and professional skills.
      </p>

      {/* Achievements Grid */}
      <div className="achievements-grid">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>

      {/* Soft Skills Grid */}
      <h3 className="skills-section-title">Professional & Soft Skills</h3>
      <div className="skills-grid">
        {softSkillsList.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
