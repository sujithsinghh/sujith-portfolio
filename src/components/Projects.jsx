import React, { useState, useMemo } from 'react';
import { ExternalLink, ChevronRight, Sliders, RefreshCw, Zap, Ban, Play } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Embedded Interactive Simulator State for Fig. 02
  const [densities, setDensities] = useState({
    north: 65,
    south: 85,
    east: 35,
    west: 20,
  });

  const { total, allocations, activeLane, greenTimes } = useMemo(() => {
    const sum = densities.north + densities.south + densities.east + densities.west;
    if (sum === 0) {
      return {
        total: 0,
        allocations: { north: 0, south: 0, east: 0, west: 0 },
        activeLane: null,
        greenTimes: { north: 0, south: 0, east: 0, west: 0 }
      };
    }
    const allocs = {
      north: Math.round((densities.north / sum) * 100),
      south: Math.round((densities.south / sum) * 100),
      east: Math.round((densities.east / sum) * 100),
      west: Math.round((densities.west / sum) * 100),
    };
    let highest = null;
    let maxVal = -1;
    for (const [lane, val] of Object.entries(densities)) {
      if (val > maxVal && val > 0) {
        maxVal = val;
        highest = lane;
      }
    }
    const times = {
      north: densities.north > 0 ? Math.max(10, Math.round((allocs.north / 100) * 90)) : 0,
      south: densities.south > 0 ? Math.max(10, Math.round((allocs.south / 100) * 90)) : 0,
      east: densities.east > 0 ? Math.max(10, Math.round((allocs.east / 100) * 90)) : 0,
      west: densities.west > 0 ? Math.max(10, Math.round((allocs.west / 100) * 90)) : 0,
    };
    return { total: sum, allocations: allocs, activeLane: highest, greenTimes: times };
  }, [densities]);

  const handleSlider = (lane, val) => {
    setDensities(prev => ({ ...prev, [lane]: Math.max(0, Math.min(100, Number(val))) }));
  };

  const setSurge = () => {
    setDensities({ north: 75, south: 95, east: 45, west: 30 });
  };
  const setBalanced = () => {
    setDensities({ north: 40, south: 40, east: 40, west: 40 });
  };
  const setBottleneck = () => {
    setDensities({ north: 5, south: 95, east: 10, west: 0 });
  };
  const setZero = () => {
    setDensities({ north: 0, south: 0, east: 0, west: 0 });
  };

  const flagshipTourist = projects.find(p => p.id === 'tourist-guide');
  const flagshipTraffic = projects.find(p => p.id === 'traffic-optimization');
  const secondaryProjects = projects.filter(p => !p.featured);

  const corridors = [
    { key: 'north', name: 'North Corridor', tag: 'CORRIDOR 01' },
    { key: 'south', name: 'South Corridor', tag: 'CORRIDOR 02' },
    { key: 'east', name: 'East Corridor', tag: 'CORRIDOR 03' },
    { key: 'west', name: 'West Corridor', tag: 'CORRIDOR 04' },
  ];

  return (
    <section id="projects" className="pt-8 pb-12 border-b border-[#E5E1D8]">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E5E1D8]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9E3514] font-semibold block mb-2">
            Section 01 / Case Studies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121316] font-normal tracking-tight">
            Selected Engineering Work
          </h2>
        </div>
        <p className="text-sm text-[#5C6069] max-w-md leading-relaxed md:text-right">
          Verified systems built with end-to-end full-stack architectures, real-time external APIs, and OpenCV computer vision pipelines.
        </p>
      </div>

      <div className="space-y-16 pt-8">

        {/* ======================================================== */}
        {/* Case Study 01: Smart Tourist Guide and Budget Planner   */}
        {/* ======================================================== */}
        {flagshipTourist && (
          <article className="pt-4 pb-8 border-b border-[#E5E1D8]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              
              {/* Left Meta Column (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#9E3514] font-semibold block">
                  {flagshipTourist.period} · Case Study 01
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl text-[#121316] font-medium leading-tight">
                  {flagshipTourist.title}
                </h3>

                <span className="font-mono text-xs text-[#5C6069] uppercase tracking-wider block">
                  {flagshipTourist.category}
                </span>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {flagshipTourist.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] bg-white border border-[#E5E1D8] px-2 py-0.5 text-[#5C6069]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-2.5">
                  {flagshipTourist.github && (
                    <a
                      href={flagshipTourist.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-btn-outline !py-1.5 !px-3 !text-[11px]"
                    >
                      <span>Repository ↗</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(flagshipTourist)}
                    className="editorial-btn-dark !py-1.5 !px-3 !text-[11px] cursor-pointer"
                  >
                    <span>Full Specifications →</span>
                  </button>
                </div>
              </div>

              {/* Right Narrative Column (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-base text-[#121316] leading-relaxed">
                  {flagshipTourist.summary}
                </p>

                <ul className="space-y-3 pt-2 text-sm text-[#5C6069]">
                  {flagshipTourist.bulletPoints.map((item, idx) => (
                    <li key={idx} className="pl-5 relative leading-relaxed">
                      <span className="absolute left-0 text-[#9E3514] font-bold">—</span>
                      <strong className="text-[#121316] font-medium">{item.lead}:</strong> {item.text}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </article>
        )}

        {/* ======================================================== */}
        {/* Case Study 02: Traffic Signal Optimization               */}
        {/* ======================================================== */}
        {flagshipTraffic && (
          <article className="pt-4 pb-8 border-b border-[#E5E1D8]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              
              {/* Left Meta Column (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#9E3514] font-semibold block">
                  {flagshipTraffic.period} · Case Study 02
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl text-[#121316] font-medium leading-tight">
                  {flagshipTraffic.title}
                </h3>

                <span className="font-mono text-xs text-[#5C6069] uppercase tracking-wider block">
                  {flagshipTraffic.category}
                </span>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {flagshipTraffic.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] bg-white border border-[#E5E1D8] px-2 py-0.5 text-[#5C6069]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="font-mono text-[11px] text-[#9E3514] font-semibold uppercase tracking-wider">
                    Smart India Hackathon 2024 — Level 2 Qualifier
                  </span>
                </div>

                <div className="pt-4 flex flex-wrap gap-2.5">
                  <a
                    href="#simulator"
                    className="editorial-btn-dark !py-1.5 !px-3 !text-[11px]"
                  >
                    <span>Test Algorithm ↓</span>
                  </a>
                  <button
                    onClick={() => setActiveModalProject(flagshipTraffic)}
                    className="editorial-btn-outline !py-1.5 !px-3 !text-[11px] cursor-pointer"
                  >
                    <span>Architecture Notes →</span>
                  </button>
                </div>
              </div>

              {/* Right Narrative Column (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-base text-[#121316] leading-relaxed">
                  {flagshipTraffic.summary}
                </p>

                <ul className="space-y-3 pt-2 text-sm text-[#5C6069]">
                  {flagshipTraffic.bulletPoints.map((item, idx) => (
                    <li key={idx} className="pl-5 relative leading-relaxed">
                      <span className="absolute left-0 text-[#9E3514] font-bold">—</span>
                      <strong className="text-[#121316] font-medium">{item.lead}:</strong> {item.text}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* ======================================================== */}
            {/* Embedded Fig. 02: Interactive Scientific Test Bench      */}
            {/* ======================================================== */}
            <div id="simulator" className="mt-12 bg-white border border-[#E5E1D8] p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-[#E5E1D8] gap-2 mb-6">
                <div>
                  <span className="font-mono text-[10px] text-[#9E3514] uppercase tracking-wider block font-semibold">
                    Fig. 02 — Interactive Algorithmic Test Bench
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#121316] font-medium mt-0.5">
                    Proportional Signal Allocation Verification
                  </h4>
                </div>
                <div className="font-mono text-xs text-[#5C6069]">
                  Formula: <code>GreenTime = max(10, round(Density / Total × 90))</code>
                </div>
              </div>

              {/* 4 Corridor Sliders Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {corridors.map((c) => {
                  const density = densities[c.key];
                  const alloc = allocations[c.key];
                  const sec = greenTimes[c.key];
                  const isActive = activeLane === c.key;

                  return (
                    <div
                      key={c.key}
                      className={`p-4 border transition-all ${
                        isActive
                          ? 'border-[#9E3514] bg-white shadow-sm'
                          : 'border-[#E5E1D8] bg-[#FAF8F5]'
                      }`}
                    >
                      <span className={`font-mono text-[10px] uppercase tracking-wider block mb-1 ${
                        isActive ? 'text-[#9E3514] font-semibold' : 'text-[#5C6069]'
                      }`}>
                        {isActive ? `PRIORITY · ${c.tag}` : c.tag}
                      </span>
                      <div className="font-semibold text-sm text-[#121316] mb-3">
                        {c.name}
                      </div>

                      <div className="flex justify-between font-mono text-xs text-[#5C6069] mb-1.5">
                        <span>Density</span>
                        <span className={`font-semibold ${isActive ? 'text-[#9E3514]' : 'text-[#121316]'}`}>
                          {density}
                        </span>
                      </div>

                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={density}
                        onChange={(e) => handleSlider(c.key, e.target.value)}
                        className="w-full h-1 bg-[#E5E1D8] accent-[#9E3514] cursor-pointer"
                        aria-label={`Density slider for ${c.name}`}
                      />

                      <div className="mt-3 pt-2 border-t border-[#E5E1D8] font-mono text-xs flex justify-between">
                        <span className="text-[#5C6069]">Signal Duration</span>
                        <span className={`font-semibold ${isActive ? 'text-[#9E3514]' : 'text-[#121316]'}`}>
                          {alloc}% ({sec}s)
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Test Bench Footer & Presets */}
              <div className="pt-4 border-t border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#5C6069]">
                <div>
                  Total Simulated Load: <strong className="text-[#121316]">{total} vehicles</strong> across intersection
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={setSurge}
                    className="px-2.5 py-1 bg-transparent border border-[#E5E1D8] text-[10px] uppercase tracking-wider text-[#121316] hover:bg-[#121316] hover:text-white transition-colors cursor-pointer"
                  >
                    Rush Surge
                  </button>
                  <button
                    onClick={setBalanced}
                    className="px-2.5 py-1 bg-transparent border border-[#E5E1D8] text-[10px] uppercase tracking-wider text-[#121316] hover:bg-[#121316] hover:text-white transition-colors cursor-pointer"
                  >
                    Balanced (40)
                  </button>
                  <button
                    onClick={setBottleneck}
                    className="px-2.5 py-1 bg-transparent border border-[#E5E1D8] text-[10px] uppercase tracking-wider text-[#121316] hover:bg-[#121316] hover:text-white transition-colors cursor-pointer"
                  >
                    Bottleneck (95)
                  </button>
                  <button
                    onClick={setZero}
                    className="px-2.5 py-1 bg-transparent border border-[#E5E1D8] text-[10px] uppercase tracking-wider text-[#121316] hover:bg-[#121316] hover:text-white transition-colors cursor-pointer"
                  >
                    Zero (Standby)
                  </button>
                </div>
              </div>

            </div>

          </article>
        )}

        {/* ======================================================== */}
        {/* Secondary Project Works (Curated Table)                  */}
        {/* ======================================================== */}
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#5C6069] block mb-4">
            Curated Research & Spatial Prototypes
          </span>

          <div className="border-t border-[#E5E1D8]">
            {secondaryProjects.map((p) => (
              <div
                key={p.id}
                className="py-5 border-b border-[#E5E1D8] flex flex-col sm:flex-row sm:items-baseline justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#9E3514] font-semibold">
                      {p.number}
                    </span>
                    <h4 className="font-serif text-lg font-medium text-[#121316]">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C6069] max-w-2xl leading-relaxed">
                    {p.summary || p.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0">
                  <button
                    onClick={() => setActiveModalProject(p)}
                    className="font-mono text-xs text-[#121316] hover:text-[#9E3514] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Read Summary →</span>
                  </button>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#5C6069] hover:text-[#121316] transition-colors"
                    >
                      <span>Code ↗</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal for Deep Project Inspection */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}