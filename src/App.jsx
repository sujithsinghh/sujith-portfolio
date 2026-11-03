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
    <div className="min-h-screen bg-[#08090C] text-[#F1F4FA] selection:bg-[#D4FF00] selection:text-black relative overflow-x-clip">
      {/* Floating Cyber Dock Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* Eye-Catching Kinetic Hero with Photo 2 (White Shirt) & Live Code */}
        <Hero />

        {/* Verified Academic & Hackathon Metric Strip */}
        <MetricsStrip />

        {/* Engineering Philosophy & Academic Journey */}
        <About />

        {/* Verified Technical Projects & Case Studies */}
        <Projects />

        {/* Signature Interactive Feature: Computer Vision Traffic Optimizer */}
        <TrafficSimulator />

        {/* Full-Stack & AI Skill Matrix */}
        <Skills />

        {/* Academic Milestones & Industry Certifications */}
        <EducationAndCerts />

        {/* Direct Contact & Collaboration Form */}
        <Contact />
      </main>

      {/* Modern Status Footer */}
      <Footer />
    </div>
  );
}
