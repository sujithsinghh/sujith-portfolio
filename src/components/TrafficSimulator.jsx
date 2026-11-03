import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sliders, RefreshCw, Cpu, Activity, Play, Info, Ban, Zap, CheckCircle2 } from 'lucide-react';

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
    setTimeout(() => setIsSimulating(false), 300);
  };

  const resetToBalanced = () => {
    setDensities({ north: 40, south: 40, east: 40, west: 40 });
  };

  const setZeroTraffic = () => {
    setDensities({ north: 0, south: 0, east: 0, west: 0 });
  };

  const setExtremeSkew = () => {
    setDensities({ north: 5, south: 95, east: 10, west: 0 });
  };

  const directions = [
    { key: 'north', label: 'North Corridor', tag: 'LANE 01' },
    { key: 'south', label: 'South Corridor', tag: 'LANE 02' },
    { key: 'east', label: 'East Corridor', tag: 'LANE 03' },
    { key: 'west', label: 'West Corridor', tag: 'LANE 04' },
  ];

  return (
    <section id="traffic-sim" className="pt-8">
      {/* Section Header */}
      <div className="flex flex-col space-y-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#949EAE]">
            Interactive Demonstration
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
          Adaptive Traffic Signal Allocator
        </h2>
        <p className="text-[#949EAE] text-sm sm:text-base max-w-3xl leading-relaxed">
          Interactive simulation of the proportional density allocation algorithm engineered for our 
          <strong className="text-[#F3F4F6]"> Smart India Hackathon (SIH 2024)</strong> project. 
          Adjust lane densities below to observe dynamic green duration calculation.
        </p>
      </div>

      {/* Engineering Architecture Note */}
      <div className="mb-8 p-4 rounded-xl bg-[#13161F] border border-[#202534] flex items-start gap-3 text-xs text-[#949EAE] leading-relaxed">
        <Info className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#F3F4F6] font-medium">Architecture Note:</strong> In the deployed physical setup, vehicle density counts are extracted directly from intersection CCTV feeds using OpenCV MOG2 background subtractors and dispatched over Flask REST endpoints (<code className="text-[#F59E0B]">/get-traffic-data</code>). This browser sandbox demonstrates the algorithmic cycle computation running on client state.
        </div>
      </div>

      {/* Simulator Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Lanes & Sliders (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Preset Buttons Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#13161F] border border-[#202534]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F3F4F6]">
              <Sliders className="w-4 h-4 text-[#F59E0B]" />
              <span>Simulate Preset Traffic Loads:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={simulateTrafficFlux}
                disabled={isSimulating}
                className="btn-primary text-xs !py-1.5 !px-3"
                title="Randomize realistic peak rush hour load"
              >
                <Play className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                <span>Rush Surge</span>
              </button>

              <button
                onClick={resetToBalanced}
                className="btn-secondary text-xs !py-1.5 !px-3 font-mono"
                title="Equalize all lanes to 40"
              >
                <RefreshCw className="w-3 h-3 text-[#949EAE]" />
                <span>Balanced (40)</span>
              </button>

              <button
                onClick={setExtremeSkew}
                className="btn-secondary text-xs !py-1.5 !px-3 font-mono text-[#F59E0B]"
                title="Test extreme bottleneck on South Corridor"
              >
                <Zap className="w-3 h-3" />
                <span>Bottleneck</span>
              </button>

              <button
                onClick={setZeroTraffic}
                className="btn-secondary text-xs !py-1.5 !px-3 font-mono text-red-400"
                title="Test empty intersection zero condition"
              >
                <Ban className="w-3 h-3" />
                <span>Zero (0)</span>
              </button>
            </div>
          </div>

          {/* 4 Corridor Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {directions.map((dir) => {
              const density = densities[dir.key];
              const alloc = allocations[dir.key];
              const greenSec = greenTimes[dir.key];
              const isActive = activeLane === dir.key;

              return (
                <div
                  key={dir.key}
                  className={`p-4 rounded-xl bg-[#13161F] border transition-all duration-200 relative ${
                    isActive
                      ? 'border-[#10B981] shadow-lg shadow-[#10B981]/5'
                      : 'border-[#202534]'
                  }`}
                >
                  {/* Top: Tag, Corridor Name & Signal State */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[10px] font-mono text-[#949EAE] uppercase tracking-wider block">
                        {dir.tag}
                      </span>
                      <h4 className="text-sm font-semibold text-[#F3F4F6]">
                        {dir.label}
                      </h4>
                    </div>

                    {/* Signal Status Pill */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0C0E12] border border-[#202534]">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isActive
                            ? 'bg-[#10B981] animate-pulse'
                            : total === 0
                            ? 'bg-[#F59E0B]'
                            : 'bg-red-500/80'
                        }`}
                      />
                      <span className={`text-[10px] font-mono font-bold uppercase ${isActive ? 'text-[#10B981]' : 'text-[#949EAE]'}`}>
                        {isActive ? 'GREEN' : total === 0 ? 'STANDBY' : 'RED'}
                      </span>
                    </div>
                  </div>

                  {/* Slider Control */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#949EAE]">Vehicle Density:</span>
                      <span className="text-[#F59E0B] font-bold">{density}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={density}
                      onChange={(e) => handleSliderChange(dir.key, e.target.value)}
                      aria-label={`Vehicle count for ${dir.label}`}
                      className="w-full h-1.5 bg-[#202534] rounded-lg appearance-none cursor-pointer accent-[#F59E0B]"
                    />
                  </div>

                  {/* Allocated Time Result */}
                  <div className="pt-2 border-t border-[#202534] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#949EAE]">Allocated Green:</span>
                    <span className={`font-bold ${isActive ? 'text-[#10B981]' : 'text-[#F3F4F6]'}`}>
                      {alloc}% ({greenSec > 0 ? `${greenSec}s` : '0s'})
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Column: Computed Telemetry & JSON Schema (5 Cols) */}
        <div className="lg:col-span-5 bg-[#13161F] border border-[#202534] rounded-xl p-5 space-y-4">
          
          <div className="flex items-center justify-between pb-3 border-b border-[#202534] text-xs font-mono text-[#949EAE]">
            <span className="flex items-center gap-1.5 text-[#F3F4F6] font-medium">
              <Activity className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Computed Signal Telemetry</span>
            </span>
            <span className={`text-[11px] font-mono font-bold ${total === 0 ? 'text-[#F59E0B]' : 'text-[#10B981]'}`}>
              {total === 0 ? 'Standby Mode' : 'Active Cycle'}
            </span>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#0C0E12] border border-[#202534]">
              <span className="text-[10px] font-mono text-[#949EAE] uppercase block mb-1">
                Total Intersection Load
              </span>
              <span className="text-xl font-bold font-mono text-[#F3F4F6]">
                {total} <span className="text-xs font-normal text-[#949EAE]">vehicles</span>
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0C0E12] border border-[#202534]">
              <span className="text-[10px] font-mono text-[#949EAE] uppercase block mb-1">
                Priority Corridor
              </span>
              <span className={`text-xl font-bold font-mono uppercase ${activeLane ? 'text-[#10B981]' : 'text-[#F59E0B]'}`}>
                {activeLane ? activeLane : 'STANDBY'}
              </span>
            </div>
          </div>

          {/* Backend JSON Telemetry Schema */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#949EAE]">
              <span>Flask API Payload (/get-traffic-data):</span>
              <span className="text-[#10B981] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 200 OK
              </span>
            </div>
            <pre className="p-3.5 rounded-lg bg-[#0C0E12] border border-[#202534] text-[11px] font-mono text-[#949EAE] overflow-x-auto leading-relaxed">
{JSON.stringify(
  {
    densities: densities,
    allocation: allocations,
    active_corridor: activeLane ? activeLane.toUpperCase() : "STANDBY (ALL RED)",
    green_duration: activeLane ? `${greenTimes[activeLane]}s` : "0s (Idle)",
    algorithm: "Adaptive Density Ratio (SIH 2024)"
  },
  null,
  2
)}
            </pre>
          </div>

          <p className="text-[11px] text-[#949EAE] leading-relaxed pt-1">
            When total vehicle count is 0, all signals enter standby. For asymmetric loads, signal timings dynamically scale proportionally up to 90s to flush high-density congestion corridors.
          </p>

        </div>

      </div>
    </section>
  );
}