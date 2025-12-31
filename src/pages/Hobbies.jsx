import React from "react";
import "../assets/pages/Hobbies.css";
import { FaMusic, FaBook, FaPlane, FaBiking, FaCamera, FaGamepad } from "react-icons/fa";

const hobbiesList = [
  { name: "Reading", icon: <FaBook /> },
  { name: "Traveling", icon: <FaPlane /> },
  { name: "Photography", icon: <FaCamera /> },
  { name: "Music", icon: <FaMusic /> },
  { name: "Gaming", icon: <FaGamepad /> },
  { name: "Cycling", icon: <FaBiking /> },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="hobbies-section">
      <h2 className="hobbies-title">Hobbies & Interests</h2>
      <p className="hobbies-intro">
        Activities and interests I enjoy in my free time.
      </p>

      <div className="hobbies-grid">
        {hobbiesList.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <span className="hobby-name">{hobby.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
