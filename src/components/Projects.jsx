import React, { useState } from 'react';
import { ExternalLink, Layers, Award, ChevronRight, Terminal, ArrowDown } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const flagshipTourist = projects.find((p) => p.id === 'tourist-guide');
  const flagshipTraffic = projects.find((p) => p.id === 'traffic-optimization');
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-2 border-b border-[#202534]">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-mono text-[#F59E0B] uppercase tracking-wider block mb-2">
          02 / Case Studies
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
          Featured Engineering Work
        </h2>
        <p className="text-sm sm:text-base text-[#949EAE] mt-2 max-w-2xl">
          Detailed case studies of applications built with production full-stack architectures, multi-API orchestration, and real-time computer vision models.
        </p>
      </div>

      <div className="space-y-12 pb-16">
        
        {/* ========================================================= */}
        {/* Flagship Case Study 1: Smart Tourist Guide & Budget Planner */}
        {/* ========================================================= */}
        {flagshipTourist && (
          <div className="editorial-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#202534]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#F59E0B] font-semibold bg-[#1C1A14] border border-[#3E3219] px-2.5 py-1 rounded">
                  FLAGSHIP 01 · {flagshipTourist.category}
                </span>
                <span className="text-xs font-mono text-[#949EAE]">
                  MERN Full-Stack
                </span>
              </div>

              <div className="flex items-center gap-3">
                {(flagshipTourist.github || flagshipTourist.githubUrl) && (
                  <a
                    href={flagshipTourist.github || flagshipTourist.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(flagshipTourist)}
                  className="btn-primary text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <span>Detailed Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Context, Problem, Engineering (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {flagshipTourist.title}
                  </h3>
                  <p className="text-sm text-[#E2E8F0] mt-1 font-medium">
                    {flagshipTourist.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#949EAE] leading-relaxed">
                  Travelers frequently encounter budgeting friction when planning multi-day trips across unfamiliar destinations. WanderAI was engineered to centralize hotel pricing, meteorological forecasts, and local landmarks into a single reactive planning dashboard.
                </p>

                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono text-white uppercase tracking-wider block">
                    Core Technical Implementations:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#949EAE]">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0"></span>
                      <span>
                        <strong className="text-white">Multi-Service API Pipeline:</strong> Engineered backend handlers orchestrating requests to 6 distinct REST APIs: Amadeus (hotel pricing), OpenWeather (forecasts), Foursquare (places), Visual Crossing (historical patterns), Wikipedia (summaries), and Gemini AI (custom itineraries).
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0"></span>
                      <span>
                        <strong className="text-white">Schema Normalization:</strong> Designed Node.js middleware to ingest unstructured and divergent API responses into a unified client-side state model with fallback error boundaries.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0"></span>
                      <span>
                        <strong className="text-white">Secure Authentication:</strong> Implemented stateless user sessions using JSON Web Tokens (JWT) and bcryptjs hashing over MongoDB Atlas clusters.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block mb-2">
                    Verified Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipTourist.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#1A1F2C] border border-[#202534] text-[#E2E8F0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Flow Ledger (5 Cols) */}
              <div className="lg:col-span-5 bg-[#0C0E12] border border-[#202534] rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#202534] text-xs font-mono text-[#949EAE]">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Orchestration Architecture</span>
                  </span>
                  <span>REST / JSON</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-[#13161F] border border-[#202534] space-y-1">
                    <span className="text-[#F59E0B] font-semibold text-[11px] block">
                      01 / Client Dispatch (React 18)
                    </span>
                    <p className="text-[#949EAE] text-[11px] leading-relaxed">
                      Captures destination parameters, travel dates, and tier mode (Budget / Standard / Luxury).
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#13161F] border border-[#202534] space-y-1">
                    <span className="text-[#F59E0B] font-semibold text-[11px] block">
                      02 / Node.js & Express Coordinator
                    </span>
                    <p className="text-[#949EAE] text-[11px] leading-relaxed">
                      Dispatches parallel requests to Amadeus, OpenWeather, and Foursquare with timeout safety floors.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#13161F] border border-[#202534] space-y-1">
                    <span className="text-[#F59E0B] font-semibold text-[11px] block">
                      03 / Normalization & Persistence
                    </span>
                    <p className="text-[#949EAE] text-[11px] leading-relaxed">
                      Transforms raw payloads into unified models; persists user bookmarks and history to MongoDB.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#64748B] font-mono">
                  Repository: github.com/sujithsinghh/Tourist_Guide
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Flagship Case Study 2: Smart Traffic Signal Optimization */}
        {/* ========================================================= */}
        {flagshipTraffic && (
          <div className="editorial-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#202534]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#F59E0B] font-semibold bg-[#1C1A14] border border-[#3E3219] px-2.5 py-1 rounded">
                  FLAGSHIP 02 · {flagshipTraffic.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 bg-[#0E1C16] border border-[#173D2C] px-2.5 py-1 rounded">
                  <Award className="w-3.5 h-3.5" />
                  <span>SIH '24 National Qualifier</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                {(flagshipTraffic.github || flagshipTraffic.githubUrl) && (
                  <a
                    href={flagshipTraffic.github || flagshipTraffic.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                <a
                  href="#traffic-sim"
                  className="btn-primary text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Try Simulator ↓</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Context, Problem, Engineering (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {flagshipTraffic.title}
                  </h3>
                  <p className="text-sm text-[#E2E8F0] mt-1 font-medium">
                    {flagshipTraffic.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#949EAE] leading-relaxed">
                  Traditional fixed-timer traffic controllers cause massive intersection delays by allocating green time blindly regardless of real queue backlogs. Developed for the Smart India Hackathon 2024, our system dynamically allocates green light durations based on live OpenCV vehicle counts.
                </p>

                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono text-white uppercase tracking-wider block">
                    Core Algorithmic Logic:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#949EAE]">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0"></span>
                      <span>
                        <strong className="text-white">MOG2 Motion Segmentation:</strong> Ingests live intersection camera feeds and applies OpenCV Background Subtractor MOG2 with rectangular morphological structuring elements to isolate moving vehicle contours.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0"></span>
                      <span>
                        <strong className="text-white">Proportional Density Ratio:</strong> Calculates lane priority via ratio: <code>allocation = round((count / total) * 100)</code>.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0"></span>
                      <span>
                        <strong className="text-white">Safety Floors & Caps:</strong> Enforces a 10s minimum green clearance window and scales dynamically up to a 90s ceiling for congested bottleneck lanes. Standby mode gracefully zeros allocations when intersection load is zero.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block mb-2">
                    Verified Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipTraffic.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#1A1F2C] border border-[#202534] text-[#E2E8F0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Code & Mathematical Specs (5 Cols) */}
              <div className="lg:col-span-5 bg-[#0C0E12] border border-[#202534] rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#202534] text-xs font-mono text-[#949EAE]">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Signal Engine (vs/app.py)</span>
                  </span>
                  <span>Python 3</span>
                </div>

                <pre className="p-3.5 rounded-lg bg-[#13161F] border border-[#202534] text-[11px] font-mono text-[#E2E8F0] overflow-x-auto leading-relaxed">
{`# Proportional Allocation Logic (SIH '24)
def calculate_proportional_green(densities):
    total = sum(densities.values())
    if total == 0:
        return {k: 0 for k in densities}
    
    # Proportional split ratio
    allocs = {
        k: round((v / total) * 100)
        for k, v in densities.items()
    }
    # Dynamic duration (10s min floor, 90s cap)
    green_times = {
        k: max(10, round((p / 100) * 90))
        for k, p in allocs.items()
    }
    return allocs, green_times`}
                </pre>

                <div className="text-[11px] text-[#949EAE] leading-relaxed">
                  Verified in SIH 2024 Level 2 judging. Tested under extreme lane density skew (95:5) and zero-traffic conditions.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Compact Secondary Case Studies (2-Column Grid)            */}
        {/* ========================================================= */}
        <div>
          <div className="text-xs font-mono text-[#949EAE] uppercase tracking-wider mb-6 flex items-center gap-3">
            <span>Specialized Research & Interactive VR Simulations</span>
            <div className="flex-1 h-px bg-[#202534]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="editorial-card rounded-xl p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#F59E0B] bg-[#1C1A14] border border-[#3E3219] px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-[#64748B]">
                      {project.period || 'Academic Research'}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-display text-white">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#949EAE] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1A1F2C] text-[#CBD5E1] border border-[#202534]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#202534] flex items-center justify-between text-xs">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="font-mono text-white hover:text-[#F59E0B] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Read Case Summary</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {(project.github || project.githubUrl) && (
                    <a
                      href={project.github || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#949EAE] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
