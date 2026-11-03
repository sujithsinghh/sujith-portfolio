import React, { useState } from 'react';
import { ArrowDown, FileText, ArrowUpRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const [photoVariant, setPhotoVariant] = useState('formal'); // 'formal' (white shirt) or 'casual' (brown shirt)

  const activePhoto = photoVariant === 'formal' ? '/sujith_avatar.jpg' : '/sujith_avatar_casual.jpg';

  return (
    <section className="pt-4 pb-2 border-b border-[#202534]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16">
        
        {/* Left Column: Authentic Identity & Editorial Narrative (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div>
            <span className="text-xs font-mono text-[#949EAE] uppercase tracking-wider block mb-2">
              Padmasri Dr. B.V. Raju Institute of Technology · B.Tech CSE '27
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Matta Sujith Singh
            </h1>
            <p className="text-lg sm:text-xl font-medium text-[#E2E8F0] mt-2.5 leading-snug">
              Computer Science undergraduate building full-stack web applications and applied computer vision systems.
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#949EAE] leading-relaxed max-w-xl">
            Currently maintaining an <strong className="text-white font-medium">8.6 CGPA</strong> at BVRIT. Smart India Hackathon '24 National Level 2 Qualifier with direct experience orchestrating multi-service REST APIs (6 production endpoints) and engineering real-time OpenCV traffic optimization pipelines.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="btn-primary text-xs sm:text-sm px-5 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer"
            >
              <span>View Featured Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Matta_Sujith_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs sm:text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#949EAE]" />
              <span>Resume (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#949EAE]" />
            </a>

            <a
              href="#contact"
              className="text-xs sm:text-sm font-medium text-[#949EAE] hover:text-white px-2 py-2 flex items-center gap-1 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Clean Profile Links */}
          <div className="pt-4 flex flex-wrap items-center gap-5 text-xs font-mono text-[#949EAE] border-t border-[#202534]">
            <span className="text-[#64748B] uppercase tracking-wider text-[11px]">Connect:</span>
            
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
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>LeetCode</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

        </div>

        {/* Right Column: Natural 3:4 Vertical Portrait (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[#202534] bg-[#13161F] shadow-lg group">
              <img
                src={activePhoto}
                alt="Portrait photograph of Matta Sujith Singh"
                className="w-full h-full object-cover object-top transition-opacity duration-300"
                loading="eager"
              />

              {/* Photo Style Selector Pill */}
              <div className="absolute top-3 right-3 bg-[#0C0E12]/85 backdrop-blur-md border border-[#202534] rounded-lg p-1 flex items-center gap-1 text-[10px] font-mono shadow-md">
                <button
                  onClick={() => setPhotoVariant('formal')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    photoVariant === 'formal'
                      ? 'bg-[#F59E0B] text-black font-semibold'
                      : 'text-[#949EAE] hover:text-white'
                  }`}
                  title="Crisp formal white shirt portrait"
                >
                  Formal
                </button>
                <button
                  onClick={() => setPhotoVariant('casual')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    photoVariant === 'casual'
                      ? 'bg-[#F59E0B] text-black font-semibold'
                      : 'text-[#949EAE] hover:text-white'
                  }`}
                  title="Relaxed brown textured shirt portrait"
                >
                  Casual
                </button>
              </div>
            </div>
            
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#949EAE] px-1">
              <span>Hyderabad, India</span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Open for Roles</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}