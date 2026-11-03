import React from 'react';
import { Database, Cpu, GitBranch } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: "Full-Stack System Architecture",
      desc: "Designing end-to-end applications with clean client-server boundaries, predictable state management in React, robust Express middleware pipelines, and structured MongoDB schemas.",
      icon: Database,
      tag: "MERN Stack"
    },
    {
      title: "Real-Time Computer Vision",
      desc: "Processing live camera feeds using OpenCV (MOG2 background subtraction and contour detection) to feed vehicle density metrics into adaptive civil traffic allocation engines.",
      icon: Cpu,
      tag: "OpenCV & AI"
    },
    {
      title: "Disciplined API Orchestration",
      desc: "Integrating multiple external REST APIs (Amadeus, OpenWeather, Foursquare, Visual Crossing) with schema normalization, rate limit buffers, and reliable fallback handling.",
      icon: GitBranch,
      tag: "Multi-API Integration"
    }
  ];

  return (
    <section id="about" className="py-2 border-b border-[#202534]">
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs font-mono text-[#F59E0B] uppercase tracking-wider block mb-2">
          01 / Profile
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
          Engineering Foundations & Focus
        </h2>
        <p className="text-sm sm:text-base text-[#949EAE] mt-2 max-w-2xl">
          An overview of my academic background at BVRIT, core engineering interests, and practical software methodology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-16">
        
        {/* Left Column: Narrative (7 Cols) */}
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#949EAE] leading-relaxed">
          <p>
            I am currently in my 3rd year pursuing a Bachelor of Technology in Computer Science and Engineering at{' '}
            <strong className="text-white font-medium">Padmasri Dr. B.V. Raju Institute of Technology (BVRIT)</strong>, maintaining an{' '}
            <span className="text-white font-mono font-medium">8.6/10 CGPA</span>. My foundation began in high school mathematics and algorithmic problem solving, scoring <strong className="text-white">98.0%</strong> in my Intermediate education and securing a state rank of <strong className="text-white font-mono">13,182</strong> in the TS EAMCET engineering entrance.
          </p>

          <p>
            My engineering work is directed toward two complementary disciplines:
          </p>

          <ul className="space-y-3 pl-1 text-sm">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0"></span>
              <span>
                <strong className="text-white font-medium">Production Full-Stack Web Development:</strong> Building resilient applications with modern React, Node.js, Express, and MongoDB, with a focus on JWT authentication, modular route controllers, and clean component state.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0"></span>
              <span>
                <strong className="text-white font-medium">Computer Vision & Applied AI:</strong> Translating mathematical models into real-world tools, including traffic queue estimation using OpenCV contour algorithms and traffic forecasting with AlexNet CNN architectures.
              </span>
            </li>
          </ul>

          <p className="pt-2">
            In 2024, our team qualified for <strong className="text-white font-medium">Smart India Hackathon (SIH) Level 2</strong> with our computer-vision-based dynamic traffic signal timing system. I actively solve algorithmic challenges on LeetCode and SmartInterviews.
          </p>
        </div>

        {/* Right Column: 3 Architectural Pillars (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="editorial-card rounded-xl p-5 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-[#F59E0B]" />
                    <h3 className="font-semibold text-white text-sm">
                      {pillar.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#949EAE] bg-[#1A1F2C] px-2 py-0.5 rounded border border-[#202534]">
                    {pillar.tag}
                  </span>
                </div>

                <p className="text-xs text-[#949EAE] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
