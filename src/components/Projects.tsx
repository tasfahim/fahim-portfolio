import React from "react";

export default function Projects() {
  return (
    <section id="projects">
    <div className="wrap">
    <h2>Works</h2>
    <p className="sub">
          Systems I have designed and built, from embedded hardware to web applications.
        </p>
    <div className="proj">
    <article className="card">
    <span className="cat"><i className="fa-solid fa-microchip icon" aria-hidden="true"></i>IoT & Robotics</span>
    <h3>IgnisShield</h3>
    <p>
              An autonomous fire detection and extinguishing robot that detects fire
              and responds through automated movement and extinguishing mechanisms.
            </p>
    <ul className="tags">
    <li>ESP32</li>
    <li>Arduino</li>
    <li>Sensors</li>
    <li>Motor Driver</li>
    <li>Bluetooth</li>
    <li>Embedded Systems</li>
    </ul>
    <details>
    <summary>How it works</summary>
    <p>
                Sensors detect conditions, the controller identifies fire,
                the robot moves toward the target, and the extinguishing mechanism activates.
              </p>
    </details>
    </article>
    <article className="card">
    <span className="cat"><i className="fa-solid fa-wifi icon" aria-hidden="true"></i>IoT</span>
    <h3>AlertShield</h3>
    <p>
              An IoT safety monitoring dashboard that tracks fire, flood, gas,
              vibration and temperature conditions and offers interactive actuator controls.
            </p>
    <ul className="tags">
    <li>Flutter</li>
    <li>IoT</li>
    <li>Sensors</li>
    <li>Firebase</li>
    <li>AI Integration</li>
    </ul>
    </article>
    <article className="card">
    <span className="cat"><i className="fa-solid fa-brain icon" aria-hidden="true"></i>AI / ML</span>
    <h3>Reliability-Aware Speech Framework</h3>
    <p>
              A speech-processing and IoT framework for dyslexia-informed learning support.
              It turns spoken reading into traceable literacy-support evidence through speech
              recognition, word-level alignment, reliability classification and adaptive decisions.
            </p>
    <ul className="tags">
    <li>Python</li>
    <li>Machine Learning</li>
    <li>Speech Processing</li>
    <li>ASR</li>
    <li>IoT</li>
    <li>Data Analysis</li>
    </ul>
    <details>
    <summary>How it works</summary>
    <p>
                Speech input → ASR → word alignment → reliability analysis →
                evidence → adaptive recommendation.
              </p>
    </details>
    </article>
    <article className="card">
    <span className="cat"><i className="fa-solid fa-code icon" aria-hidden="true"></i>Software / AI</span>
    <h3>MediSage</h3>
    <p>
              An AI-powered medical information assistant, built as a responsive
              web app for interacting with AI-generated health information.
            </p>
    <ul className="tags">
    <li>Next.js</li>
    <li>React</li>
    <li>TypeScript</li>
    <li>Tailwind CSS</li>
    <li>Gemini API</li>
    <li>NextAuth.js</li>
    <li>MongoDB</li>
    </ul>
    </article>
    <article className="card">
    <span className="cat"><i className="fa-solid fa-laptop-code icon" aria-hidden="true"></i>Software</span>
    <h3>Social Media Studio</h3>
    <p>
              A multi-platform campaign platform for preparing, adapting,
              scheduling and publishing social media content.
            </p>
    <ul className="tags">
    <li>React</li>
    <li>Express.js</li>
    <li>JavaScript</li>
    <li>SQLite</li>
    <li>Image Processing</li>
    <li>REST APIs</li>
    <li>Webhooks</li>
    <li>HMAC-SHA256</li>
    </ul>
    <details>
    <summary>How it works</summary>
    <p>
                Create campaign → upload content → AI-assisted caption →
                platform adaptation → schedule → publish.
              </p>
    </details>
    </article>
    <article className="card">
    <span className="cat"><i className="fa-solid fa-laptop-code icon" aria-hidden="true"></i>Software</span>
    <h3>Campus SafeWitness</h3>
    <p>
              An anonymous campus incident reporting platform with secure
              reporting and role-based administrative management.
            </p>
    <ul className="tags">
    <li>Next.js</li>
    <li>TypeScript</li>
    <li>Prisma</li>
    <li>PostgreSQL</li>
    <li>JWT</li>
    <li>Tailwind CSS</li>
    <li>Role-Based Access</li>
    </ul>
    <details>
    <summary>How it works</summary>
    <p>
                Student submits anonymous report → secure backend → database →
                admin dashboard → incident management.
              </p>
    </details>
    </article>
    </div>
    </div>
    </section>
  );
}
