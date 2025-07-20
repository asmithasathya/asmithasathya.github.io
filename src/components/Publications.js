import React from 'react';
import './Publications.css';

const Publications = () => {
  const publicationsData = [
    {
      authors: "Riman, S., Bright, J., Huffman, K., Moreno, L., Liu, S., Sathya, A., Vallone, P.",
      title: "A collaborative study on the precision of the Markov chain Monte Carlo algorithms used for DNA profile interpretation.",
      journal: "Forensic Science International: Genetics",
      year: "2024",
      doi: "https://doi.org/10.1016/j.fsigen.2024.103088",
      experience: "NIST Data Analytics Internship"
    },
    {
      authors: "Ruiz, A.L., Xiao, M., Sathya, A., Piccininni, N., Liu, G., Siddiq, N., Chen, H., & McEnnis, K.",
      title: "Influence of particle z-potential and experimental procedure on protein corona formation and multicomponent aggregation.",
      journal: "AIChE Journal",
      year: "2023",
      volume: "69(12)",
      doi: "https://doi.org/10.1002/aic.18237",
      experience: "NJIT NSF REU: Optics and Photonics"
    }
  ];

  const scrollToExperience = (experienceName) => {
    // Find the experience section and scroll to it
    const experiencesSection = document.getElementById('experiences');
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: 'smooth' });
      
      // Wait a moment for the scroll to complete, then switch to research tab
      setTimeout(() => {
        const researchTab = document.querySelector('.tab-button[data-tab="research"]');
        if (researchTab) {
          researchTab.click();
        }
      }, 500);
    }
  };

  return (
    <div className="publications">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-content">
          {publicationsData.map((pub, index) => (
            <div key={index} className="publication-wrapper">
              <div className="publication-card">
                <div className="publication-header">
                  <div className="publication-authors">{pub.authors} ({pub.year}).</div>
                  <div className="publication-title">{pub.title}</div>
                  <div className="publication-journal">
                    {pub.journal}
                    {pub.volume && `, ${pub.volume}`}.
                  </div>
                </div>
              </div>
              <div className="publication-links">
                <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="publication-link">
                  View Publication
                </a>
                <button 
                  onClick={() => scrollToExperience(pub.experience)}
                  className="experience-link-btn"
                >
                  View Related Experience
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications; 