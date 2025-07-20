import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      school: "Johns Hopkins University",
      classes: [
        {
          category: "Computer Science & Programming",
          courses: [
            "Data Structures",
            "Algorithms",
            "Computer Vision",
            "Machine Learning",
            "Python Programming",
            "C++ Programming"
          ]
        },
        {
          category: "Core Biomedical Engineering",
          courses: [
            "Biomedical Engineering Design",
            "Biomedical Engineering Lab",
            "Biomedical Engineering Systems",
            "Biomedical Engineering Analysis"
          ]
        },
        {
          category: "Mathematics & Statistics",
          courses: [
            "Calculus I, II, III",
            "Linear Algebra",
            "Differential Equations",
            "Probability & Statistics",
            "Numerical Methods"
          ]
        },
        {
          category: "Biology & Chemistry",
          courses: [
            "General Biology",
            "General Chemistry",
            "Organic Chemistry",
            "Biochemistry",
            "Cell Biology",
            "Molecular Biology"
          ]
        },
        {
          category: "Physics & Engineering",
          courses: [
            "Physics I, II",
            "Thermodynamics",
            "Fluid Mechanics",
            "Signal Processing",
            "Control Systems"
          ]
        }
      ]
    }
  ];

  return (
    <div className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div className="education-school">{edu.school}</div>
                <div className="education-details">
                </div>
              </div>
              <div className="education-classes">
                <h4>Relevant Coursework</h4>
                <div className="class-categories">
                  {edu.classes.map((category, catIndex) => (
                    <div key={catIndex} className="class-category">
                      <h5 className="category-title">{category.category}</h5>
                      <div className="course-list">
                        {category.courses.map((course, courseIndex) => (
                          <span key={courseIndex} className="course-item">{course}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 