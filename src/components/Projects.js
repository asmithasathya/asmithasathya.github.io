import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Predicting Hemoglobin Levels for Anemia Severity Assessment",
      course: "AI-ML for Global Health",
      semester: "Fall 2024",
      description: [
        "Developed model for non-invasive anemia diagnosis via cellphone images of patients' palm, fingernails, tongue, and conjunctiva.",
        "Utilized YOLOv8 and EfficientNet for segmentation and regression in Python to determine hemoglobin level, achieving RMSE of 1.34."
      ],
      technologies: ["Python", "YOLOv8", "EfficientNet", "Computer Vision", "Machine Learning"],
      github: "https://github.com/yourusername/anemia-detection"
    },
    {
      title: "Bone Age Prediction from X-Ray Images",
      course: "Computer Vision",
      semester: "Fall 2024",
      description: [
        "Utilized InceptionV3 with data augmentation to build a pediatric bone image classification model from 13000 X-ray images.",
        "Reduced MAE by 55.5% from previously accepted MobileNet model."
      ],
      technologies: ["Python", "InceptionV3", "Data Augmentation", "Medical Imaging", "Deep Learning"],
      github: "https://github.com/yourusername/bone-age-prediction"
    },
    {
      title: "Query Ability of Probabilistic Data Structures",
      course: "Computational Genomics: Sequences",
      semester: "Fall 2024",
      description: [
        "Implemented bloom filter, quotient filter, and cuckoo filter manually with faster insertion time than PyProbables library functions.",
        "Developed efficient k-mer table storage method for large datasets using Sequence Bloom Tree and Sourmash API in Python."
      ],
      technologies: ["Python", "PyProbables", "Sourmash API", "Sequence Bloom Tree"],
      github: "https://github.com/TravYou/Sketching_project"
    }
  ];

  return (
    <div className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="year-tab">
                <span>{project.semester}</span>
              </div>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-description">
                <ul>
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="project-technologies">
                <h4>Technologies:</h4>
                <div className="tech-list">
                  {project.technologies.join(', ')}
                </div>
              </div>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
              >
                <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 