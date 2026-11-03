import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Award, Code2, ChevronRight, Terminal, Sparkles, MapPin, DollarSign, Calendar, Sun, CloudRain } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [projectTabs, setProjectTabs] = useState({
    'tourist-guide': 'interactive',
    'traffic-optimization': 'interactive',
  });

  // Interactive state for WanderAI mini-simulator inside the card
  const [wanderCity, setWanderCity] = useState('Goa');
  const [wanderDays, setWanderDays] = useState(4);
  const [wanderBudget, setWanderBudget] = useState('standard');

  const flagshipProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  const setTabForProject = (projId, tab) => {
    setProjectTabs((prev) => ({ ...prev, [projId]: tab }));
  };

  const getEstimatedCost = () => {
    const base = wanderCity === 'Paris' ? 1800 : wanderCity === 'Tokyo' ? 2200 : 350;
    const multiplier = wanderBudget === 'budget' ? 0.6 : wanderBudget === 'luxury' ? 1.9 : 1.0;
    return Math.round(base * wanderDays * multiplier);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFA800] uppercase tracking-wider self-start px-3.5 py-1.5 rounded-full glass-dock border border-[#FFA800]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800] animate-pulse"></span>
            <span>Signature Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Featured Systems & Interactive Case Studies
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl">
            Live interactive project studios demonstrating multi-API orchestration, computer vision pipelines, and production full-stack architectures.
          </p>
        </div>

        {/* Flagship Projects: Glass Studio Workspaces */}
        <div className="space-y-12">
          {flagshipProjects.map((project) => {
            const currentTab = projectTabs[project.id] || 'interactive';

            return (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl glass-card p-6 sm:p-9 border border-white/15 shadow-2xl relative overflow-hidden"
              >
                {/* Top Studio Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#FFA800] font-semibold">
                      {project.category}
                    </span>
                    {project.achievements && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                        <span>SIH '24 National Qualifier</span>
                      </span>
                    )}
                  </div>

                  {/* Interactive Tab Switcher on Card */}
                  <div className="inline-flex p-1 rounded-xl glass-dock border border-white/15">
                    <button
                      onClick={() => setTabForProject(project.id, 'interactive')}
                      className={`px-3 py-1 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                        currentTab === 'interactive'
                          ? 'bg-[#FF6B35] text-white font-bold shadow-md'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      ✨ Live Interactive
                    </button>
                    <button
                      onClick={() => setTabForProject(project.id, 'arch')}
                      className={`px-3 py-1 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                        currentTab === 'arch'
                          ? 'bg-[#FF6B35] text-white font-bold shadow-md'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      📐 Architecture
                    </button>
                    <button
                      onClick={() => setTabForProject(project.id, 'specs')}
                      className={`px-3 py-1 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                        currentTab === 'specs'
                          ? 'bg-[#FF6B35] text-white font-bold shadow-md'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      ⚙️ Specs & APIs
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Context, Features, Tech (6 Cols) */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {project.tagline || project.shortDescription}
                      </p>
                    </div>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono text-white/50 uppercase tracking-wider">
                        Core Capabilities:
                      </div>
                      <ul className="space-y-2">
                        {project.keyFeatures?.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800] mt-2 shrink-0"></span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2">
                      <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mb-2">
                        Verified Technologies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 8).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80 hover:border-white/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-2 text-xs font-bold btn-glass-primary px-4 py-2.5 rounded-xl cursor-pointer"
                      >
                        <span>Deep-Dive Case Study</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono btn-glass-secondary px-4 py-2.5 rounded-xl cursor-pointer"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>View Source</span>
                        </a>
                      )}

                      {project.id === 'traffic-optimization' && (
                        <a
                          href="#traffic-sim"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFA800] hover:underline px-2 py-2"
                        >
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Try Live Simulator ↓</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Dynamic Interactive Surface (6 Cols) */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl glass-code-window p-5 border border-white/15 min-h-[320px] flex flex-col justify-between">
                      
                      {/* View 1: Live Interactive Feature Simulation */}
                      {currentTab === 'interactive' && (
                        <div>
                          {project.id === 'tourist-guide' ? (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                                <span className="text-xs font-mono text-[#FFA800] flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-[#FFA800]" />
                                  <span>Live Multi-API Itinerary Engine</span>
                                </span>
                                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                  6 Services Active
                                </span>
                              </div>

                              {/* Interactive controls */}
                              <div className="grid grid-cols-3 gap-2">
                                <div>
                                  <label className="text-[10px] font-mono text-white/50 block mb-1">Destination</label>
                                  <select
                                    value={wanderCity}
                                    onChange={(e) => setWanderCity(e.target.value)}
                                    className="w-full bg-[#121626] border border-white/15 text-xs rounded-lg px-2 py-1.5 text-white outline-none"
                                  >
                                    <option value="Goa">Goa, IN</option>
                                    <option value="Paris">Paris, FR</option>
                                    <option value="Tokyo">Tokyo, JP</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="text-[10px] font-mono text-white/50 block mb-1">Duration</label>
                                  <select
                                    value={wanderDays}
                                    onChange={(e) => setWanderDays(Number(e.target.value))}
                                    className="w-full bg-[#121626] border border-white/15 text-xs rounded-lg px-2 py-1.5 text-white outline-none"
                                  >
                                    <option value="3">3 Days</option>
                                    <option value="4">4 Days</option>
                                    <option value="7">7 Days</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="text-[10px] font-mono text-white/50 block mb-1">Budget Mode</label>
                                  <select
                                    value={wanderBudget}
                                    onChange={(e) => setWanderBudget(e.target.value)}
                                    className="w-full bg-[#121626] border border-white/15 text-xs rounded-lg px-2 py-1.5 text-white outline-none"
                                  >
                                    <option value="budget">Budget</option>
                                    <option value="standard">Standard</option>
                                    <option value="luxury">Luxury</option>
                                  </select>
                                </div>
                              </div>

                              {/* Simulated Live Results Card */}
                              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                                <div className="flex items-center justify-between">
                                  <span className="text-white/60">Estimated Cost ({wanderDays} Days):</span>
                                  <span className="font-mono text-[#FFA800] font-bold text-sm">${getEstimatedCost()} USD</span>
                                </div>
                                <div className="flex items-center justify-between text-[11px] text-white/70">
                                  <span>Weather Prediction:</span>
                                  <span className="flex items-center gap-1 text-emerald-400">
                                    <Sun className="w-3.5 h-3.5" />
                                    <span>28°C · Sunny (OpenWeather)</span>
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-[11px] text-white/70">
                                  <span>Hotel Inventory:</span>
                                  <span className="text-white">Amadeus Verified API</span>
                                </div>
                              </div>

                              <div className="text-[10px] font-mono text-white/40 pt-1">
                                Integrates: Amadeus Hotel Search + Foursquare Places + VisualCrossing Weather + Gemini AI
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                                  <span>OpenCV Video Analytics Stream</span>
                                </span>
                                <span className="text-[10px] font-mono text-[#FFA800] bg-[#FFA800]/10 px-2 py-0.5 rounded border border-[#FFA800]/20">
                                  MOG2 Active
                                </span>
                              </div>

                              {/* Simulated OpenCV Video feed visual */}
                              <div className="aspect-[16/9] w-full rounded-xl bg-[#070912] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center p-4">
                                <div className="absolute inset-0 bg-grid-architectural opacity-30" />
                                
                                {/* Simulated bounding boxes */}
                                <div className="border border-emerald-400/80 bg-emerald-400/10 px-3 py-1 rounded text-[10px] font-mono text-emerald-300 absolute top-4 left-6">
                                  Vehicle #14 [Conf: 0.94]
                                </div>
                                <div className="border border-emerald-400/80 bg-emerald-400/10 px-3 py-1 rounded text-[10px] font-mono text-emerald-300 absolute bottom-6 right-8">
                                  Vehicle #15 [Conf: 0.91]
                                </div>

                                <div className="relative z-10 text-center space-y-1">
                                  <div className="text-xs font-mono text-white/90 font-semibold">
                                    Simulated Video Feed: Lane 02 (South)
                                  </div>
                                  <div className="text-[11px] font-mono text-emerald-400">
                                    Contour Area &gt; 400px² • 85 Moving Targets
                                  </div>
                                </div>
                              </div>

                              <div className="text-[10px] font-mono text-white/50 text-center">
                                Feeds vehicle density ratio directly into adaptive green timer algorithm
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* View 2: Architecture Blueprint */}
                      {currentTab === 'arch' && (
                        <div className="space-y-3">
                          <div className="text-xs font-mono text-white/50 uppercase tracking-wider pb-2 border-b border-white/10">
                            System Pipeline Architecture:
                          </div>
                          <div className="space-y-2">
                            {project.architectureHighlights?.map((step, idx) => (
                              <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                                <span className="w-5 h-5 rounded-md bg-[#FF6B35]/20 border border-[#FF6B35]/40 text-[#FFA800] text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                                  0{idx + 1}
                                </span>
                                <div>
                                  <div className="text-xs font-semibold text-white">{step.title}</div>
                                  <div className="text-[11px] text-white/60 leading-relaxed">{step.desc}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* View 3: Specs & APIs */}
                      {currentTab === 'specs' && (
                        <div className="space-y-3">
                          <div className="text-xs font-mono text-white/50 uppercase tracking-wider pb-2 border-b border-white/10">
                            Verified Integration Specs:
                          </div>
                          <div className="space-y-2 font-mono text-xs">
                            {project.specsList?.map((spec, idx) => (
                              <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                                <span className="text-white/60">{spec.label}</span>
                                <span className="text-[#FFA800] font-semibold">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Projects Grid (Urban Mobility & MazeTilt VR) */}
        <div className="mt-14">
          <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-6 flex items-center gap-3">
            <span>Specialized Research & Interactive VR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl glass-card flex flex-col justify-between border border-white/15 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#FFA800] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-white/50">
                      {project.period || 'Academic Research'}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold font-display text-white group-hover:text-[#FFA800] transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-white/70 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono text-[#FFA800] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/60 hover:text-white flex items-center gap-1"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal Dialog for Project Deep-Dive */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
