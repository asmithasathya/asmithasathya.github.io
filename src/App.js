import React, { useEffect } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Leadership from './components/Leadership';
import Navigation from './components/Navigation';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        <section id="about" className="section">
          <AboutMe />
        </section>
        <section id="experiences" className="section">
          <Experiences />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="publications" className="section">
          <Publications />
        </section>
        <section id="leadership" className="section">
          <Leadership />
        </section>
      </main>
    </div>
  );
}

export default App;
