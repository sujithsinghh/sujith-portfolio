import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsStrip from './components/MetricsStrip';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationAndCerts from './components/EducationAndCerts';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121316] selection:bg-[#9E3514]/15 selection:text-[#121316]">
      {/* Top Editorial Masthead */}
      <Navbar />

      {/* Main Broad-Sheet Container */}
      <main className="max-w-[1160px] mx-auto px-5 sm:px-8 space-y-12 sm:space-y-16">
        {/* Editorial Broadsheet Hero with Fig. 01 Portrait Plate */}
        <Hero />

        {/* Academic & Competition Ledger Strip */}
        <MetricsStrip />

        {/* Section 01: Case Studies + Embedded Fig. 02 Test Bench + Curated Works */}
        <Projects />

        {/* Section 02: Technical Capabilities & Typographic Index */}
        <Skills />

        {/* Section 03: Curriculum Vitae & Verified Credentials */}
        <EducationAndCerts />

        {/* Section 04: Inquiries Letterhead & Direct Communication */}
        <Contact />

        {/* Colophon & Footer */}
        <Footer />
      </main>
    </div>
  );
}