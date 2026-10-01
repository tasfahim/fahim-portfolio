import React from "react";

export default function Cv() {
  return (
    <section id="cv">
    <div className="wrap">
    <h2><i className="fa-solid fa-file-arrow-down section-icon" aria-hidden="true"></i>Curriculum Vitae</h2>
    <p className="sub">
          A complete CV covering my background across IoT, AI/ML, robotics and software development.
        </p>
    <div className="card cv-card" style={{ maxWidth: '620px' }}>
    <h3>
    <i className="fa-solid fa-file-pdf section-icon" aria-hidden="true"></i>
            MD Tasnim Mahmud Fahim — CV
          </h3>
    <p>
            Education, research publication, selected projects, technical skills,
            extracurricular activities and additional information.
          </p>
    <div className="cv-meta">
    <i className="fa-solid fa-file-pdf" aria-hidden="true"></i>
            PDF CV
          </div>
    <a className="btn p" href="/CV.pdf" target="_blank" rel="noopener noreferrer">
    <i className="fa-solid fa-download" aria-hidden="true"></i>
            Download CV
          </a>
    </div>
    </div>
    </section>
  );
}
