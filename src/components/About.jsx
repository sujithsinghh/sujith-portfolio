import React from 'react';
import { Terminal, Cpu, GitBranch, Database, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const philosophies = [
    {
      title: "Full-Stack System Integrity",
      description: "From client state in React 18 down to Express middleware and MongoDB schemas, I design systems with clear separation of concerns, structured validation, and predictable error handling.",
      icon: Database,
      tag: "MERN Architecture",
      accent: "text-[#D4FF00]"
    },
    {
      title: "Real-World Computer Vision",
      description: "Hands-on experience processing live camera feeds with OpenCV (MOG2 background subtraction) to build adaptive timing algorithms that solve real urban mobility bottlenecks.",
      icon: Cpu,
      tag: "OpenCV & AI",
      accent: "text-[#A855F7]"
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
    <section id="about" className="py-24 relative border-b border-[#1B202D] bg-[#08090C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4FF00] uppercase tracking-wider self-start px-3 py-1 rounded-full cyber-dock border border-[#D4FF00]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
            <span>Profile & Engineering Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Engineering Foundations & Mindset
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            A look into my academic journey at BVRIT, technical focus areas, and how I approach scalable software design.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative Box (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#C2C9D6] leading-relaxed text-sm sm:text-base">
            <div className="p-7 rounded-3xl obsidian-card space-y-4 border border-[#1B202D]">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#D4FF00]" />
                <span>Undergraduate Journey & Core Focus</span>
              </h3>
              
              <p>
                I am currently in my 3rd year pursuing a Bachelor of Technology in Computer Science and Engineering at{' '}
                <strong className="text-white font-medium">B. V. Raju Institute of Technology (BVRIT)</strong>, maintaining an{' '}
                <span className="text-[#D4FF00] font-mono font-bold">8.6/10 CGPA</span>. My engineering path is rooted in disciplined problem solving, mathematics, and building complete, end-to-end digital software.
              </p>

              <p>
                My development work centers around two complementary engineering pillars:
              </p>

              <ul className="space-y-3 pl-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D4FF00] mt-1 shrink-0" />
                  <span>
                    <strong className="text-white">Full-Stack Web Engineering (MERN):</strong> Building complete web applications featuring JWT authentication, reactive UI components, and integrations with production-grade third-party APIs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#A855F7] mt-1 shrink-0" />
                  <span>
                    <strong className="text-white">Applied AI & Computer Vision:</strong> Translating algorithmic logic and computer vision models (OpenCV, AlexNet) into functional real-time tools for traffic management and urban efficiency.
                  </span>
                </li>
              </ul>

              <div className="pt-3 text-xs text-[#8E97AB] font-mono border-t border-[#1B202D] flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-white">
                  <Zap className="w-3.5 h-3.5 text-[#D4FF00]" />
                  <span>SIH 2024 Level 2 Qualifier</span>
                </span>
                <span className="text-[#D4FF00]">Active Solver on LeetCode</span>
              </div>
            </div>
          </div>

          {/* Right Bento Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {philosophies.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl obsidian-card group hover:-translate-y-1 transition-all duration-300 border border-[#1B202D] hover:border-[#D4FF00]/40"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#D4FF00]/50 ${item.accent} transition-colors`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-semibold text-white text-sm group-hover:text-[#D4FF00] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-[#8E97AB] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed pl-1">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
