import React from 'react';
import { verifiedMetrics } from '../data/portfolioData';

export default function MetricsStrip() {
  return (
    <section className="py-6 border-b border-[#E5E1D8]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {verifiedMetrics.map((item) => (
          <div key={item.kicker} className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#5C6069]">
              {item.kicker}
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-medium text-[#121316] leading-snug">
              {item.value}
            </div>
            <p className="text-xs text-[#5C6069] leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}