import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, ExternalLink, Code2, MapPin, GraduationCap, Copy, Check, Sparkles, Terminal, ArrowUpRight, Award, Zap, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const [photoStyle, setPhotoStyle] = useState('formal'); // 'formal' | 'casual'
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState('traffic'); // 'traffic' | 'mern' | 'cv'

  const snippets = {
    traffic: {
      file: "AdaptiveSignalEngine.py",
      lang: "Python",
      badge: "SIH '24 Level 2",
      code: `def calculate_proportional_green(densities):\n    total_vehicles = sum(densities.values())\n    if total_vehicles == 0:\n        return {lane: 0 for lane in densities}\n    allocations = {lane: round((c / total_vehicles) * 100) for lane, c in densities.items()}\n    green_seconds = {lane: max(10, round((pct / 100) * 90)) for lane, pct in allocations.items()}\n    return allocations, green_seconds`
    },
    mern: {
      file: "TravelCoordinator.jsx",
      lang: "React 18",
      badge: "MERN (6 APIs)",
      code: `export async function generateItinerary({ destination, days, budgetMode }) {\n  // Orchestrates Amadeus + OpenWeather + Foursquare + Gemini\n  const { data } = await axios.post('/api/itinerary/generate', {\n    destination, days, budgetMode\n  });\n  return data;\n}`
    },
    cv: {
      file: "VehicleContourDetector.py",
      lang: "OpenCV",
      badge: "Computer Vision",
      code: `def detect_lane_density(frame, roi_mask):\n    fg_mask = bg_subtractor.apply(frame)\n    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))\n    cleaned = cv2.morphologyEx(fg_mask, cv2.MORPH_OPEN, kernel)\n    contours, _ = cv2.findContours(cleaned, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)\n    return sum(1 for c in contours if cv2.contourArea(c) > 400)`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Prismatic Aurora Radial Lighting */}
      <div className="absolute top-16 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#6366F1]/20 via-[#8B5CF6]/15 to-[#D946EF]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-gradient-to-bl from-[#06B6D4]/15 via-[#3B82F6]/10 to-[#10B981]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Harmonious 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Identity, Narrative, CTAs, & Badges (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic Credential Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-dock text-xs font-mono text-white/90 border border-white/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[#A5B4FC] font-semibold">B.Tech CSE @ BVRIT</span>
              <span className="text-white/40">·</span>
              <span className="text-white/70">Class of 2027</span>
              <span className="text-white/40">·</span>
              <span className="text-amber-400 font-bold">8.6 CGPA</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
                Matta Sujith Singh
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#C084FC] to-[#F472B6] leading-relaxed">
                Architecting Full-Stack Systems & Applied Computer Vision.
              </p>
            </div>

            {/* Grounded Narrative Bio */}
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              Computer Science undergraduate maintaining an <strong className="text-white font-semibold">8.6 CGPA</strong> at BVRIT. Smart India Hackathon '24 National Level 2 Qualifier specializing in reactive MERN architectures, multi-API orchestration (6 live services), and real-time OpenCV video stream analytics.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold btn-aurora-primary px-6 py-3.5 rounded-full cursor-pointer"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Matta_Sujith_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold btn-aurora-secondary px-5 py-3.5 rounded-full cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#818CF8]" />
                <span>Verified Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
              </a>

              <a
                href="#traffic-sim"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-white/70 hover:text-[#818CF8] px-3 py-3 transition-colors"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Launch Simulator →</span>
              </a>
            </div>

            {/* Key Verified Credential Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full glass-dock text-[11px] font-mono text-white/80 border border-white/10 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#F472B6]" />
                <span>SIH '24 Level 2</span>
              </span>
              <span className="px-3 py-1 rounded-full glass-dock text-[11px] font-mono text-white/80 border border-white/10 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Salesforce Agentforce (#7198308)</span>
              </span>
              <span className="px-3 py-1 rounded-full glass-dock text-[11px] font-mono text-white/80 border border-white/10 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>6 Integrated APIs</span>
              </span>
              <span className="px-3 py-1 rounded-full glass-dock text-[11px] font-mono text-white/80 border border-white/10 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span>EF SET C1 Advanced</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-white/60 border-t border-white/10">
              <span className="text-white/40 uppercase tracking-wider text-[11px]">Connect:</span>
              
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
                className="flex items-center gap-1.5 hover:text-[#C084FC] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>SmartInterviews</span>
              </a>
            </div>

          </div>

          {/* Right Column: Crystal-Clear 3:4 Vertical Portrait Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              
              {/* Outer Glowing Glass Frame */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative glass-panel rounded-3xl p-4 border border-white/20 shadow-2xl"
              >
                
                {/* Perfect 3:4 Aspect Ratio Container (Matching the raw 766x1024 photo exactly) */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0A0D18] border border-white/15">
                  <img
                    src={photoStyle === 'formal' ? personalInfo.avatarUrl : '/sujith_avatar_casual.jpg'}
                    alt="Portrait photograph of Matta Sujith Singh"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-all duration-500"
                  />
                  
                  {/* Floating Top Right Tag */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-dock text-[11px] font-mono text-white/90 border border-white/20 shadow-md">
                    <span>8.6 CGPA · BVRIT</span>
                  </div>

                  {/* Floating Bottom Status Pill - Crisp & Translucent */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono glass-dock px-3.5 py-2 rounded-xl border border-white/25 shadow-lg">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Available for Roles</span>
                    </div>
                    <span className="text-[#A5B4FC] font-semibold">Hyderabad, IN</span>
                  </div>
                </div>

                {/* Bottom Interactive Style Switcher */}
                <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white/60 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#818CF8]" />
                    <span>Portrait Style:</span>
                  </span>

                  <div className="inline-flex p-0.5 rounded-lg bg-black/40 border border-white/10">
                    <button
                      onClick={() => setPhotoStyle('formal')}
                      className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                        photoStyle === 'formal'
                          ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-sm'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      Executive Formal
                    </button>
                    <button
                      onClick={() => setPhotoStyle('casual')}
                      className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                        photoStyle === 'casual'
                          ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-sm'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      Creative Casual
                    </button>
                  </div>
                </div>

              </motion.div>

              {/* Floating Verified Badge Below Portrait */}
              <div className="mt-4 p-3 rounded-2xl glass-dock border border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#818CF8]" />
                  <span>Padmasri Dr. B.V. Raju Institute of Technology</span>
                </span>
                <span className="text-emerald-400 font-bold">Autonomous</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
