import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, ExternalLink, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function EducationAndCerts() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFA800] uppercase tracking-wider self-start px-3.5 py-1.5 rounded-full glass-dock border border-[#FFA800]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800] animate-pulse"></span>
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Education & Verified Certifications
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl">
            Documented milestones representing continuous academic discipline, engineering certifications, and international proficiency credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Timeline (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-3 border-b border-white/10">
              <GraduationCap className="w-5 h-5 text-[#FFA800]" />
              <span>Academic Milestones</span>
            </h3>

            <div className="space-y-5">
              {educationData.map((edu) => (
                <motion.div
                  key={edu.institution}
                  whileHover={{ y: -3 }}
                  className="p-6 rounded-3xl glass-card space-y-3 border border-white/15 group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold text-[#FFA800]">
                      {edu.score}
                    </span>
                    <span className="text-xs font-mono text-white/60 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#FFA800]" />
                      <span>{edu.period}</span>
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#FFA800] transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-white/60 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-white/40" />
                      <span>{edu.institution}, {edu.location}</span>
                    </p>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </motion.div>
              ))}

              {/* Competitive Examination Milestone */}
              <div className="p-6 rounded-2xl glass-card space-y-2 border border-white/15">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-medium">State Engineering Entrance</span>
                  <span className="text-emerald-400 font-bold">TS EAMCET 2023</span>
                </div>
                <p className="text-xs text-white/70">
                  Secured State Rank <strong className="text-white">13,182</strong> in the Engineering stream with 68.30 normalized marks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Certifications (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-3 border-b border-white/10">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Industry & Professional Certifications</span>
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <motion.div
                  key={cert.title || cert.credentialId}
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-2xl glass-card border border-white/15 space-y-2 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {cert.issuer}
                        </span>
                        {cert.credentialId && (
                          <span className="text-[10px] font-mono text-white/50">
                            ID: {cert.credentialId}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#FFA800] transition-colors mt-1.5">
                        {cert.title}
                      </h4>
                    </div>

                    <span className="text-[11px] font-mono text-white/50 shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {cert.highlight || cert.description}
                  </p>

                  {cert.score && (
                    <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{cert.score}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
