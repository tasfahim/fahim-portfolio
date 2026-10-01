import React from "react";

export default function Navbar() {
  return (
    <header>
    <nav className="wrap" aria-label="Main">
    <a className="brand" href="#top">MD Tasnim Mahmud FAHIM</a>
    <div className="links">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#research">Research</a>
    <a href="#cv">CV</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
    <a className="btn p" href="#cv" style={{ padding: '6px 14px' }}><i className="fa-solid fa-file-arrow-down" aria-hidden="true"></i>View CV</a>
    </div>
    </nav>
    </header>
  );
}
