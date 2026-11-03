import React from 'react';
import { Code, Layout, Server, Database, Brain, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      items: skillsData.languages,
      badge: "Core Logic"
    },
    {
      title: "Frontend Engineering",
      icon: Layout,
      items: skillsData.frontend,
      badge: "Reactive UI"
    },
    {
      title: "Backend & Microservices",
      icon: Server,
      items: skillsData.backend,
      badge: "REST & Scalability"
    },
    {
      title: "Databases & Cloud Hosting",
      icon: Database,
      items: skillsData.databaseCloud,
      badge: "Storage & Deploy"
    },
    {
      title: "Computer Vision & Applied AI",
      icon: Brain,
      items: skillsData.machineLearning,
      badge: "OpenCV & AlexNet"
    },
    {
      title: "Developer Tools & Practices",
      icon: Wrench,
      items: skillsData.toolsPractices,
      badge: "Git & DSA"
    },
  ];

  return (
    <section id="skills" className="pt-8">
      {/* Section Header */}
      <div className="flex flex-col space-y-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#949EAE]">
            Verified Competencies
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
          Technical Capabilities & Stack
        </h2>
        <p className="text-[#949EAE] text-sm sm:text-base max-w-3xl leading-relaxed">
          Structured by architectural tier and engineering domain. Every tool and library listed has been actively implemented in university coursework, national hackathons, or deployed applications.
        </p>
      </div>

      {/* 6-Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-[#13161F] border border-[#202534] hover:border-[#384055] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#202534]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#0C0E12] border border-[#202534] text-[#F59E0B]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-[#F3F4F6] text-sm">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#949EAE] bg-[#0C0E12] px-2 py-0.5 rounded border border-[#202534]">
                    {category.badge}
                  </span>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {category.items.map((skill) => {
                    const skillName = typeof skill === 'object' ? skill.name : skill;
                    const skillContext = typeof skill === 'object' ? skill.context : null;
                    return (
                      <span
                        key={skillName}
                        title={skillContext || skillName}
                        className="px-2.5 py-1 rounded-md bg-[#0C0E12] border border-[#202534] text-xs font-mono text-[#949EAE] hover:text-[#F3F4F6] hover:border-[#F59E0B]/50 transition-colors cursor-default"
                      >
                        {skillName}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="pt-4 mt-6 border-t border-[#202534] flex items-center justify-between text-[11px] font-mono text-[#949EAE]">
                <span>{category.items.length} proficiencies</span>
                <span className="text-[#10B981]">Active</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}