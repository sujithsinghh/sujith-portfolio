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
    <div className="min-h-screen bg-aurora-luxe bg-grid-aurora text-[#F8FAFC] selection:bg-[#6366F1]/40 selection:text-white relative">
      {/* Floating Island Navigation Dock */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Editorial Hero with Perfectly Aligned 3:4 Portrait & Workstation */}
        <Hero />

        {/* Verified Stats Bento Strip */}
        <MetricsStrip />

        {/* Engineering Philosophy & Background */}
        <About />

        {/* Signature Interactive Projects Studio */}
        <Projects />

        {/* Real-Time Traffic Signal Command Console */}
        <TrafficSimulator />

        {/* Categorized Technical Skills Matrix */}
        <Skills />

        {/* Education & Verified Industry Credentials */}
        <EducationAndCerts />

        {/* Direct Contact & Collaboration Hub */}
        <Contact />
      </main>

      {/* Modern Status Footer */}
      <Footer />
    </div>
  );
}
