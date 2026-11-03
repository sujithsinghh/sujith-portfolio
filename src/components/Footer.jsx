import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E5E1D8] font-mono text-[11px] text-[#5C6069]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {personalInfo.name} · Designed with editorial restraint.
        </div>

        <div className="flex items-center gap-6">
          <span>BVRIT CSE Class of 2027</span>
          <button
            onClick={scrollToTop}
            className="text-[#121316] hover:text-[#9E3514] flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}