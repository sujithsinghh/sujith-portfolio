import React, { useState, useEffect } from 'react';
import { ArrowUp, ShieldCheck, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#202534] bg-[#0C0E12] py-12 text-xs font-mono text-[#949EAE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-8">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#202534]">
          
          {/* Identity */}
          <div className="space-y-1">
            <span className="text-sm font-semibold text-[#F3F4F6] font-sans block">
              {personalInfo.name}
            </span>
            <p className="text-xs text-[#949EAE]">
              Computer Science & Engineering Undergraduate · BVRIT (2023–2027)
            </p>
          </div>

          {/* Telemetry / Live IST Clock */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#13161F] border border-[#202534]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#949EAE]">IST (UTC+5:30):</span>
              <span className="text-[#F3F4F6] font-medium">{istTime || 'Loading...'}</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#13161F] border border-[#202534] text-[#949EAE]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Verified Data</span>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#13161F] border border-[#202534] hover:border-[#384055] text-[#949EAE] hover:text-[#F3F4F6] transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F59E0B]" />
          </button>

        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#949EAE]">
          <p>
            © {new Date().getFullYear()} Matta Sujith Singh. Designed & engineered with architectural discipline.
          </p>
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>React 18 · Vite · Tailwind CSS · Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}