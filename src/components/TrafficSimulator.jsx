import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
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
    <section id="traffic-sim" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A5B4FC] uppercase tracking-wider self-start px-3.5 py-1.5 rounded-full glass-dock border border-[#818CF8]/30">
            <Cpu className="w-3.5 h-3.5 text-[#818CF8]" />
            <span>Interactive Engineering Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Live Traffic Signal Operations Console
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl">
            A real-time telemetry console running the adaptive signal allocation algorithm developed for our Smart India Hackathon '24 project.
          </p>
        </div>

        {/* Technical Architecture Disclaimer */}
        <div className="mb-8 p-4 rounded-2xl glass-panel border border-white/15 flex items-start gap-3 text-xs text-white/70 leading-relaxed">
          <Info className="w-4 h-4 text-[#818CF8] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-medium">Architecture Note:</strong> In the deployed system, vehicle counts are extracted from live intersection camera feeds using OpenCV MOG2 background subtractors and dispatched through a Python Flask API (<code className="text-[#A5B4FC]">/get-traffic-data</code>).
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls & Lanes Grid (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl glass-dock border border-white/15">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <Sliders className="w-4 h-4 text-[#818CF8]" />
                <span>Adjust Lane Densities:</span>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={simulateTrafficFlux}
                  disabled={isSimulating}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl btn-aurora-primary text-[11px] font-bold cursor-pointer"
                  title="Randomize realistic rush hour traffic load"
                >
                  <Play className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>Surge</span>
                </button>

                <button
                  onClick={resetToBalanced}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl btn-aurora-secondary text-[11px] font-mono transition-colors cursor-pointer"
                  title="Equalize all 4 lanes to 40"
                >
                  <RefreshCw className="w-3 h-3 text-[#A5B4FC]" />
                  <span>Equal (40)</span>
                </button>

                <button
                  onClick={setExtremeSkew}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl btn-aurora-secondary text-[11px] font-mono transition-colors cursor-pointer"
                  title="Test extreme bottleneck on South Corridor"
                >
                  <Zap className="w-3 h-3 text-[#F472B6]" />
                  <span>Skew</span>
                </button>

                <button
                  onClick={setZeroTraffic}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl btn-aurora-secondary text-[11px] font-mono transition-colors cursor-pointer"
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
                  <motion.div
                    key={dir.key}
                    whileHover={{ y: -3 }}
                    className={`p-4 rounded-2xl glass-panel border transition-all duration-300 relative ${
                      isActive
                        ? 'border-emerald-400/60 shadow-lg shadow-emerald-500/15'
                        : 'border-white/10'
                    }`}
                  >
                    {/* Top Row: Label & Status Indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-mono text-white/50 uppercase block">
                          {dir.tag}
                        </span>
                        <h4 className="text-sm font-semibold text-white">
                          {dir.label}
                        </h4>
                      </div>

                      {/* Traffic Light Signal Pill */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-dock border border-white/15">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            isActive
                              ? 'bg-emerald-400 shadow-md shadow-emerald-400 animate-pulse'
                              : total === 0
                              ? 'bg-amber-400/60'
                              : 'bg-red-500/70'
                          }`}
                        />
                        <span className={`text-[10px] font-mono font-bold uppercase ${isActive ? 'text-emerald-400' : 'text-white'}`}>
                          {isActive ? 'GREEN' : total === 0 ? 'STANDBY' : 'RED'}
                        </span>
                      </div>
                    </div>

                    {/* Vehicle Slider Input */}
                    <div className="space-y-1.5 mb-3">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-white/60">Vehicle Density:</span>
                        <span className="text-[#818CF8] font-bold">{density}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={density}
                        onChange={(e) => handleSliderChange(dir.key, e.target.value)}
                        aria-label={`Vehicle count for ${dir.label}`}
                        className="w-full h-1.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#6366F1]"
                      />
                    </div>

                    {/* Allocated Green Duration Result */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-white/60">Signal Duration:</span>
                      <span className={`font-bold ${isActive ? 'text-emerald-400' : 'text-white'}`}>
                        {alloc}% ({greenSec > 0 ? `${greenSec}s` : '0s'})
                      </span>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Live Computation & Telemetry JSON (5 Cols) */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-5 space-y-4 border border-white/15 shadow-2xl">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-white/60">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>Computed Signal Telemetry</span>
              </span>
              <span className={`text-[11px] font-mono font-bold ${total === 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {total === 0 ? 'Standby (All Red)' : 'Adaptive Cycle Active'}
              </span>
            </div>

            {/* Total Metric Card */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-[10px] font-mono text-white/50 uppercase block">
                  Total Intersection Load
                </span>
                <span className="text-xl font-bold font-display text-white">
                  {total} <span className="text-xs font-normal text-white/50">vehicles</span>
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-[10px] font-mono text-white/50 uppercase block">
                  Priority Green Lane
                </span>
                <span className={`text-xl font-bold font-display uppercase ${activeLane ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {activeLane ? activeLane : 'STANDBY'}
                </span>
              </div>
            </div>

            {/* Python / Flask Backend JSON Representation */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/60">
                <span>Flask API Schema (/get-traffic-data):</span>
                <span className="text-emerald-400">200 OK</span>
              </div>
              <pre className="p-3.5 rounded-xl bg-black/50 border border-white/10 text-[11px] font-mono text-white/80 overflow-x-auto leading-relaxed">
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

            <p className="text-[11px] text-white/50 leading-relaxed">
              When <code className="text-[#818CF8]">total == 0</code>, allocations cleanly zero out in standby mode. When lanes are skewed, priority green duration dynamically extends up to 90s to clear vehicle backlogs.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
