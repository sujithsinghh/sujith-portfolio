import React, { useState, useMemo } from 'react';
import { Sliders, RefreshCw, Cpu, Activity, Play, Info, Ban, Zap } from 'lucide-react';

export default function TrafficSimulator() {
  const [densities, setDensities] = useState({
    north: 65,
    south: 85,
    east: 35,
    west: 20,
  });

  const [isSimulating, setIsSimulating] = useState(false);

  // Proportional allocation logic from Sujith's SIH '24 backend (vs/app.py):
  const { total, allocations, activeLane, greenTimes } = useMemo(() => {
    const sum = densities.north + densities.south + densities.east + densities.west;
    
    // Exact zero traffic edge-case
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

    // Determine lane with highest traffic demand (only if sum > 0)
    let highest = null;
    let maxVal = -1;
    for (const [lane, val] of Object.entries(densities)) {
      if (val > maxVal && val > 0) {
        maxVal = val;
        highest = lane;
      }
    }

    // Dynamic green timings with minimum 10s safety threshold for lanes with traffic, or 0s if 0
    const times = {
      north: densities.north > 0 ? Math.max(10, Math.round((allocs.north / 100) * 90)) : 0,
      south: densities.south > 0 ? Math.max(10, Math.round((allocs.south / 100) * 90)) : 0,
      east: densities.east > 0 ? Math.max(10, Math.round((allocs.east / 100) * 90)) : 0,
      west: densities.west > 0 ? Math.max(10, Math.round((allocs.west / 100) * 90)) : 0,
    };

    return { total: sum, allocations: allocs, activeLane: highest, greenTimes: times };
  }, [densities]);

  const handleSliderChange = (lane, val) => {
    setDensities((prev) => ({ ...prev, [lane]: Math.max(0, Math.min(100, Number(val))) }));
  };

  const simulateTrafficFlux = () => {
    setIsSimulating(true);
    setDensities({
      north: Math.floor(Math.random() * 85) + 10,
      south: Math.floor(Math.random() * 95) + 15,
      east: Math.floor(Math.random() * 70) + 10,
      west: Math.floor(Math.random() * 60) + 5,
    });
    setTimeout(() => setIsSimulating(false), 400);
  };

  const resetToBalanced = () => {
    setDensities({ north: 40, south: 40, east: 40, west: 40 });
  };

  const setZeroTraffic = () => {
    setDensities({ north: 0, south: 0, east: 0, west: 0 });
  };

  const setExtremeSkew = () => {
    setDensities({ north: 0, south: 95, east: 5, west: 0 });
  };

  const directions = [
    { key: 'north', label: 'North Corridor', tag: 'LANE 01' },
    { key: 'south', label: 'South Corridor', tag: 'LANE 02' },
    { key: 'east', label: 'East Corridor', tag: 'LANE 03' },
    { key: 'west', label: 'West Corridor', tag: 'LANE 04' },
  ];

  return (
    <section id="traffic-sim" className="py-24 relative border-b border-[#1B202D] bg-[#0A0C12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4FF00] uppercase tracking-wider self-start px-3 py-1 rounded-full cyber-dock border border-[#D4FF00]/25">
            <Cpu className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>Interactive Engineering Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Live Traffic Signal Timing Simulator
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            A real-time frontend simulation demonstrating the adaptive signal allocation algorithm developed for our Smart India Hackathon '24 project.
          </p>
        </div>

        {/* Technical Architecture Disclaimer */}
        <div className="mb-8 p-4 rounded-2xl obsidian-card border border-[#1B202D] flex items-start gap-3 text-xs text-[#94A3B8] leading-relaxed">
          <Info className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-medium">Architecture Note:</strong> This interactive module demonstrates the decision logic. In the full system, lane vehicle counts are derived from camera video streams using an OpenCV MOG2 background subtractor pipeline and served via a Python Flask API (<code className="text-[#D4FF00]">/get-traffic-data</code>).
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls & Lanes Grid (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl obsidian-card border border-[#1B202D]">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <Sliders className="w-4 h-4 text-[#D4FF00]" />
                <span>Adjust Lane Vehicle Densities:</span>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={simulateTrafficFlux}
                  disabled={isSimulating}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl btn-volt text-[11px] font-bold cursor-pointer"
                  title="Randomize realistic rush hour traffic load"
                >
                  <Play className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>Surge</span>
                </button>

                <button
                  onClick={resetToBalanced}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl cyber-dock hover:border-[#D4FF00]/40 text-[#9EA6B8] hover:text-[#D4FF00] text-[11px] font-mono transition-colors cursor-pointer"
                  title="Equalize all 4 lanes to 40"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Equal (40)</span>
                </button>

                <button
                  onClick={setExtremeSkew}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl cyber-dock hover:border-[#F59E0B]/40 text-[#9EA6B8] hover:text-[#F59E0B] text-[11px] font-mono transition-colors cursor-pointer"
                  title="Test extreme bottleneck on South Corridor"
                >
                  <Zap className="w-3 h-3 text-[#F59E0B]" />
                  <span>Skew</span>
                </button>

                <button
                  onClick={setZeroTraffic}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl cyber-dock hover:border-red-500/40 text-[#9EA6B8] hover:text-red-400 text-[11px] font-mono transition-colors cursor-pointer"
                  title="Test zero traffic edge-case"
                >
                  <Ban className="w-3 h-3 text-red-400" />
                  <span>Zero (0)</span>
                </button>
              </div>
            </div>

            {/* 4 Intersection Lane Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {directions.map((dir) => {
                const density = densities[dir.key];
                const alloc = allocations[dir.key];
                const greenSec = greenTimes[dir.key];
                const isActive = activeLane === dir.key;

                return (
                  <div
                    key={dir.key}
                    className={`p-4 rounded-2xl obsidian-card border transition-all duration-300 relative ${
                      isActive
                        ? 'border-[#D4FF00]/60 bg-[#121720] shadow-lg shadow-[#D4FF00]/10'
                        : 'border-[#1B202D]'
                    }`}
                  >
                    {/* Top Row: Label & Status Indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-mono text-[#7E869B] uppercase block">
                          {dir.tag}
                        </span>
                        <h4 className="text-sm font-semibold text-white">
                          {dir.label}
                        </h4>
                      </div>

                      {/* Traffic Light Signal Pill */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#08090C] border border-[#1B202D]">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            isActive
                              ? 'bg-[#D4FF00] shadow-md shadow-[#D4FF00]'
                              : total === 0
                              ? 'bg-amber-400/50'
                              : 'bg-red-500/70'
                          }`}
                        />
                        <span className={`text-[10px] font-mono font-bold uppercase ${isActive ? 'text-[#D4FF00]' : 'text-white'}`}>
                          {isActive ? 'GREEN' : total === 0 ? 'STANDBY' : 'RED'}
                        </span>
                      </div>
                    </div>

                    {/* Vehicle Slider Input */}
                    <div className="space-y-1.5 mb-3">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#8E97AB]">Vehicle Density:</span>
                        <span className="text-[#D4FF00] font-bold">{density}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={density}
                        onChange={(e) => handleSliderChange(dir.key, e.target.value)}
                        aria-label={`Vehicle count for ${dir.label}`}
                        className="w-full h-1.5 bg-[#1B202D] rounded-lg appearance-none cursor-pointer accent-[#D4FF00]"
                      />
                    </div>

                    {/* Allocated Green Duration Result */}
                    <div className="pt-2 border-t border-[#1B202D] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#8E97AB]">Proportional Split:</span>
                      <span className={`font-bold ${isActive ? 'text-[#D4FF00]' : 'text-white'}`}>
                        {alloc}% ({greenSec > 0 ? `${greenSec}s` : '0s'})
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Live Computation & Telemetry JSON (5 Cols) */}
          <div className="lg:col-span-5 obsidian-card rounded-2xl p-5 space-y-4 border border-[#1B202D]">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#1B202D] text-xs font-mono text-[#8E97AB]">
              <span className="flex items-center gap-1.5 text-white">
                <Activity className="w-3.5 h-3.5 text-[#D4FF00]" />
                <span>Computed Signal Telemetry</span>
              </span>
              <span className={`text-[11px] font-mono font-bold ${total === 0 ? 'text-amber-400' : 'text-[#D4FF00]'}`}>
                {total === 0 ? 'Standby (All Red)' : 'Adaptive Cycle Active'}
              </span>
            </div>

            {/* Total Metric Card */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#08090C] border border-[#1B202D]">
                <span className="text-[10px] font-mono text-[#7E869B] uppercase block">
                  Total Intersection Load
                </span>
                <span className="text-xl font-bold font-display text-white">
                  {total} <span className="text-xs font-normal text-[#8E97AB]">vehicles</span>
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#08090C] border border-[#1B202D]">
                <span className="text-[10px] font-mono text-[#7E869B] uppercase block">
                  Priority Green Lane
                </span>
                <span className={`text-xl font-bold font-display uppercase ${activeLane ? 'text-[#D4FF00]' : 'text-amber-400'}`}>
                  {activeLane ? activeLane : 'STANDBY'}
                </span>
              </div>
            </div>

            {/* Python / Flask Backend JSON Representation */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8E97AB]">
                <span>Flask API Schema (/get-traffic-data):</span>
                <span className="text-[#D4FF00]">200 OK</span>
              </div>
              <pre className="p-3.5 rounded-xl bg-[#08090C] border border-[#1B202D] text-[11px] font-mono text-[#CBD5E1] overflow-x-auto leading-relaxed">
{JSON.stringify(
  {
    densities: densities,
    allocation: allocations,
    active_corridor: activeLane ? activeLane.toUpperCase() : "STANDBY (ALL RED)",
    green_duration: activeLane ? `${greenTimes[activeLane]}s` : "0s (Intersection Idle)",
    algorithm: "Adaptive Density Ratio (SIH 2024)"
  },
  null,
  2
)}
              </pre>
            </div>

            <p className="text-[11px] text-[#8E97AB] leading-relaxed">
              Calculations match the Python algorithm: when <code className="text-[#D4FF00]">total == 0</code>, allocations cleanly zero out in standby mode. When lanes are skewed, priority green duration extends up to 90s to clear vehicle backlogs.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
