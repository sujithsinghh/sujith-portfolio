import React from 'react';
import { GraduationCap, ShieldCheck, ExternalLink, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function EducationAndCerts() {
  return (
    <section id="education" className="py-24 relative border-b border-[#1B202D] bg-[#08090C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4FF00] uppercase tracking-wider self-start px-3 py-1 rounded-full cyber-dock border border-[#D4FF00]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Education & Verified Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Documented milestones representing continuous academic discipline, engineering certifications, and international proficiency credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Education Timeline (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 pb-2 border-b border-[#1B202D]">
              <GraduationCap className="w-5 h-5 text-[#D4FF00]" />
              <span>Academic Background</span>
            </h3>

            <div className="space-y-6">
              {educationData.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-6 rounded-3xl obsidian-card hover:-translate-y-1 transition-all duration-300 space-y-3 border border-[#1B202D] hover:border-[#D4FF00]/40 group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#D4FF00]/15 border border-[#D4FF00]/30 text-xs font-mono font-bold text-[#D4FF00]">
                      {edu.score}
                    </span>
                    <span className="text-xs font-mono text-[#8E97AB] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#D4FF00]" />
                      <span>{edu.period}</span>
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-[#94A3B8] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#64748B]" />
                      <span>{edu.institution}, {edu.location}</span>
                    </p>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}

              {/* Competitive Examination Milestone */}
              <div className="p-6 rounded-2xl obsidian-card space-y-2 border border-[#1B202D]">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-medium">State Engineering Entrance</span>
                  <span className="text-[#D4FF00] font-bold">TS EAMCET 2023</span>
                </div>
                <p className="text-xs text-[#94A3B8]">
                  Secured State Rank <strong className="text-white">13,182</strong> in the Engineering stream with 68.30 normalized marks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Certifications (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 pb-2 border-b border-[#1B202D]">
              <ShieldCheck className="w-5 h-5 text-[#A855F7]" />
              <span>Industry & Professional Certifications</span>
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.title || cert.credentialId}
                  className="p-5 rounded-2xl obsidian-card hover:-translate-y-1 transition-all duration-300 border border-[#1B202D] hover:border-[#A855F7]/40 space-y-2 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#A855F7] bg-[#A855F7]/10 px-2 py-0.5 rounded border border-[#A855F7]/20">
                          {cert.issuer}
                        </span>
                        {cert.credentialId && (
                          <span className="text-[10px] font-mono text-[#8E97AB]">
                            ID: {cert.credentialId}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#D4FF00] transition-colors mt-1.5">
                        {cert.title}
                      </h4>
                    </div>

                    <span className="text-[11px] font-mono text-[#8E97AB] shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {cert.highlight || cert.description}
                  </p>

                  {cert.score && (
                    <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#D4FF00]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF00]" />
                      <span>{cert.score}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
