import React, { useState } from "react";
import "../assets/pages/Projects.css";
import { FaGraduationCap, FaLeaf, FaBox, FaGamepad, FaChalkboardTeacher, FaBook, FaBrain, FaTimes } from "react-icons/fa";

const projectsList = [
  {
    title: "Student Management System",
    description: "A web-based platform to manage student data efficiently.",
    details: [
      "Frontend: React.js, Tailwind CSS",
      "Backend: Node.js & Express",
      "Database: MongoDB",
      "Features: CRUD operations, authentication, dashboard",
    ],
    icon: <FaGraduationCap />,
  },
  {
    title: "Tea Leaf Disease Detection (DCNN)",
    description: "Deep learning system for identifying tea leaf diseases.",
    details: [
      "Used Deep Convolutional Neural Networks (DCNN)",
      "Dataset of 5,000+ tea leaf images",
      "Achieved 92% accuracy",
      "Built web interface for uploading leaf images",
    ],
    icon: <FaLeaf />,
  },
  {
    title: "Parcel Delivery App",
    description: "Real-time parcel delivery application with tracking and fare estimation.",
    details: [
      "Built with React Native for mobile apps",
      "Backend: Firebase & Node.js",
      "Features: Real-time tracking, fare estimation, notifications",
      "Role-based access for customers and delivery personnel",
    ],
    icon: <FaBox />,
  },
  {
    title: "Tower Attack Game (C++ OpenGL)",
    description: "Interactive tower defense game with AI-controlled enemies.",
    details: [
      "Built using C++ & OpenGL",
      "Features: Multiple levels, tower upgrades, AI enemies",
      "Implemented win/lose conditions",
      "Optimized performance for smooth gameplay",
    ],
    icon: <FaGamepad />,
  },
  {
    title: "E-Learning System — SDLC",
    description: "An intuitive platform supporting online learning with robust SDLC methodology.",
    details: [
      "Developed using React.js and Node.js",
      "Focus on intuitive interface and responsive design",
      "Supports course creation, enrollment, and assessments",
      "Enhanced learning experience for students and instructors",
    ],
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Library Management System",
    description: "Streamlines the management of library resources using Java.",
    details: [
      "Developed in Java with object-oriented design",
      "Features: Book cataloging, loan tracking, user account management",
      "Automates key library tasks and maintains accurate records",
      "Intuitive interface for both staff and users",
    ],
    icon: <FaBook />,
  },
  {
    title: "MediMind — AI-driven Healthcare Platform",
    description: "AI platform for symptom analysis, disease prediction, and appointment booking.",
    details: [
      "AI-powered symptom selection and disease prediction",
      "Seamless appointment scheduling",
      "User-friendly interface for healthcare management",
      "Personalized recommendations and efficient healthcare solutions",
    ],
    icon: <FaBrain />,
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-intro">
        Some of the projects I have built during my journey as a developer.
      </p>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <button
              className="project-link-btn"
              onClick={() => setActiveProject(project)}
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
            >
              <FaTimes />
            </button>
            <div className="modal-header">
              {activeProject.icon}
              <h3>{activeProject.title}</h3>
            </div>
            <p className="modal-description">{activeProject.description}</p>
            <ul className="modal-details">
              {activeProject.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
