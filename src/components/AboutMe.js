import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="name">Hi, I'm Asmitha!</h1>
            <p className="description">
            I am a Computer Science student at Johns Hopkins with a strong foundation in full-stack software development, 
            data analytics, and AI/ML applications. I thrive at the intersection of engineering and healthcare—where 
            software becomes a tool for groundbreaking innovation and personalized care. In parallel with technical work, I love 
            mentoring students, leading design teams, and driving projects that push boundaries and make healthcare 
            more accessible, efficient, and human-centered.
            </p>

            <div className="education">
              <h3>Education</h3>
              <div className="education-list">
                <div className="education-item">
                  <div className="education-header">
                    <div className="education-degree">MSE in Computer Science</div>
                    <div className="education-year">2025 - 2026</div>
                  </div>
                  <div className="education-school">Johns Hopkins University</div>
                </div>
                <div className="education-item">
                  <div className="education-header">
                    <div className="education-degree">BS in Biomedical Engineering and Computer Science</div>
                    <div className="education-year">2021 - 2025</div>
                  </div>
                  <div className="education-school">Johns Hopkins University</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="profile-image large-profile">
              <img 
                src="/profile-pic.jpg" 
                alt="Asmitha Sathya" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder" style={{ display: 'none' }}>
                <span>👩‍💻</span>
              </div>
            </div>

            <div className="action-buttons">
              <a href="https://www.linkedin.com/in/asmithasathya/" target="_blank" rel="noopener noreferrer" className="action-btn linkedin-btn">
                <span>LinkedIn</span>
              </a>
              <a href="/Resume_Sathya_Asmitha.pdf" download className="action-btn resume-btn">
                <span>Download Resume</span>
              </a>
              <a href="/CV_Sathya_Asmitha.pdf" download className="action-btn cv-btn">
                <span>Download CV</span>
              </a>
            </div>
          </div>
          <div className="about-contact-info">
            <span className="about-email">Email: asmitha.sathya@gmail.com</span>
            <span className="about-phone">Phone: (609) 462-0213</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 