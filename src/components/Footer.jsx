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
    <footer className="py-12 bg-[#06070A] text-[#8E97AB] text-xs font-mono relative border-t border-[#1B202D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1B202D]">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#141822] border border-[#1B202D] flex items-center justify-center font-bold text-white text-xs shadow-inner">
              <span className="text-[#D4FF00]">M</span>S
            </div>
            <div>
              <span className="text-white font-semibold text-sm font-sans block">
                Matta Sujith Singh
              </span>
              <span className="text-[11px] text-[#64748B]">
                Computer Science Undergraduate @ BVRIT
              </span>
            </div>
          </div>

          {/* Time & Telemetry */}
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full cyber-dock border border-[#D4FF00]/25 text-[#D4FF00]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
              <span>IST (UTC+5:30):</span>
              <span className="text-white font-medium">{istTime || 'Live'}</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full cyber-dock text-[#9EA6B8] border border-[#1B202D]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span>Verified Portfolio Data</span>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#9EA6B8] hover:text-[#D4FF00] px-4 py-2 rounded-full cyber-dock border border-[#1B202D] hover:border-[#D4FF00]/40 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 text-[#D4FF00]" />
          </button>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#64748B]">
          <p>
            © {new Date().getFullYear()} Matta Sujith Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>Built with React 18, Vite, Tailwind CSS & Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
