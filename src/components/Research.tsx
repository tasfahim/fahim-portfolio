import React from "react";

export default function Research() {
  return (
    <section id="research">
    <div className="wrap res">
    <div>
    <h2><i className="fa-solid fa-file-lines section-icon" aria-hidden="true"></i>Research</h2>
    <p className="sub">IEEE conference publication, 2026.</p>
    </div>
    <div className="card">
    <h3>
            An Intelligent IoT-Enabled Automated Medicine Dispensing
            and Health Management System
          </h3>
    <p>
            The research presents an IoT-enabled system for automated
            medicine dispensing and health management.
          </p>
    <p className="doi">
            DOI: 10.1109/ICECTE69292.2026.11429319
          </p>
    <a className="btn p" href="https://doi.org/10.1109/ICECTE69292.2026.11429319">
    <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>View publication
          </a>
    </div>
    </div>
    </section>
  );
}
