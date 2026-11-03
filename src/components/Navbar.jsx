import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'simulator', 'skills', 'credentials', 'contact'];
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
    { num: '01', name: 'Projects', href: '#projects', id: 'projects' },
    { num: '02', name: 'Simulation', href: '#simulator', id: 'simulator' },
    { num: '03', name: 'Index', href: '#skills', id: 'skills' },
    { num: '04', name: 'Curriculum', href: '#credentials', id: 'credentials' },
    { num: '05', name: 'Inquiry', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E5E1D8]">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand / Identity */}
        <a href="#" className="font-serif text-lg sm:text-xl font-semibold text-[#121316] tracking-tight hover:text-[#9E3514] transition-colors">
          {personalInfo.name}
        </a>

        {/* Center Subhead (Desktop) */}
        <div className="hidden lg:block font-mono text-[11px] uppercase tracking-wider text-[#5C6069]">
          B.Tech Computer Science & Engineering · BVRIT Autonomous
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  isActive ? 'text-[#9E3514] font-semibold' : 'text-[#5C6069] hover:text-[#121316]'
                }`}
              >
                <span className="text-[#9E3514] mr-1">{link.num}</span>
                {link.name}
              </a>
            );
          })}

          <a
            href={personalInfo.resumeUrl}
            download="Matta_Sujith_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-btn-dark !py-1 !px-2.5 !text-[10px]"
          >
            <span>CV ↓</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            download="Matta_Sujith_Singh_Resume.pdf"
            className="editorial-btn-dark !py-1 !px-2 !text-[10px]"
          >
            CV ↓
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#121316] hover:text-[#9E3514] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E5E1D8] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-xs uppercase tracking-wider text-[#5C6069] hover:text-[#9E3514] py-1"
            >
              <span className="text-[#9E3514] mr-2">{link.num}</span>
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#E5E1D8] font-mono text-[11px] text-[#5C6069]">
            B.Tech CSE Class of 2027 · BVRIT
          </div>
        </div>
      )}
    </header>
  );
}