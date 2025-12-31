import { useState, useEffect } from "react";
import "../assets/pages/Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const menuItems = [
    "home",
    "about",
    "education",
    "experience",
    "skills",
    "projects",
    "achievements",
    "hobbies",
    "contact",
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${darkMode ? "dark" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <h2 className="logo">Khadija</h2>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menu */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {menuItems.map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setMenuOpen(false)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}

            {/* Dark mode toggle */}
            <li>
              <button
                className="dark-toggle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Spacer to handle fixed navbar height */}
      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;
