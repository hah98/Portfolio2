import React from 'react';
import Navbar from '../components/header/Navbar.js';
import '../index.css'; 
import { FaReact, FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';  // Import icons

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <section id="home">
        <div>
          <h1>Welcome to My Portfolio</h1>
          <p>Let's connect!</p>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about">
       {/*  <h1>I am Hibo</h1> */}

        {/* Tech Stack (Icons) */}
        <div className="tech-stack">
          <h3>Tech Stack</h3>
          <div className="tech-icons">
            <FaHtml5 className="tech-icon" title="HTML5" />
            <FaCss3Alt className="tech-icon" title="CSS3" />
            <FaJsSquare className="tech-icon" title="JavaScript" />
            <FaReact className="tech-icon" title="React" />
            <FaNodeJs className="tech-icon" title="Node.js" />
            <FaGitAlt className="tech-icon" title="Git" />
            <FaGithub className="tech-icon" title="GitHub" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">My Projects</h2>
          
          {/* Noroff Projects Section */}
          <div className="row">
            {/* Noroff Project 2 Card */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/assets/images/sp2image.png" className="card-img" alt="Noroff Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Semester Project 2</h5>
                  <p className="card-text">This project showcases my ability to handle real-world challenges. Check it out!</p>
                  <a href="https://github.com/username/noroff-project2" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                  <a href="https://noroff-project2-live.com" className="btn btn-pink ml-2" target="_blank" rel="noopener noreferrer">Live Site</a>
                </div>
              </div>
            </div>

            {/* Noroff Project 2 Card */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/assets/images/Javascriptframeworksimage.png" className="card-img" alt="Noroff Project 2" />
                <div className="card-body">
                  <h5 className="card-title">JavaScript Frameworks CA</h5>
                  <p className="card-text">This project showcases my ability to handle real-world challenges. Check it out!</p>
                  <a href="https://github.com/username/noroff-project2" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                  <a href="https://noroff-project2-live.com" className="btn btn-pink ml-2" target="_blank" rel="noopener noreferrer">Live Site</a>
                </div>
              </div>
            </div>

            {/* Noroff Project 3 Card */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/assets/images/projectexam2image.png" className="card-img" alt="Noroff Project 3" />
                <div className="card-body">
                  <h5 className="card-title">Project Exam 2</h5>
                  <p className="card-text">A final Noroff project where I applied everything I learned in the course!</p>
                  <a href="https://github.com/username/noroff-project3" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                  <a href="https://noroff-project3-live.com" className="btn btn-pink ml-2" target="_blank" rel="noopener noreferrer">Live Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>How to contact me.</p>
      </section>
    </div>
  );
};

export default Home;
