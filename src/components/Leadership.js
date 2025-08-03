import React from 'react';
import './Leadership.css';

const Leadership = () => {
  const leadershipData = [
    {
      title: "Biomedical Engineering & Design Lab",
      role: "Lab Manager",
      duration: "Aug 2022 - May 2023",
      description: [
        "Instructed 5-10 undergraduate students on foundational biomedical engineering skills including building circuits, programming Arduino, and utilizing bioinformatics software PyMol, Jalview, and Fiji/Image J for cell imaging.",
        "Guided students in developing a technical solution to a health inequity problem for final presentation project.",
      ]
    },
    {
      title: "Johns Hopkins Design Team (LymphaLock)",
      role: "Prototyping Lead",
      duration: "Aug 2022 - May 2023",
      description: [
        "Developed a device for interventional radiologists to maintain stable access to the lymph nodes during lymphangiographies.",
        "Conducted root cause, failure mode, and risk analysis to identify procedural issues and develop design requirements for solution.",
        "Employed 3D printing, CAD, laser cutting, soldering, and usability testing to design and build 2 functional works-like prototypes.",
        "Pava Center's Spark Accelerator Alumni, 2023 Hopkins New Venture Challenge Finalist, 2023 Design Day Presenters"
      ]
    },
    {
    title: "Computational Medicine: Cardiology Laboratory",
    role: "Teaching Assistant",
    duration: "Aug 2024 - Dec 2024",
    description: [
      "Instructed 30 undergraduate biomedical engineering students in labs corresponding to analyzing electrocardiogram data, mechanisms that regulate cardiac muscle contraction and relaxation, and baroreceptor control of the cardiovascular system.",
      "Dedicated 10-12 hours weekly to assist students with comprehending lab concepts and provide feedback on assignments and lab reports."
    ]
    },
    {
      title: "JHU Zinda Dance Team",
      role: "2023-24 Co-Captain, 2022-23 Treasurer",
      duration: "Oct 2021 - May 2024",
      description: [
        "Choreographed 7 dance styles and led 19-member team in rehearsals and competitions (3rd in Intercollegiate Competition).",
        "Prepared budget proposals that secured $10,000 and raised $2,000 in monthly fundraisers to cover all expenses."
      ]
    },
    {
      title: "Johns Hopkins Design Team (Stomify)",
      role: "Design Team Co-Leader",
      duration: "Aug 2024 - Present",
      description: [
        "Led cross-functional team of 7 undergraduate students in developing a novel urostomy baseplate and pouch system for leakage management and enhanced clothing adaptability to mitigate current urostomy pouch complications.",
        "Dedicated 12 months towards design process to validate needs, map to design requirements, and conduct verification/validation.",
        "Awarded Linda Trinh Memorial Award and secured $1000 from Johns Hopkins University Summer Bridge Fund."

      ]
    }
  ];

  return (
    <div className="leadership">
      <div className="container">
        <h2 className="section-title">Leadership</h2>
        <div className="leadership-content">
          {leadershipData.map((item, index) => (
            <div key={index} className="leadership-card">
              <div className="leadership-header">
                <h3 className="leadership-title">{item.title}</h3>
                <div className="leadership-role">{item.role}</div>
                <div className="leadership-duration">{item.duration}</div>
              </div>
              {item.mentor && (
                <div className="leadership-mentor">{item.mentor}</div>
              )}
              <div className="leadership-description">
                <ul>
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership; 