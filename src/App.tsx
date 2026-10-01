import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIBuild from "./components/WhatIBuild";
import About from "./components/About";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Cv from "./components/Cv";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";
import { usePortfolioEffects } from "./portfolioEffects";

export default function App() {
  usePortfolioEffects();

  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <WhatIBuild />
        <About />
        <Projects />
        <Research />
        <Cv />
        <Skills />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
