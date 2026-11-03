import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, AlertCircle, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Only lock scroll when modal is actually open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow || 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0C0E14] border border-[#1B202D] rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#141822] border border-[#1B202D] text-[#8E97AB] hover:text-[#D4FF00] hover:border-[#D4FF00]/40 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pb-6 border-b border-[#1B202D]">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/25 text-xs font-mono text-[#D4FF00]">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            {project.title}
          </h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            {project.tagline || project.shortDescription}
          </p>
          
          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium cyber-dock hover:border-[#D4FF00]/50 hover:text-[#D4FF00] text-white px-4 py-2 rounded-xl transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold btn-volt px-4 py-2 rounded-xl transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          
          {/* Architecture Details if present */}
          {project.architectureHighlights && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4FF00] flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#D4FF00]" />
                <span>System Architecture Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {project.architectureHighlights.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-[#1B202D] space-y-1">
                    <span className="font-mono text-[#D4FF00] uppercase text-[10px] tracking-wider block font-bold">
                      Step 0{idx + 1}: {step.title}
                    </span>
                    <p className="text-[#C2C9D6] leading-relaxed text-[11px]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features List */}
          {project.keyFeatures && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A855F7] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Key Implemented Capabilities</span>
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C2C9D6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] mt-2 shrink-0"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenges & Solutions */}
          {project.challenges && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Engineering Challenges Solved</span>
              </h4>
              <div className="space-y-2">
                {project.challenges.map((ch, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#14120E] border border-[#382E1E] text-xs text-[#E0C9A6] leading-relaxed">
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used Grid */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#7E869B]">
              Verified Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-[#141822] border border-[#1B202D] text-xs font-mono text-[#CBD5E1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#1B202D] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold btn-volt rounded-xl transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
