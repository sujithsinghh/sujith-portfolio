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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#13161F] rounded-2xl p-6 sm:p-8 shadow-2xl text-left border border-[#202534]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#0C0E12] border border-[#202534] text-[#949EAE] hover:text-[#F3F4F6] hover:border-[#384055] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pb-6 border-b border-[#202534]">
          <span className="inline-block px-2.5 py-1 rounded bg-[#0C0E12] border border-[#202534] text-xs font-mono text-[#F59E0B] font-semibold">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F4F6]">
            {project.title}
          </h3>
          <p className="text-sm text-[#949EAE] leading-relaxed">
            {project.tagline || project.shortDescription}
          </p>
          
          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs !py-2 !px-3.5 inline-flex items-center gap-2"
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
                className="btn-primary text-xs !py-2 !px-3.5 inline-flex items-center gap-2"
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
          {project.architectureDetails && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Architectural Breakdown</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {Object.entries(project.architectureDetails).map(([key, value]) => (
                  <div key={key} className="p-3.5 rounded-lg bg-[#0C0E12] border border-[#202534] space-y-1">
                    <span className="font-mono text-[#F59E0B] uppercase text-[10px] tracking-wider block font-bold">
                      {key}
                    </span>
                    <p className="text-[#949EAE] leading-relaxed text-[11px]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features List */}
          {project.keyFeatures && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#10B981] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Implemented System Capabilities</span>
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#949EAE]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 shrink-0"></span>
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenges & Solutions */}
          {project.challenges && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Engineering Challenges Handled</span>
              </h4>
              <div className="space-y-2">
                {project.challenges.map((ch, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#0C0E12] border border-[#202534] text-xs text-[#949EAE] leading-relaxed">
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used Grid */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#949EAE]">
              Verified Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#0C0E12] border border-[#202534] text-xs font-mono text-[#949EAE]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#202534] flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary text-xs !py-2 !px-4"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}