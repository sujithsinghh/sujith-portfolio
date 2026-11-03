import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, GitBranch, Database, CheckCircle2, Award, Zap } from 'lucide-react';

export default function About() {
  const philosophies = [
    {
      title: "Full-Stack System Integrity",
      description: "From client state in React 18 down to Express middleware and MongoDB schemas, I design systems with clear separation of concerns, structured validation, and predictable error handling.",
      icon: Database,
      tag: "MERN Stack",
      accent: "text-[#818CF8]"
    },
    {
      title: "Real-World Computer Vision",
      description: "Hands-on experience processing live camera feeds with OpenCV (MOG2 background subtraction) to build adaptive timing algorithms that solve real urban mobility bottlenecks.",
      icon: Cpu,
      tag: "OpenCV & AI",
      accent: "text-emerald-400"
    },
    {
      title: "Disciplined API Architecture",
      description: "Proficient in orchestrating multi-service REST endpoints (hotel search, live meteorological feeds, local landmarks) with rate limit buffers, schema normalization, and resilient failovers.",
      icon: GitBranch,
      tag: "Multi-API Integration",
      accent: "text-[#38BDF8]"
    },
  ];

  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A5B4FC] uppercase tracking-wider self-start px-3.5 py-1.5 rounded-full glass-dock border border-[#818CF8]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8] animate-pulse"></span>
            <span>Profile & Engineering Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Engineering Foundations & Mindset
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl">
            A look into my academic journey at BVRIT, technical focus areas, and how I approach scalable software design.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Narrative Glass Panel (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-7 sm:p-8 space-y-5 border border-white/15">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#818CF8]" />
              <span>Undergraduate Journey & Core Focus</span>
            </h3>
            
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              I am currently in my 3rd year pursuing a Bachelor of Technology in Computer Science and Engineering at{' '}
              <strong className="text-white font-semibold">B. V. Raju Institute of Technology (BVRIT)</strong>, maintaining an{' '}
              <span className="text-amber-400 font-mono font-bold">8.6/10 CGPA</span>. My engineering path is rooted in disciplined problem solving, mathematics, and building complete, end-to-end digital software.
            </p>

            <p className="text-sm text-white/70 leading-relaxed">
              My development work centers around two complementary engineering pillars:
            </p>

            <ul className="space-y-3 pl-1 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span>
                  <strong className="text-white">Full-Stack Web Engineering (MERN):</strong> Building complete web applications featuring JWT authentication, reactive UI components, and integrations with production-grade third-party APIs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#818CF8] mt-1 shrink-0" />
                <span>
                  <strong className="text-white">Applied AI & Computer Vision:</strong> Translating algorithmic logic and computer vision models (OpenCV, AlexNet) into functional real-time tools for traffic management and urban efficiency.
                </span>
              </li>
            </ul>

            <div className="pt-4 text-xs text-white/60 font-mono border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <span className="flex items-center gap-1.5 text-white">
                <Award className="w-4 h-4 text-[#F472B6]" />
                <span>Smart India Hackathon 2024 National Qualifier</span>
              </span>
              <span className="text-emerald-400">Active Solver on LeetCode</span>
            </div>
          </div>

          {/* Right Bento Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {philosophies.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl glass-panel group border border-white/15"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/30 ${item.accent} transition-colors`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-white text-sm group-hover:text-[#818CF8] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-white/60 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed pl-1">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
