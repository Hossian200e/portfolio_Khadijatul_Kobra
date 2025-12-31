import React from "react";
import profile from "../assets/profile2.jpg";
import bdFlag from "../assets/Flag.png";
import "../assets/pages/Home.css";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Home = () => {
  return (
    <section className="hero" id="home">
      {/* LEFT */}
      <div className="hero-left">
        <span className="hello">Hello, I'm</span>

        <h1 className="hero-title">
          <span className="name-highlight">Khadijatul</span>
          <br />
          Kobra
        </h1>

        <p className="location">
          <img src={bdFlag} alt="Bangladesh flag" className="flag-icon" />
          Dhaka, Bangladesh
        </p>

        <p className="desc">
          I'm a Computer Science student.
          <br />
          I build web applications and enjoy learning new technologies.
        </p>

        {/* ACTION BUTTONS */}
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work →
          </a>

<a
  href="/Khadijatul_Kobra_Resume.pdf"
  download
  className="btn-outline"
>
  ⬇ Resume
</a>

        </div>

        {/* SOCIAL LINKS */}
        <div className="socials">
          <a href="https://github.com/" target="_blank" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/tanisha.tafannum.9" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="image-ring">
          <img src={profile} alt="Khadijatul Kobra profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
