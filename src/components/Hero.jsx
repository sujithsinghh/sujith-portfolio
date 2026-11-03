import React, { useState } from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [photoVariant, setPhotoVariant] = useState('formal');

  const currentPhoto = photoVariant === 'formal' ? personalInfo.avatarUrl : personalInfo.avatarCasualUrl;

  return (
    <section className="pt-8 sm:pt-14 pb-12 sm:pb-16 border-b border-[#E5E1D8]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Narrative (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-3">
            <span className="eyebrow block">
              Portfolio & Curriculum Vitae · Padmasri Dr. B.V. Raju Institute of Technology
            </span>
            <h1 className="font-serif text-[22px] sm:text-3xl md:text-4xl lg:text-[46px] leading-[1.22] sm:leading-[1.12] tracking-tight text-[#121316]">
              Software developer engineering{' '}
              <em className="italic text-[#9E3514] font-serif">full-stack web applications</em>{' '}
              and applied computer vision systems.
            </h1>
          </div>

          <p className="text-sm sm:text-base text-[#5C6069] leading-relaxed max-w-xl">
            Undergraduate in Computer Science at <strong className="text-[#121316] font-semibold">BVRIT (CGPA: 8.47 / 10)</strong>. Smart India Hackathon 2024 Level 2 Qualifier. Experienced in engineering scalable MERN architectures, orchestrating multi-service REST APIs, and building real-time OpenCV vehicle density algorithms.
          </p>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Matta_Sujith_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-dark"
            >
              <span>Download Resume (PDF) ↓</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-outline"
            >
              <span>GitHub ↗</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-outline"
            >
              <span>LinkedIn ↗</span>
            </a>

            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-outline"
            >
              <span>LeetCode ↗</span>
            </a>
          </div>

        </div>

        {/* Right Column: Monograph Portrait Plate (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[340px] bg-white p-3 border border-[#E5E1D8] shadow-sm">
            
            {/* Image Box (3:4 ratio) */}
            <div className="aspect-[3/4] overflow-hidden bg-[#EEECE7] relative">
              <img
                src={currentPhoto}
                alt="Matta Sujith Singh"
                className="w-full h-full object-cover object-top transition-opacity duration-300"
                loading="eager"
              />
            </div>

            {/* Plate Caption Bar & Photo Toggle */}
            <div className="mt-2.5 pt-2 border-t border-[#E5E1D8] flex items-center justify-between font-mono text-[11px] text-[#5C6069]">
              <div>
                <span className="text-[#121316] font-medium block sm:inline">Fig. 01 — {personalInfo.name}</span>
                <span className="sm:ml-2 text-[10px] text-[#8A8F99]">Medak / Hyderabad</span>
              </div>

              {/* Photo Style Selector */}
              <div className="flex items-center gap-1 bg-[#FAF8F5] p-0.5 border border-[#E5E1D8] text-[10px]">
                <button
                  onClick={() => setPhotoVariant('formal')}
                  className={`px-1.5 py-0.5 transition-colors cursor-pointer ${
                    photoVariant === 'formal' ? 'bg-[#121316] text-white font-medium' : 'text-[#5C6069] hover:text-[#121316]'
                  }`}
                  title="Formal white shirt portrait"
                >
                  Formal
                </button>
                <button
                  onClick={() => setPhotoVariant('casual')}
                  className={`px-1.5 py-0.5 transition-colors cursor-pointer ${
                    photoVariant === 'casual' ? 'bg-[#121316] text-white font-medium' : 'text-[#5C6069] hover:text-[#121316]'
                  }`}
                  title="Casual brown shirt portrait"
                >
                  Casual
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}