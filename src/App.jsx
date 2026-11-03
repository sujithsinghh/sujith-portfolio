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
    <div className="min-h-screen bg-[#0C0E12] text-[#F3F4F6] selection:bg-[#F59E0B]/30 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Container with Strict Alignment */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 space-y-24 sm:space-y-32 pt-28 pb-24">
        {/* Editorial Hero */}
        <Hero />

        {/* Verified Track Record & Academic Metrics */}
        <MetricsStrip />

        {/* Engineering Background & Philosophy */}
        <About />

        {/* Flagship & Specialized Project Case Studies */}
        <Projects />

        {/* Interactive Traffic Signal Optimization Simulation */}
        <TrafficSimulator />

        {/* Categorized Technical Skills */}
        <Skills />

        {/* Academic History & Verified Certifications */}
        <EducationAndCerts />

        {/* Direct Contact & Inquiry Form */}
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
