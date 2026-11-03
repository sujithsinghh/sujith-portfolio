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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl text-left border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pb-6 border-b border-white/10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-[#A5B4FC] font-semibold">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            {project.title}
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            {project.tagline || project.shortDescription}
          </p>
          
          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium btn-aurora-secondary px-4 py-2 rounded-xl transition-colors"
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
                className="inline-flex items-center gap-2 text-xs font-mono font-bold btn-aurora-primary px-4 py-2 rounded-xl transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          
          {/* Architecture Details */}
          {project.architectureHighlights && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A5B4FC] flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#818CF8]" />
                <span>System Architecture Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {project.architectureHighlights.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="font-mono text-[#A5B4FC] uppercase text-[10px] tracking-wider block font-bold">
                      Step 0{idx + 1}: {step.title}
                    </span>
                    <p className="text-white/80 leading-relaxed text-[11px]">
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
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Key Implemented Capabilities</span>
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenges & Solutions */}
          {project.challenges && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F472B6] flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-[#F472B6]" />
                <span>Engineering Challenges Solved</span>
              </h4>
              <div className="space-y-2">
                {project.challenges.map((ch, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 leading-relaxed">
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used Grid */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/50">
              Verified Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold btn-aurora-primary rounded-xl transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
