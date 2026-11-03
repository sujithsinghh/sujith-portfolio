import React, { useState } from 'react';
import { ArrowDown, FileText, ExternalLink, Code2, MapPin, GraduationCap, Copy, Check, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const [photoStyle, setPhotoStyle] = useState('formal'); // 'formal' | 'casual'
  const [activeCodeTab, setActiveCodeTab] = useState('traffic'); // 'traffic' | 'mern' | 'cv'
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets = {
    traffic: {
      file: "AdaptiveSignalEngine.py",
      lang: "Python",
      badge: "SIH '24 Level 2",
      code: `def calculate_proportional_green(densities):\n    # densities = {'north': 65, 'south': 85, 'east': 35, 'west': 20}\n    total_vehicles = sum(densities.values())\n    if total_vehicles == 0:\n        return {lane: 0 for lane in densities}  # Standby\n\n    # Proportional allocation ratio\n    allocations = {\n        lane: round((count / total_vehicles) * 100)\n        for lane, count in densities.items()\n    }\n    # Dynamic green duration (10s safety floor, 90s max)\n    green_seconds = {\n        lane: max(10, round((pct / 100) * 90))\n        for lane, pct in allocations.items()\n    }\n    return allocations, green_seconds`
    },
    mern: {
      file: "TravelPlannerCoordinator.jsx",
      lang: "React 18",
      badge: "MERN (6 Live APIs)",
      code: `import { useState } from 'react';\nimport axios from 'axios';\n\nexport function useItineraryPlanner() {\n  const [itinerary, setItinerary] = useState(null);\n  const [loading, setLoading] = useState(false);\n\n  const generatePlan = async ({ destination, days, budgetMode }) => {\n    setLoading(true);\n    // Orchestrates Amadeus Hotels + OpenWeather + Foursquare\n    const { data } = await axios.post('/api/itinerary/generate', {\n      destination,\n      days,\n      budgetMode, // 'budget' | 'standard' | 'luxury'\n    });\n    setItinerary(data);\n    setLoading(false);\n  };\n  return { itinerary, generatePlan, loading };\n}`
    },
    cv: {
      file: "VehicleContourDetector.py",
      lang: "OpenCV",
      badge: "Computer Vision",
      code: `import cv2\n\ndef detect_lane_density(frame, roi_mask):\n    # MOG2 background subtractor for moving vehicles\n    fg_mask = bg_subtractor.apply(frame)\n    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))\n    cleaned = cv2.morphologyEx(fg_mask, cv2.MORPH_OPEN, kernel)\n    \n    contours, _ = cv2.findContours(cleaned, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)\n    vehicle_count = sum(1 for c in contours if cv2.contourArea(c) > 400)\n    return vehicle_count`
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab].code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#08090C] bg-grid-cyber">
      {/* High-Luminance Ambient Gradients */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] ambient-glow-volt blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] ambient-glow-violet blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Kinetic Editorial Headline, Verified Credentials, Code Window (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Academic Credential Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full cyber-dock text-xs font-mono text-[#D4FF00] border border-[#D4FF00]/30 shadow-md">
              <GraduationCap className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span>B.Tech CSE @ BVRIT · Class of 2027</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
                Matta Sujith Singh
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] via-[#E2FF4D] to-[#A855F7] leading-relaxed max-w-2xl">
                Building Resilient Full-Stack Architectures & Applied Computer Vision Systems.
              </p>
            </div>

            {/* Grounded Narrative Bio */}
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl">
              Computer Science undergraduate maintaining an <strong className="text-white font-semibold">8.6 CGPA</strong> at BVRIT. Smart India Hackathon '24 National Level 2 Qualifier specializing in scalable MERN microservices, multi-API orchestration, and real-time OpenCV video stream processing.
            </p>

            {/* High-Voltage Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold btn-volt px-6 py-3.5 rounded-full cursor-pointer"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Matta_Sujith_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold cyber-dock hover:border-[#D4FF00]/50 hover:text-[#D4FF00] text-white px-5 py-3.5 rounded-full transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#D4FF00]" />
                <span>Download Verified Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8E97AB]" />
              </a>

              <a
                href="#traffic-sim"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#9EA6B8] hover:text-[#D4FF00] px-3 py-3 transition-colors"
              >
                <Terminal className="w-4 h-4 text-[#D4FF00]" />
                <span>Launch Traffic Simulator</span>
              </a>
            </div>

            {/* Social Links Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#8E97AB] border-t border-[#1B202D]">
              <span className="text-[#64748B] uppercase tracking-wider text-[11px]">Connect:</span>
              
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#D4FF00] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#D4FF00] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#FBBF24] transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>LeetCode</span>
              </a>

              <a
                href={personalInfo.socials.smartinterviews}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#A855F7] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>SmartInterviews</span>
              </a>
            </div>

            {/* Interactive Code Console Window */}
            <div className="pt-2">
              <div className="rounded-2xl obsidian-card overflow-hidden shadow-2xl border border-[#1B202D]">
                {/* Console Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#0C0E14] border-b border-[#1B202D]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D4FF00] inline-block"></span>
                    <span className="text-xs font-mono text-[#D4FF00] ml-2">
                      {codeSnippets[activeCodeTab].file}
                    </span>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveCodeTab('traffic')}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors cursor-pointer ${
                        activeCodeTab === 'traffic'
                          ? 'bg-[#D4FF00] text-black font-bold'
                          : 'text-[#7E869B] hover:text-[#D4FF00]'
                      }`}
                    >
                      SIH '24
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('mern')}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors cursor-pointer ${
                        activeCodeTab === 'mern'
                          ? 'bg-[#D4FF00] text-black font-bold'
                          : 'text-[#7E869B] hover:text-[#D4FF00]'
                      }`}
                    >
                      MERN
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('cv')}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors cursor-pointer ${
                        activeCodeTab === 'cv'
                          ? 'bg-[#D4FF00] text-black font-bold'
                          : 'text-[#7E869B] hover:text-[#D4FF00]'
                      }`}
                    >
                      OpenCV
                    </button>
                    <button
                      onClick={handleCopyCode}
                      className="p-1.5 ml-1 rounded-md text-[#9EA6B8] hover:text-[#D4FF00] hover:bg-white/5 transition-colors cursor-pointer"
                      title="Copy code snippet"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-[#D4FF00]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Code Body */}
                <pre className="p-4 text-xs font-mono text-[#CBD5E1] overflow-x-auto leading-relaxed bg-[#0A0C11]">
                  <code>{codeSnippets[activeCodeTab].code}</code>
                </pre>
              </div>
            </div>

          </div>

          {/* Right Column: Studio Portrait Card with Photo 2 & Interactive Styling (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Glowing Border Frame */}
              <div className="relative obsidian-card rounded-3xl p-3.5 shadow-2xl transition-all duration-300 border border-[#1B202D] group-hover:border-[#D4FF00]/50">
                
                {/* Photo Container */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#141824] to-[#0A0C11] border border-[#1B202D] shadow-inner">
                  <img
                    src={photoStyle === 'formal' ? personalInfo.avatarUrl : '/sujith_avatar_casual.jpg'}
                    alt="Portrait photograph of Matta Sujith Singh"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom overlay pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono cyber-dock px-3 py-2 rounded-xl border border-[#D4FF00]/30">
                    <div className="flex items-center gap-1.5 text-white font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse"></span>
                      <span>B.Tech CSE @ BVRIT</span>
                    </div>
                    <span className="text-[#D4FF00] font-bold">8.6 CGPA</span>
                  </div>
                </div>

                {/* Interactive Style Switcher Pill */}
                <div className="mt-3.5 pt-3 border-t border-[#1B202D] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#8E97AB] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4FF00]" />
                    <span>Portrait Style:</span>
                  </span>

                  <div className="inline-flex p-0.5 rounded-lg bg-[#0C0E14] border border-[#1B202D]">
                    <button
                      onClick={() => setPhotoStyle('formal')}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                        photoStyle === 'formal'
                          ? 'bg-[#D4FF00] text-black shadow-sm'
                          : 'text-[#8E97AB] hover:text-[#D4FF00]'
                      }`}
                    >
                      Executive Formal
                    </button>
                    <button
                      onClick={() => setPhotoStyle('casual')}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                        photoStyle === 'casual'
                          ? 'bg-[#D4FF00] text-black shadow-sm'
                          : 'text-[#8E97AB] hover:text-[#D4FF00]'
                      }`}
                    >
                      Creative Casual
                    </button>
                  </div>
                </div>

                {/* Institutional Base Location */}
                <div className="pt-2 px-1 flex items-center justify-between text-[11px] font-mono text-[#7E869B]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D4FF00]" />
                    <span>Hyderabad / Medak, IN</span>
                  </span>
                  <span className="text-[#A855F7]">Autonomous BVRIT</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
