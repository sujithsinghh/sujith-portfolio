import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-[#E5E1D8] p-6 sm:p-8 shadow-xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-[#FAF8F5] border border-[#E5E1D8] text-[#5C6069] hover:text-[#121316] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pb-6 border-b border-[#E5E1D8]">
          <span className="font-mono text-xs text-[#9E3514] font-semibold uppercase tracking-wider block">
            {project.period || 'Case Study Details'} · {project.category}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#121316]">
            {project.title}
          </h3>
          <p className="text-sm text-[#5C6069] leading-relaxed">
            {project.tagline || project.summary}
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-btn-dark !py-1.5 !px-3 !text-[11px]"
              >
                <span>View GitHub Repository ↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          
          {/* Summary */}
          {project.summary && (
            <div className="space-y-2">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-[#5C6069]">
                System Overview
              </h4>
              <p className="text-sm text-[#121316] leading-relaxed">
                {project.summary}
              </p>
            </div>
          )}

          {/* Architecture Details */}
          {project.architectureDetails && (
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-[#9E3514] flex items-center gap-1.5 font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>Architectural Components</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {Object.entries(project.architectureDetails).map(([key, val]) => (
                  <div key={key} className="p-3.5 bg-[#FAF8F5] border border-[#E5E1D8] space-y-1">
                    <span className="font-mono text-[#9E3514] uppercase text-[10px] tracking-wider block font-bold">
                      {key}
                    </span>
                    <p className="text-[#5C6069] leading-relaxed">
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bullet Points */}
          {project.bulletPoints && (
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-[#121316] font-semibold">
                Core Engineering Implementations
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5C6069]">
                {project.bulletPoints.map((item, idx) => (
                  <li key={idx} className="pl-4 relative leading-relaxed">
                    <span className="absolute left-0 text-[#9E3514] font-bold">—</span>
                    <strong className="text-[#121316] font-medium">{item.lead}:</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Tag Cloud */}
          {project.technologies && (
            <div className="space-y-2 pt-2 border-t border-[#E5E1D8]">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-[#5C6069]">
                Verified Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] bg-[#FAF8F5] border border-[#E5E1D8] px-2 py-0.5 text-[#5C6069]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#E5E1D8] flex justify-end">
          <button
            onClick={onClose}
            className="editorial-btn-dark !py-1.5 !px-4 !text-xs cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}