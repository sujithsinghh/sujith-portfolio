import React from 'react';
import { verifiedMetrics } from '../data/portfolioData';
import { Award, BookOpen, Globe2, Layers, TrendingUp } from 'lucide-react';

export default function MetricsStrip() {
  const icons = [BookOpen, Award, Globe2, Layers];
  const accents = ['text-[#D4FF00]', 'text-[#A855F7]', 'text-[#38BDF8]', 'text-[#D4FF00]'];
  const borderAccents = ['group-hover:border-[#D4FF00]/40', 'group-hover:border-[#A855F7]/40', 'group-hover:border-[#38BDF8]/40', 'group-hover:border-[#D4FF00]/40'];

  return (
    <div className="border-y border-[#1B202D] bg-[#0A0C12]/90 backdrop-blur-xl relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {verifiedMetrics.map((item, index) => {
            const Icon = icons[index];
            const accent = accents[index];
            const borderAccent = borderAccents[index];

            return (
              <div
                key={item.label}
                className={`p-5 rounded-2xl obsidian-card relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-[#1B202D] ${borderAccent}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#8E97AB] flex items-center gap-1.5">
                    <Icon className={`w-4 h-4 ${accent}`} />
                    <span>{item.label}</span>
                  </span>
                  <TrendingUp className="w-3.5 h-3.5 text-[#475569] group-hover:text-[#D4FF00] transition-colors" />
                </div>

                <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                  {item.value}
                </div>

                <div className="text-xs text-[#94A3B8] mt-1 line-clamp-1">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
