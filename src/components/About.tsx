import React from "react";

export default function About() {
  return (
    <section id="about">
    <div className="wrap">
    <h2>Building across disciplines</h2>
    <p className="sub">
          I am an <a className="edu-link" href="https://ire.uftb.ac.bd/" target="_blank" rel="noopener noreferrer">IoT and Robotics Engineering</a> graduate interested in building
          intelligent systems that connect hardware, software and machine learning.
          My work spans embedded systems, AI/ML, robotics, web applications and
          interactive technologies. I enjoy turning research ideas into practical
          working systems.
        </p>
    <div className="grid">
    <div className="card">
    <h3><i className="fa-solid fa-brain section-icon" aria-hidden="true"></i>AI & ML</h3>
    <ul className="tags">
    <li>Machine learning</li>
    <li>Deep learning</li>
    <li>Speech processing</li>
    </ul>
    </div>
    <div className="card">
    <h3><i className="fa-solid fa-robot section-icon" aria-hidden="true"></i>IoT & Robotics</h3>
    <ul className="tags">
    <li>Embedded systems</li>
    <li>Sensors</li>
    <li>Automation</li>
    </ul>
    </div>
    <div className="card">
    <h3><i className="fa-solid fa-code section-icon" aria-hidden="true"></i>Software</h3>
    <ul className="tags">
    <li>React</li>
    <li>Next.js</li>
    <li>Node.js</li>
    </ul>
    </div>
    <div className="card">
    <h3><i className="fa-solid fa-gamepad section-icon" aria-hidden="true"></i>Game development</h3>
    <ul className="tags">
    <li>Unity</li>
    <li>C#</li>
    <li>Gameplay</li>
    </ul>
    </div>
    </div>
    </div>
    </section>
  );
}
