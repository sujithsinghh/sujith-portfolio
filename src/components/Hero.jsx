import React, { useState } from 'react';
import { ArrowDown, FileText, ExternalLink, Code2, MapPin, GraduationCap, Copy, Check, Sparkles, Terminal, ArrowUpRight, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const [photoStyle, setPhotoStyle] = useState('formal'); // 'formal' | 'casual'
  const [activeCodeTab, setActiveCodeTab] = useState('glasscard'); // 'glasscard' | 'traffic' | 'mern'
  const [copiedCode, setCopiedCode] = useState(false);

  // Snippets, including the exact StatsCard component from the user's uploaded screenshot!
  const codeSnippets = {
    glasscard: {
      file: "StatsCard.jsx",
      lang: "React + Framer Motion",
      badge: "Glassy Dashboard V5",
      code: `import { motion } from 'framer-motion';\nimport { ShoppingBag, Users, DollarSign, ArrowUpRight } from 'lucide-react';\n\nconst StatsCard = ({ title, value, change, icon: Icon, gradient }) => {\n  return (\n    <motion.div whileHover={{ y: -5 }} className=\"glass-card p-6 rounded-2xl\">\n      <div className=\"flex items-center justify-between\">\n        <div>\n          <p className=\"text-sm text-white/60\">{title}</p>\n          <h2 className=\"text-2xl font-bold text-white\">{value}</h2>\n          <p className=\"flex items-center gap-1 text-sm text-emerald-400\">\n            <ArrowUpRight size={16} /> {change}%\n          </p>\n        </div>\n      </div>\n    </motion.div>\n  );\n};`
    },
    traffic: {
      file: "AdaptiveSignalEngine.py",
      lang: "Python",
      badge: "SIH '24 Level 2",
      code: `def calculate_proportional_green(densities):\n    # densities = {'north': 65, 'south': 85, 'east': 35, 'west': 20}\n    total_vehicles = sum(densities.values())\n    if total_vehicles == 0:\n        return {lane: 0 for lane in densities}\n\n    # Dynamic proportional ratio\n    allocations = {\n        lane: round((count / total_vehicles) * 100)\n        for lane, count in densities.items()\n    }\n    green_seconds = {\n        lane: max(10, round((pct / 100) * 90))\n        for lane, pct in allocations.items()\n    }\n    return allocations, green_seconds`
    },
    mern: {
      file: "TravelPlannerCoordinator.jsx",
      lang: "React 18",
      badge: "MERN (6 Live APIs)",
      code: `import { useState } from 'react';\nimport axios from 'axios';\n\nexport function useItineraryPlanner() {\n  const [itinerary, setItinerary] = useState(null);\n  const [loading, setLoading] = useState(false);\n\n  const generatePlan = async ({ destination, days, budgetMode }) => {\n    setLoading(true);\n    // Orchestrates Amadeus + OpenWeather + Foursquare\n    const { data } = await axios.post('/api/itinerary/generate', {\n      destination, days, budgetMode\n    });\n    setItinerary(data);\n    setLoading(false);\n  };\n  return { itinerary, generatePlan, loading };\n}`
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab].code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Warm Ambient Sunset & Twilight Radial Backdrops */}
      <div className="absolute top-16 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-[#FF6B35]/20 to-[#FFA800]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#8B5CF6]/20 to-[#EC4899]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Glass Workspace Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
          
          {/* Top Window Header (macOS style window controls from Glassy Dashboard) */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block shadow-sm"></span>
              <span className="text-xs font-mono text-white/50 ml-2 hidden sm:inline-block">
                workspace / sujit-portfolio / dashboard-v5.tsx
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full glass-dock text-[11px] font-mono text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SIH '24 Level 2 Qualifier</span>
              </span>
              <span className="px-3 py-1 rounded-full glass-dock text-[11px] font-mono text-[#FFA800] border border-[#FFA800]/30 hidden sm:inline-block">
                8.6 CGPA @ BVRIT
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Personal Narrative & Action Controls (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Subtitle Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-dock text-xs font-mono text-white/90 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#FFA800]" />
                <span>Computer Science Undergraduate · Class of 2027</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.08]">
                  Matta Sujith Singh
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#FFA800] leading-relaxed">
                  Building Scalable Full-Stack Systems & Applied Computer Vision.
                </p>
              </div>

              {/* Grounded Bio */}
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">
                B.Tech CSE student at <strong className="text-white font-semibold">BVRIT</strong> maintaining an <span className="text-[#FFA800] font-mono font-semibold">8.6 CGPA</span>. Smart India Hackathon '24 National Level 2 Qualifier specializing in reactive MERN architectures, multi-API orchestration (6 live services), and real-time OpenCV video stream analytics.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold btn-glass-primary px-6 py-3.5 rounded-full cursor-pointer"
                >
                  <span>Explore Featured Projects</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  download="Matta_Sujith_Singh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold btn-glass-secondary px-5 py-3.5 rounded-full cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#FFA800]" />
                  <span>Verified Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
                </a>

                <a
                  href="#traffic-sim"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-white/70 hover:text-[#FFA800] px-3 py-3 transition-colors"
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Launch Simulator →</span>
                </a>
              </div>

              {/* Verified External Links */}
              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-white/60 border-t border-white/10">
                <span className="text-white/40 uppercase tracking-wider text-[11px]">Profiles:</span>
                
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#FFA116] transition-colors"
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

            </div>

            {/* Right Column: Studio Portrait & Live Code Preview (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Studio Portrait Card */}
              <div className="glass-card rounded-2xl p-3 border border-white/20 shadow-xl relative group">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#0A0D18]">
                  <img
                    src={photoStyle === 'formal' ? personalInfo.avatarUrl : '/sujith_avatar_casual.jpg'}
                    alt="Portrait photograph of Matta Sujith Singh"
                    className="w-full h-full object-cover object-top filter contrast-[1.04] transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle edge gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A12]/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom overlay pill */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs font-mono glass-dock px-3 py-1.5 rounded-lg border border-white/20">
                    <div className="flex items-center gap-1.5 text-white font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>B.Tech CSE @ BVRIT</span>
                    </div>
                    <span className="text-[#FFA800] font-bold">8.6 CGPA</span>
                  </div>
                </div>

                {/* Style Switcher & Location */}
                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <div className="inline-flex p-0.5 rounded-lg bg-black/40 border border-white/10">
                    <button
                      onClick={() => setPhotoStyle('formal')}
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${
                        photoStyle === 'formal'
                          ? 'bg-[#FF6B35] text-white shadow-sm'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      Executive Formal
                    </button>
                    <button
                      onClick={() => setPhotoStyle('casual')}
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${
                        photoStyle === 'casual'
                          ? 'bg-[#FF6B35] text-white shadow-sm'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      Creative Casual
                    </button>
                  </div>

                  <span className="flex items-center gap-1 text-white/50 text-[10px]">
                    <MapPin className="w-3 h-3 text-[#FFA800]" />
                    <span>Hyderabad, IN</span>
                  </span>
                </div>
              </div>

              {/* Glass Code Snippet Window (Direct from your uploaded screenshot!) */}
              <div className="glass-code-window rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-3.5 py-2 bg-black/40 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono text-[#FFA800] font-semibold flex items-center gap-1">
                      <Code2 className="w-3.5 h-3.5 text-[#FFA800]" />
                      <span>{codeSnippets[activeCodeTab].file}</span>
                    </span>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveCodeTab('glasscard')}
                      className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${
                        activeCodeTab === 'glasscard'
                          ? 'bg-[#FF6B35] text-white font-bold'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      StatsCard
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('traffic')}
                      className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${
                        activeCodeTab === 'traffic'
                          ? 'bg-[#FF6B35] text-white font-bold'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      SIH '24
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('mern')}
                      className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${
                        activeCodeTab === 'mern'
                          ? 'bg-[#FF6B35] text-white font-bold'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      MERN
                    </button>
                    <button
                      onClick={handleCopyCode}
                      className="p-1 ml-0.5 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      title="Copy code"
                    >
                      {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>

                {/* Code Body */}
                <pre className="p-3.5 text-[11px] font-mono text-white/85 overflow-x-auto leading-relaxed max-h-48 bg-black/30">
                  <code>{codeSnippets[activeCodeTab].code}</code>
                </pre>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
