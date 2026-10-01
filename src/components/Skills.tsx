import React from "react";

export default function Skills() {
  return (
    <section id="skills">
    <div className="wrap">
    <h2><i className="fa-solid fa-layer-group section-icon" aria-hidden="true"></i>Technical skills</h2>
    <dl style={{ marginTop: '32px' }}>
    <div>
    <dt className="skill-title"><i className="fa-solid fa-terminal section-icon" aria-hidden="true"></i>Programming</dt>
    <dd>Python, C, C++, JavaScript, TypeScript, C#</dd>
    </div>
    <div>
    <dt className="skill-title"><i className="fa-solid fa-brain section-icon" aria-hidden="true"></i>AI / Machine Learning</dt>
    <dd>
              Machine Learning, Deep Learning, TensorFlow,
              Speech Processing, NumPy, Pandas
            </dd>
    </div>
    <div>
    <dt className="skill-title"><i className="fa-solid fa-microchip section-icon" aria-hidden="true"></i>IoT & Embedded</dt>
    <dd>
              ESP32, Arduino, Raspberry Pi, NodeMCU,
              Sensor Integration, Automation
            </dd>
    </div>
    <div>
    <dt className="skill-title"><i className="fa-solid fa-tower-broadcast section-icon" aria-hidden="true"></i>Communication</dt>
    <dd>Wi-Fi, Bluetooth, Zigbee</dd>
    </div>
    <div>
    <dt className="skill-title"><i className="fa-solid fa-globe section-icon" aria-hidden="true"></i>Web & Software</dt>
    <dd>
              React, Next.js, Node.js, Express.js,
              Tailwind CSS, REST APIs
            </dd>
    </div>
    <div>
    <dt className="skill-title"><i className="fa-solid fa-gamepad section-icon" aria-hidden="true"></i>Game development</dt>
    <dd>Unity, C#, Gameplay Programming</dd>
    </div>
    <div>
    <dt className="skill-title"><i className="fa-solid fa-database section-icon" aria-hidden="true"></i>Databases</dt>
    <dd>MySQL, MongoDB, Firebase, SQLite</dd>
    </div>
    <div>
    <dt className="skill-title"><i className="fa-solid fa-screwdriver-wrench section-icon" aria-hidden="true"></i>Tools</dt>
    <dd>Git, GitHub, VS Code</dd>
    </div>
    </dl>
    </div>
    </section>
  );
}
