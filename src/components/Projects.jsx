import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Layers, Award, Code2, CheckCircle2, ChevronRight, Sparkles, Terminal } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [projectTabs, setProjectTabs] = useState({
    'tourist-guide': 'arch',
    'traffic-optimization': 'arch',
  });

  const flagshipProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  const setTabForProject = (projId, tab) => {
    setProjectTabs((prev) => ({ ...prev, [projId]: tab }));
  };

  return (
    <section id="projects" className="py-24 relative border-b border-[#1B202D] bg-[#08090C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4FF00] uppercase tracking-wider self-start px-3 py-1 rounded-full cyber-dock border border-[#D4FF00]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Verified Projects & Architectures
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Real implementations built with full-stack web technologies, computer vision algorithms, and production external API orchestrations.
          </p>
        </div>

        {/* Flagship Projects Showcase */}
        <div className="space-y-12">
          {flagshipProjects.map((project) => {
            const currentTab = projectTabs[project.id] || 'arch';

            return (
              <div
                key={project.id}
                className="rounded-3xl obsidian-card p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl group border border-[#1B202D] hover:border-[#D4FF00]/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Overview & Tech (7 Cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Category & Badge */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-[#D4FF00]/15 border border-[#D4FF00]/30 text-xs font-mono text-[#D4FF00]">
                        {project.category}
                      </span>
                      {project.achievements && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A855F7]/15 border border-[#A855F7]/30 text-xs font-mono text-[#D8B4FE]">
                          <Award className="w-3.5 h-3.5 text-[#A855F7]" />
                          <span>SIH 2024 Level 2 Qualifier</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-[#D4FF00] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        {project.tagline || project.shortDescription}
                      </p>
                    </div>

                    {/* Key Highlights Bullet points */}
                    <ul className="space-y-2 pt-1">
                      {project.keyFeatures?.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] mt-2 shrink-0"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Badges */}
                    <div className="pt-2">
                      <div className="text-[11px] font-mono text-[#8E97AB] uppercase tracking-wider mb-2">
                        Verified Technologies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 8).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-[#CBD5E1] hover:border-[#D4FF00]/40 hover:text-[#D4FF00] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#1B202D]">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-2 text-xs font-bold btn-volt px-4 py-2.5 rounded-xl cursor-pointer"
                      >
                        <span>Deep-Dive Case Study</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono cyber-dock hover:border-[#D4FF00]/50 hover:text-[#D4FF00] text-white px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>View Source Code</span>
                        </a>
                      )}

                      {project.id === 'traffic-optimization' && (
                        <a
                          href="#traffic-sim"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D4FF00] hover:underline px-2 py-2"
                        >
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Try Live Simulator ↓</span>
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Right Architectural Flow / Screenshot Card (5 Cols) */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl obsidian-card overflow-hidden border border-[#1B202D]">
                      
                      {/* Sub-Tabs: Architecture vs Visual View */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0C0E14] border-b border-[#1B202D]">
                        <span className="text-xs font-mono text-[#D4FF00] flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#D4FF00]" />
                          <span>System Blueprint</span>
                        </span>

                        <div className="inline-flex p-0.5 rounded-lg bg-[#141822] border border-[#1B202D]">
                          <button
                            onClick={() => setTabForProject(project.id, 'arch')}
                            className={`px-2 py-1 text-[10px] font-mono rounded cursor-pointer transition-all ${
                              currentTab === 'arch' ? 'bg-[#D4FF00] text-black font-bold' : 'text-[#8E97AB] hover:text-[#D4FF00]'
                            }`}
                          >
                            Architecture
                          </button>
                          <button
                            onClick={() => setTabForProject(project.id, 'specs')}
                            className={`px-2 py-1 text-[10px] font-mono rounded cursor-pointer transition-all ${
                              currentTab === 'specs' ? 'bg-[#D4FF00] text-black font-bold' : 'text-[#8E97AB] hover:text-[#D4FF00]'
                            }`}
                          >
                            Specs & APIs
                          </button>
                        </div>
                      </div>

                      {/* Tab 1: Architecture Flow Visualization */}
                      {currentTab === 'arch' && (
                        <div className="p-5 space-y-4 bg-[#0A0C11]">
                          <div className="text-[11px] font-mono text-[#7E869B] uppercase tracking-wider">
                            Data Flow & Pipeline:
                          </div>
                          
                          {/* Flow Steps */}
                          <div className="space-y-2.5">
                            {project.architectureHighlights?.map((step, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4FF00]/30 transition-colors">
                                <span className="w-5 h-5 rounded-md bg-[#D4FF00]/15 border border-[#D4FF00]/30 text-[#D4FF00] flex items-center justify-center text-[10px] font-mono shrink-0 font-bold">
                                  0{idx + 1}
                                </span>
                                <div className="space-y-0.5">
                                  <div className="text-xs font-medium text-white">{step.title}</div>
                                  <div className="text-[11px] text-[#94A3B8] leading-tight">{step.desc}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tab 2: Specs & APIs */}
                      {currentTab === 'specs' && (
                        <div className="p-5 space-y-4 bg-[#0A0C11]">
                          <div className="text-[11px] font-mono text-[#7E869B] uppercase tracking-wider">
                            Verified Integration Specs:
                          </div>

                          <div className="space-y-2 font-mono text-xs">
                            {project.specsList?.map((spec, idx) => (
                              <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                                <span className="text-[#8E97AB]">{spec.label}</span>
                                <span className="text-[#D4FF00] font-medium">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Projects Grid (Urban Mobility & MazeTilt VR) */}
        <div className="mt-16">
          <div className="text-xs font-mono text-[#8E97AB] uppercase tracking-wider mb-6 flex items-center gap-2">
            <span>Specialized Research & Interactive Simulations</span>
            <div className="flex-1 h-px bg-[#1B202D]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-3xl obsidian-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border border-[#1B202D] hover:border-[#A855F7]/40 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#A855F7] px-2.5 py-0.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-[#8E97AB]">
                      {project.period || 'Academic Research'}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold font-display text-white group-hover:text-[#A855F7] transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#CBD5E1] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#1B202D] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono text-[#D4FF00] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#8E97AB] hover:text-white flex items-center gap-1"
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

      {/* Modal Dialog for Project Deep-Dive */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
