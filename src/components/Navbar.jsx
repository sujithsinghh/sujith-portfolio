import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Monogram Pill */}
        <a
          href="#"
          className="flex items-center gap-3 p-1.5 pr-4 rounded-full cyber-dock group transition-all duration-300 hover:border-[#D4FF00]/40 hover:scale-[1.02]"
        >
          <div className="w-9 h-9 rounded-full bg-[#141822] border border-[#1B202D] group-hover:border-[#D4FF00]/60 flex items-center justify-center font-mono font-bold text-white text-xs tracking-wider shadow-inner transition-colors">
            <span className="text-[#D4FF00]">M</span>S
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-xs text-white tracking-tight group-hover:text-[#D4FF00] transition-colors">
              Matta Sujith Singh
            </span>
            <span className="text-[10px] font-mono text-[#8E97AB]">
              B.Tech CSE @ BVRIT
            </span>
          </div>
        </a>

        {/* Center Floating Cyber Dock Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full cyber-dock shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-black bg-[#D4FF00] font-bold shadow-sm shadow-[#D4FF00]/30'
                    : 'text-[#9EA6B8] hover:text-[#D4FF00] hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Status Beacon & Resume Download */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full cyber-dock text-[11px] font-mono text-[#D4FF00] border border-[#D4FF00]/25">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF00]"></span>
            </span>
            <span className="font-medium">Open for Roles</span>
          </div>

          <a
            href={personalInfo.resumeUrl}
            download="Matta_Sujith_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full btn-volt cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            download="Matta_Sujith_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full btn-volt text-xs font-bold"
            aria-label="Download resume"
          >
            <FileText className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full cyber-dock text-[#C5D0E6] hover:text-[#D4FF00] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-7xl mx-auto cyber-dock rounded-2xl p-4 shadow-2xl border border-[#1B202D] animate-fadeIn pointer-events-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-xs font-medium rounded-xl transition-all ${
                    isActive
                      ? 'text-black bg-[#D4FF00] font-bold'
                      : 'text-[#9EA6B8] hover:text-[#D4FF00] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-[#1B202D] flex items-center justify-between text-[11px] font-mono text-[#D4FF00] px-1">
              <span>Status: Available for 2025/2026</span>
              <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse"></span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
