import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleScroll = () => {
    const sections = ['home', 'projects', 'about', 'contact'];
    let found = false;

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el && !found && el.getBoundingClientRect().top <= window.innerHeight / 2) {
        setActiveLink(section);
        found = true;
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    setActiveLink(section);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">My Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'home' ? 'text-white' : ''}`}
                href="#home"
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'about' ? 'text-white' : ''}`}
                href="#about"
                onClick={() => handleLinkClick('about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'projects' ? 'text-white' : ''}`}
                href="#projects"
                onClick={() => handleLinkClick('projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'contact' ? 'text-white' : ''}`}
                href="#contact"
                onClick={() => handleLinkClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
