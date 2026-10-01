import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
    <div className="wrap">
    <h2><i className="fa-solid fa-paper-plane section-icon" aria-hidden="true"></i>Let's build something</h2>
    <p className="sub">
          Have a project, research idea or opportunity? Get in touch.
        </p>
    <a className="g" href="mailto:mahmudfahim74@gmail.com">
          mahmudfahim74@gmail.com
        </a>
    <div className="row" style={{ marginTop: '28px' }}>
    <a className="btn p" href="mailto:mahmudfahim74@gmail.com"><i className="fa-solid fa-envelope" aria-hidden="true"></i>Email me</a>
    <a className="btn" href="https://github.com/tasfahim"><i className="fa-brands fa-github" aria-hidden="true"></i>GitHub</a>
    <a className="btn" href="https://linkedin.com/in/mdfahimmahmud"><i className="fa-brands fa-linkedin" aria-hidden="true"></i>LinkedIn</a>
    </div>
    </div>
    </section>
  );
}
