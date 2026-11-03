import React from 'react';
import { skillsIndex } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="pt-8 pb-12 border-b border-[#E5E1D8]">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E5E1D8]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9E3514] font-semibold block mb-2">
            Section 02 / Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121316] font-normal tracking-tight">
            Technical Index & Proficiencies
          </h2>
        </div>
        <p className="text-sm text-[#5C6069] max-w-md leading-relaxed md:text-right">
          Directly aligned with resume qualifications. Every technology listed has been actively implemented in coursework, hackathons, or applications.
        </p>
      </div>

      {/* Typographic Index Ledger */}
      <div className="divide-y divide-[#E5E1D8]">
        {skillsIndex.map((category) => (
          <div
            key={category.categoryNumber}
            className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline"
          >
            {/* Category Header (4 cols) */}
            <div className="lg:col-span-4 flex items-baseline gap-3">
              <span className="font-mono text-xs text-[#9E3514] font-semibold">
                {category.categoryNumber}
              </span>
              <h3 className="font-serif text-xl text-[#121316] font-medium">
                {category.categoryName}
              </h3>
            </div>

            {/* Items Column (8 cols) */}
            <div className="lg:col-span-8 flex flex-wrap gap-x-8 gap-y-3">
              {category.items.map((skill) => (
                <div key={skill.name} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <strong className="text-sm text-[#121316] font-medium">
                    {skill.name}
                  </strong>
                  <span className="font-mono text-xs text-[#5C6069]">
                    ({skill.context})
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}