import React from "react";
import "../assets/pages/Education.css";
import { FaGraduationCap, FaUniversity, FaCertificate, FaSchool  } from "react-icons/fa";

const educationList = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University of Asia Pacific",
    year: "July 2021 - Present",
    icon: <FaGraduationCap />,
  },
  {
    degree: "Higher Secondary Certificate (Science)— H.S.C",
    institution: "Narayanganj Girls High School and College",
    year: "June 2018 - May 2020 ",
    icon: <FaUniversity />,
  },
  {
    degree: "Secondary School Certificate— S.S.C",
    institution: "Hariharpara High School",
    year: "2014 - 2018",
    icon: <FaCertificate />,
  },
    {
    degree: "Primary School Certificate — P.S.C",
    institution: "Child Haven Kinder Garden",
    year: "2008 - 2014",
    icon: <FaSchool />,
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>
      <p className="education-intro">
        My educational background and academic achievements.
      </p>

      <div className="education-grid">
        {educationList.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-icon">{edu.icon}</div>
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>
            <span className="education-year">{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
