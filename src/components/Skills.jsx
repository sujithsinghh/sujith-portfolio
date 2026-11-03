import React from 'react';
import { Code, Layout, Server, Database, Brain, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      items: skillsData.languages,
      accent: "text-[#D4FF00]",
      borderHover: "group-hover:border-[#D4FF00]/40",
      badge: "Core Logic"
    },
    {
      title: "Frontend Engineering",
      icon: Layout,
      items: skillsData.frontend,
      accent: "text-[#38BDF8]",
      borderHover: "group-hover:border-[#38BDF8]/40",
      badge: "Reactive UI"
    },
    {
      title: "Backend & Services",
      icon: Server,
      items: skillsData.backend,
      accent: "text-[#D4FF00]",
      borderHover: "group-hover:border-[#D4FF00]/40",
      badge: "REST & Microservices"
    },
    {
      title: "Databases & Cloud Hosting",
      icon: Database,
      items: skillsData.databaseCloud,
      accent: "text-[#F59E0B]",
      borderHover: "group-hover:border-[#F59E0B]/40",
      badge: "Storage & Deploy"
    },
    {
      title: "Computer Vision & Applied AI",
      icon: Brain,
      items: skillsData.machineLearning,
      accent: "text-[#A855F7]",
      borderHover: "group-hover:border-[#A855F7]/40",
      badge: "OpenCV & AlexNet"
    },
    {
      title: "Developer Tools & Practices",
      icon: Wrench,
      items: skillsData.toolsPractices,
      accent: "text-[#EC4899]",
      borderHover: "group-hover:border-[#EC4899]/40",
      badge: "Git & Data Structures"
    },
  ];

  return (
    <section id="skills" className="py-24 relative border-b border-[#1B202D] bg-[#08090C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4FF00] uppercase tracking-wider self-start px-3 py-1 rounded-full cyber-dock border border-[#D4FF00]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
            <span>Verified Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Technical Stack & Toolkit
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Grouped strictly by architectural layer and functional domain. Every technology listed has been utilized in real coursework, hackathons, or deployed applications.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`p-6 rounded-3xl obsidian-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border border-[#1B202D] ${category.borderHover} group`}
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#1B202D]">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${category.accent}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold font-display text-white text-base">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-[#8E97AB] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {category.badge}
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {category.items.map((skill) => {
                      const skillName = typeof skill === 'object' ? skill.name : skill;
                      const skillContext = typeof skill === 'object' ? skill.context : null;
                      return (
                        <span
                          key={skillName}
                          title={skillContext || skillName}
                          className="px-2.5 py-1 rounded-lg bg-[#0C0E14] border border-[#1B202D] text-xs font-mono text-[#CBD5E1] group-hover:border-[#D4FF00]/20 hover:text-[#D4FF00] transition-colors cursor-default"
                        >
                          {skillName}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#1B202D]/60 flex items-center justify-between text-[11px] font-mono text-[#7E869B]">
                  <span>{category.items.length} Verified Proficiencies</span>
                  <span className={category.accent}>Active Skill</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
