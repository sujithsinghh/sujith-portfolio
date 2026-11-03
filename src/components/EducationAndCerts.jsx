import React from 'react';
import { ExternalLink } from 'lucide-react';
import { educationHistory, certificationsHistory } from '../data/portfolioData';

export default function EducationAndCerts() {
  return (
    <section id="credentials" className="pt-8 pb-12 border-b border-[#E5E1D8]">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E5E1D8]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9E3514] font-semibold block mb-2">
            Section 03 / Background
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#121316] font-normal tracking-tight">
            Education & Credentials
          </h2>
        </div>
        <p className="text-sm text-[#5C6069] max-w-md leading-relaxed md:text-right">
          Documented academic record, competitive examination percentiles, and verified engineering certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-8">
        
        {/* Left Column: Academic Progression (6 cols) */}
        <div className="lg:col-span-6 space-y-8">
          <div className="font-mono text-xs uppercase tracking-wider text-[#121316] font-semibold pb-3 border-b border-[#121316]">
            Academic Record
          </div>

          <div className="space-y-6">
            {educationHistory.map((edu) => (
              <div key={edu.institution} className="space-y-1.5 pb-6 border-b border-[#E5E1D8] last:border-b-0">
                <div className="flex justify-between font-mono text-xs text-[#5C6069]">
                  <span>{edu.period}</span>
                  <span className="text-[#9E3514] font-semibold">{edu.score}</span>
                </div>

                <h3 className="font-serif text-xl text-[#121316] font-medium leading-snug">
                  {edu.institution}
                </h3>

                <div className="text-xs text-[#5C6069]">
                  {edu.degree} · {edu.location}
                </div>

                <p className="text-xs sm:text-sm text-[#5C6069] leading-relaxed pt-1">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications & Competitions (6 cols) */}
        <div className="lg:col-span-6 space-y-8">
          <div className="font-mono text-xs uppercase tracking-wider text-[#121316] font-semibold pb-3 border-b border-[#121316]">
            Certifications & Industry Credentials
          </div>

          <div className="space-y-6">
            {certificationsHistory.map((cert) => (
              <div key={cert.title} className="space-y-1.5 pb-6 border-b border-[#E5E1D8] last:border-b-0">
                <div className="flex justify-between font-mono text-xs text-[#5C6069]">
                  <span>{cert.issuer} · {cert.date}</span>
                  <span className="text-[#9E3514] font-semibold">{cert.score}</span>
                </div>

                <h4 className="font-serif text-lg text-[#121316] font-medium leading-snug">
                  {cert.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#5C6069] leading-relaxed">
                  {cert.details}
                </p>

                {cert.verifyUrl && (
                  <div className="pt-1">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-[#5C6069] hover:text-[#9E3514] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}