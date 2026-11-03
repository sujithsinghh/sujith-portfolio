import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsStrip from './components/MetricsStrip';
import About from './components/About';
import Projects from './components/Projects';
import TrafficSimulator from './components/TrafficSimulator';
import Skills from './components/Skills';
import EducationAndCerts from './components/EducationAndCerts';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-glassy-dashboard bg-grid-architectural text-[#F8FAFC] selection:bg-[#FF8A00]/40 selection:text-white relative">
      {/* Floating Glass Island Dock */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* Glass Dashboard Hero with Live Code & Visual Workstation */}
        <Hero />

        {/* Frosted Glass Metrics Strip (StatsCard from Reel) */}
        <MetricsStrip />

        {/* Engineering Philosophy & Narrative */}
        <About />

        {/* Interactive Glass Projects Studio */}
        <Projects />

        {/* Traffic Operations Terminal Simulator */}
        <TrafficSimulator />

        {/* Glass Bento Skill Matrix */}
        <Skills />

        {/* Education & Verified Certifications */}
        <EducationAndCerts />

        {/* Direct Contact & Collaboration Center */}
        <Contact />
      </main>

      {/* Glass Status Footer */}
      <Footer />
    </div>
  );
}
