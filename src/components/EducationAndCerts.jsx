import React from 'react';
import { GraduationCap, ShieldCheck, ExternalLink, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function EducationAndCerts() {
  return (
    <section id="education" className="pt-8">
      {/* Section Header */}
      <div className="flex flex-col space-y-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#949EAE]">
            Credentials & Background
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
          Academic History & Certifications
        </h2>
        <p className="text-[#949EAE] text-sm sm:text-base max-w-3xl leading-relaxed">
          Documented academic progression and industry credentials validated through rigorous coursework, state entrance examinations, and certified examinations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Academic Progression (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#202534] text-xs font-mono uppercase tracking-wider text-[#949EAE]">
            <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
            <span>Formal Education</span>
          </div>

          <div className="space-y-4">
            {educationData.map((edu) => (
              <div
                key={edu.institution}
                className="p-5 rounded-xl bg-[#13161F] border border-[#202534] hover:border-[#384055] transition-all space-y-3 group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#0C0E12] border border-[#202534] text-xs font-mono font-bold text-[#F59E0B]">
                    {edu.score}
                  </span>
                  <span className="text-xs font-mono text-[#949EAE] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#949EAE]" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#F3F4F6] group-hover:text-white transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-[#949EAE] flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#949EAE]" />
                    <span>{edu.institution}, {edu.location}</span>
                  </p>
                </div>

                <p className="text-xs text-[#949EAE] leading-relaxed pt-1">
                  {edu.details}
                </p>
              </div>
            ))}

            {/* Competitive Examination Standout */}
            <div className="p-5 rounded-xl bg-[#13161F] border border-[#202534] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F3F4F6] font-medium flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>TS EAMCET 2023 (Engineering Entrance)</span>
                </span>
                <span className="text-[#10B981] font-bold">State Rank 13,182</span>
              </div>
              <p className="text-xs text-[#949EAE] leading-relaxed">
                Achieved top percentile state rank with 68.30 normalized marks in Mathematics, Physics, and Chemistry, securing merit-based admission into BVRIT Computer Science & Engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Verified Industry Certifications (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#202534] text-xs font-mono uppercase tracking-wider text-[#949EAE]">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>Verified Credentials</span>
          </div>

          <div className="space-y-3">
            {certificationsData.map((cert) => (
              <div
                key={cert.title || cert.credentialId}
                className="p-4 rounded-xl bg-[#13161F] border border-[#202534] hover:border-[#384055] transition-all space-y-2 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                        {cert.issuer}
                      </span>
                      {cert.credentialId && (
                        <span className="text-[10px] font-mono text-[#949EAE]">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-[#F3F4F6] group-hover:text-white transition-colors mt-1.5">
                      {cert.title}
                    </h4>
                  </div>

                  <span className="text-[11px] font-mono text-[#949EAE] shrink-0">
                    {cert.date}
                  </span>
                </div>

                <p className="text-xs text-[#949EAE] leading-relaxed">
                  {cert.highlight || cert.description}
                </p>

                {cert.subscore && (
                  <p className="text-[11px] font-mono text-[#949EAE]">
                    {cert.subscore}
                  </p>
                )}

                <div className="pt-2 flex items-center justify-between text-xs font-mono">
                  {cert.score ? (
                    <span className="text-[#10B981] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{cert.score}</span>
                    </span>
                  ) : (
                    <span className="text-[#949EAE]">Verified Completion</span>
                  )}

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#949EAE] hover:text-[#F3F4F6] flex items-center gap-1 transition-colors text-[11px]"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}