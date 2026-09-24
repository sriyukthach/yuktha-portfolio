import React from 'react';
import BackgroundElements from './components/BackgroundElements';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import MoreProjects from './components/MoreProjects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import Education from './components/Education';
import LanguagesInterests from './components/LanguagesInterests';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary selection:bg-accent-blue/30 selection:text-white font-sans overflow-x-hidden">
      {/* Background canvas effects */}
      <BackgroundElements />

      {/* Main navigation header */}
      <Navbar />

      {/* Main content sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <MoreProjects />
        <Hackathons />
        <Certifications />
        <Education />
        <LanguagesInterests />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
