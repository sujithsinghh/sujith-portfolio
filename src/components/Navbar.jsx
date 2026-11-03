import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'traffic-sim', 'skills', 'education', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Simulator', href: '#traffic-sim', id: 'traffic-sim' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0C0E12]/95 backdrop-blur-md border-b border-[#202534]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Identity */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-semibold text-sm text-white tracking-tight group-hover:text-[#F59E0B] transition-colors">
            Matta Sujith Singh
          </span>
          <span className="text-xs font-mono text-[#949EAE] hidden sm:inline-block border-l border-[#202534] pl-2.5">
            B.Tech CSE @ BVRIT
          </span>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-medium transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-[#949EAE] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Availability & Resume */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#949EAE]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Open for Roles</span>
          </div>

          <a
            href={personalInfo.resumeUrl}
            download="Matta_Sujith_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs font-medium px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#949EAE]" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-[#949EAE]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download="Matta_Sujith_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary p-1.5 rounded-lg text-xs"
            aria-label="Download resume"
          >
            <FileText className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#949EAE] hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#13161F] border-b border-[#202534] px-6 py-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-[#949EAE] hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#202534] flex items-center justify-between text-xs font-mono text-[#949EAE]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Available for Summer 2025/2026</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
