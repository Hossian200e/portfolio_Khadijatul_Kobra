import React from "react";
import "../assets/pages/About.css";
import {
  FaSeedling,
  FaUsers,
  FaAward,
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaBriefcase,
  FaChartLine,
  FaCompass,
} from "react-icons/fa";

const milestones = [
  {
    year: "Early Phase",
    title: "The Beginning",
    icon: <FaSeedling />,
    description: [
      "Started my journey with curiosity and a strong desire to learn.",
      "Built discipline and consistency through regular practice.",
      "Learned the value of patience, focus, and persistence.",
      "Developed a mindset of continuous improvement.",
    ],
  },
  {
    year: "Learning Curve",
    title: "Skill Development",
    icon: <FaChartLine />,
    description: [
      "Strengthened problem-solving and analytical thinking.",
      "Improved adaptability by learning from mistakes.",
      "Focused on building a solid foundation of core skills.",
      "Developed confidence through consistent effort.",
    ],
  },
  {
    year: "Growth Phase",
    title: "Growth & Leadership",
    icon: <FaUsers />,
    description: [
      "Took initiative in team-based environments.",
      "Developed leadership through guidance and collaboration.",
      "Improved communication and interpersonal skills.",
      "Learned to balance responsibility with teamwork.",
    ],
  },
  {
    year: "Professional Growth",
    title: "Recognition & Excellence",
    icon: <FaAward />,
    description: [
      "Recognized for dedication, reliability, and work quality.",
      "Maintained high standards and accountability.",
      "Built trust through consistency and professionalism.",
      "Focused on delivering meaningful results.",
    ],
  },
  {
    year: "Present",
    title: "Always Learning",
    icon: <FaLightbulb />,
    description: [
      "Continuously learning new tools and best practices.",
      "Adapting to new challenges and environments.",
      "Focused on long-term growth and improvement.",
      "Committed to lifelong learning.",
    ],
  },
  {
    year: "Mindset",
    title: "Values & Principles",
    icon: <FaHandshake />,
    description: [
      "Believe in honesty, responsibility, and teamwork.",
      "Detail-oriented with a strong work ethic.",
      "Respectful, adaptable, and goal-focused.",
      "Driven by purpose and consistency.",
    ],
  },
  {
    year: "Direction",
    title: "Vision & Purpose",
    icon: <FaCompass />,
    description: [
      "Focused on building a meaningful professional path.",
      "Motivated by impact and personal growth.",
      "Striving to become a dependable contributor.",
      "Committed to positive change and progress.",
    ],
  },
  {
    year: "Looking Ahead",
    title: "Future Aspirations",
    icon: <FaRocket />,
    description: [
      "Aiming to grow as a skilled and responsible professional.",
      "Interested in solving real-world challenges.",
      "Focused on continuous self-development.",
      "Driven to make a positive impact wherever I work.",
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-intro">
        A journey driven by curiosity, growth, leadership, and continuous
        self-improvement.
      </p>

      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-main-title">
              <FaBriefcase className="professional-icon" />
              <h2>{milestone.title}</h2>
            </div>

            <div className="timeline-year-small">
              <span>{milestone.year}</span>
            </div>

            <div className="timeline-marker">{milestone.icon}</div>

            <ul className="timeline-list">
              {milestone.description.map((point, idx) => (
                <li key={idx} className="timeline-point">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
