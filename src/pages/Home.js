import React from 'react';
import Navbar from '../components/header/Navbar.js';
import '../index.css';
import { FaReact, FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaWordpress, FaFigma} from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <Navbar />
      
      {/* Home Section */}
      <section id="home">
        <div>
          <h1>Welcome to My Portfolio</h1>
          <p>Let's connect!</p>
          <div className="social-icons">
            <a href="https://github.com/hah98" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/hibo-h-4838b4263/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="about-container">
          <h1 className="about-title">👋 I’m Hibo!</h1>
          <p className="about-description">
            A front-end developer (student) at Noroff with a passion for creating functional and visually engaging digital experiences.
            I have experience with modern web technologies like JavaScript, HTML, CSS, React, and tools such as Git, Figma, and Adobe XD. <br />
            Beyond coding, I enjoy reading, graphic design, and following Formula 1. I’m a disciplined and organized individual with a solution-oriented mindset and a strong work ethic.
            Fun fact: Cats spend 70% of their lives asleep 🐈—if only we could all be so lucky!
          </p>
        </div>

        {/* Tech Stack Section */}
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
            <FaWordpress className='tech-icon' title='Wordpress'/>
            <FaFigma className="tech-icon" title="Figma" />
          </div>
        </div>
      </section>
  
        {/* Projects Section */}
      {/* Fix sizing to match */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">My University Projects</h2>
          
          {/* Noroff Projects Section */}
          <div className="row">
            {/* Noroff Project 1 Card */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/assets/images/sp2image.png" className="card-img" alt="Noroff Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Semester Project 2</h5>
                  <p className="card-text">This is Auction House, an online auction platform where users can bid, create, and browse through various listings.</p>
                  <a href="https://github.com/hah98/SP2-CA/tree/main" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                  <a href="https://hibosp2.netlify.app/" className="btn btn-pink ml-2" target="_blank" rel="noopener noreferrer">Live Site</a>
                </div>
              </div>
            </div>

            {/* Noroff Project 2 Card */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/assets/images/Javascriptframeworksimage.png" className="card-img" alt="Noroff Project 2" />
                <div className="card-body">
                  <h5 className="card-title">JavaScript Frameworks CA</h5>
                  <p className="card-text">Welcome to the eCommerce Store, a responsive React app with product listings, cart management, and checkout.</p>
                  <a href="https://github.com/hah98/JavaScript-Frameworks-CA" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                  <a href="https://jsframeworkcahah98.netlify.app/" className="btn btn-pink ml-2" target="_blank" rel="noopener noreferrer">Live Site</a>
                </div>
              </div>
            </div>

            {/* Noroff Project 3 Card */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/assets/images/projectexam2image.png" className="card-img" alt="Noroff Project 3" />
                <div className="card-body">
                  <h5 className="card-title">Project Exam 2</h5>
                  <p className="card-text">Welcome to Holidaze, an accommodation booking platform. This project focuses on creating a whole booking platform.</p>
                  <a href="https://github.com/hah98/ProjectExam2/tree/main" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                  <a href="https://projectexam2hibo.netlify.app/" className="btn btn-pink ml-2" target="_blank" rel="noopener noreferrer"> Live Site</a>
                </div>
              </div>
            </div>

           {/* Other Projects Section */}
          <section id="other-projects" className="py-5">
            <div className="container">
            <h2 className="text-center mb-5">Other Projects ⭐</h2>
        
          <div className="row justify-content-center">
            {/* Other Project 1 */}
            <div className="col-md-6 col-lg-5 mb-4">
              <div className="card">
                <img src="/assets/images/snakegamepic.png" className="card-img" alt="Snake Game" />
                <div className="card-body">
                  <h5 className="card-title">Snake Game</h5>
                  <p className="card-text">A simple and fun version of the classic Snake game. Let's go back to the 90s Nokia vibe!</p>
                  <a href="https://github.com/hah98/snakeGame" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                  <a href="https://snakegamehah98.netlify.app/" className="btn btn-pink ml-2" target="_blank" rel="noopener noreferrer">Click to Play</a>
                </div>
              </div>
            </div>

      {/* Other Project 2 */}
      <div className="col-md-6 col-lg-5 mb-4">
        <div className="card">
          <img src="/assets/images/tictacttoepic.png" className="card-img" alt="Tic Tac Toe" />
          <div className="card-body">
            <h5 className="card-title">Tic Tac Toe</h5>
            <p className="card-text">A simple Tic Tac Toe game built in Python for fun and learning.</p>
            <a href="https://github.com/hah98/TicTacToe" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <a href="https://github.com/hah98" className="btn btn-pink ml-2" target="_blank" rel="noopener noreferrer">No Live Site</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>   
    </div>
  </div>
</section>
</div>
  );
};

export default Home;
