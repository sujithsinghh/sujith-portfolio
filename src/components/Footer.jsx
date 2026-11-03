import React, { useState, useEffect } from 'react';
import { ArrowUp, Code2, ShieldCheck, Zap } from 'lucide-react';

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
    <footer className="py-12 bg-black/50 text-white/60 text-xs font-mono relative border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#D946EF] border border-white/20 flex items-center justify-center font-bold text-white text-xs shadow-inner">
              MS
            </div>
            <div>
              <span className="text-white font-semibold text-sm font-sans block">
                Matta Sujith Singh
              </span>
              <span className="text-[11px] text-white/50">
                Computer Science Undergraduate @ BVRIT
              </span>
            </div>
          </div>

          {/* Time & Telemetry */}
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-dock border border-white/15 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white/60">IST (UTC+5:30):</span>
              <span className="text-white font-medium">{istTime || 'Live'}</span>
            </div>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-dock text-white/70 border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-[#818CF8]" />
              <span>Verified Portfolio Data</span>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white px-4 py-2 rounded-full glass-dock border border-white/15 hover:border-white/30 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 text-[#818CF8]" />
          </button>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/40">
          <p>
            © {new Date().getFullYear()} Matta Sujith Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#818CF8]" />
            <span>Built with React 18, Vite, Tailwind CSS & Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
