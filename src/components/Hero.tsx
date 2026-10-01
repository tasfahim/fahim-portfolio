import React from "react";

export default function Hero() {
  return (
    <div className="hero">
    <div className="wrap">
    <div className="hero-content">
    <div className="hero-topline">
    <span className="hero-kicker"><span className="kicker-dot"></span> IoT & Robotics Engineer</span>
    <span className="hero-index">01 / 06</span>
    </div>
    <div className="hero-main">
    <div className="hero-copy">
    <p className="hero-overline">ENGINEER · RESEARCHER · BUILDER</p>
    <div className="name-block">
    <h2>MD Tasnim<br /><span>Mahmud Fahim</span></h2>
    </div>
    <div className="hero-accent-line"></div>
    <p className="hero-statement">
                Building intelligent systems that connect the physical and digital world.
              </p>
    <p className="l">
                IoT, AI/ML, robotics and software engineering — turning ideas into practical, connected systems.
              </p>
    <div className="row">
    <a className="btn p" href="#projects"><i className="fa-solid fa-folder-open" aria-hidden="true"></i>Explore my work</a>
    <a className="btn" href="#cv"><i className="fa-solid fa-file-arrow-down" aria-hidden="true"></i>View CV</a>
    </div>
    <div className="soc">
    <a href="https://github.com/tasfahim"><i className="fa-brands fa-github" aria-hidden="true"></i>GitHub</a>
    <a href="https://linkedin.com/in/mdfahimmahmud"><i className="fa-brands fa-linkedin" aria-hidden="true"></i>LinkedIn</a>
    <a href="mailto:mahmudfahim74@gmail.com"><i className="fa-solid fa-envelope" aria-hidden="true"></i>Email</a>
    </div>
    </div>
    <div className="hero-visual">
    <div className="visual-orbit orbit-one"></div>
    <div className="visual-orbit orbit-two"></div>
    <div className="hero-photo-wrap">
    <img className="hero-photo" src="/images/Fahim.jpg" alt="MD Tasnim Mahmud Fahim" />
    </div>
    <div className="floating-card floating-card-top">
    <span className="floating-label">FOCUS</span>
    <strong>Intelligent Systems</strong>
    </div>
    <div className="floating-card floating-card-bottom">
    <span className="floating-label">STACK</span>
    <strong>IoT · AI/ML · Robotics</strong>
    </div>
    </div>
    </div>
    <div className="hero-bottom">
    <span>Connected hardware</span>
    <span>Intelligent software</span>
    <span>Research-driven systems</span>
    <span className="scroll-cue">Scroll to explore <i className="fa-solid fa-arrow-down" aria-hidden="true"></i></span>
    </div>
    </div>
    </div>
    </div>
  );
}
