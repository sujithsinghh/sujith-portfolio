import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Brain, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      items: skillsData.languages,
      accent: "text-[#818CF8]",
      badge: "Core Logic"
    },
    {
      title: "Frontend Engineering",
      icon: Layout,
      items: skillsData.frontend,
      accent: "text-[#38BDF8]",
      badge: "Reactive UI"
    },
    {
      title: "Backend & Microservices",
      icon: Server,
      items: skillsData.backend,
      accent: "text-emerald-400",
      badge: "REST & Scalability"
    },
    {
      title: "Databases & Cloud Hosting",
      icon: Database,
      items: skillsData.databaseCloud,
      accent: "text-[#F59E0B]",
      badge: "Storage & Deploy"
    },
    {
      title: "Computer Vision & Applied AI",
      icon: Brain,
      items: skillsData.machineLearning,
      accent: "text-[#F472B6]",
      badge: "OpenCV & AlexNet"
    },
    {
      title: "Developer Tools & Practices",
      icon: Wrench,
      items: skillsData.toolsPractices,
      accent: "text-[#C084FC]",
      badge: "Git & DSA"
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A5B4FC] uppercase tracking-wider self-start px-3.5 py-1.5 rounded-full glass-dock border border-[#818CF8]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8] animate-pulse"></span>
            <span>Verified Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Technical Stack & Toolkit Matrix
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl">
            Grouped strictly by architectural layer and functional domain. Every technology listed has been utilized in real coursework, hackathons, or deployed applications.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-3xl glass-panel flex flex-col justify-between border border-white/15 group"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${category.accent}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold font-display text-white text-base">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-white/60 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
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
                          className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 group-hover:border-white/20 hover:text-[#818CF8] hover:bg-white/10 transition-colors cursor-default"
                        >
                          {skillName}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                  <span>{category.items.length} Proficiencies</span>
                  <span className={category.accent}>Active Toolkit</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
