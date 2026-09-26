import { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-neutral-950 border border-white/20 rounded-[2%] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/60">
          <div className="flex items-center gap-3">
            <span className="text-[#a3a3a3] text-[14px] font-mono">{project.year}</span>
            <span className="text-white/40">/</span>
            <h3 className="text-white text-[18px] font-bold uppercase tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="btn-style-1 px-2 py-1 text-white hover:text-[#a3a3a3] transition-colors font-mono text-[14px]"
            aria-label="Close Case Study"
          >
            CLOSE [ESC ✕]
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Main Visual */}
          <div className="overflow-hidden rounded-[2%] border border-white/10 aspect-[16/9] w-full bg-black">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Title & Subtitle */}
          <div className="space-y-3">
            <h2 className="text-[32px] sm:text-[48px] font-bold text-white uppercase tracking-tight leading-none">
              {project.title}
            </h2>
            <p className="text-[18px] sm:text-[20px] text-[#a3a3a3] leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-white/10 text-[14px]">
            <div>
              <span className="text-[#a3a3a3] uppercase block font-medium">Client</span>
              <span className="text-white font-mono mt-1 block">{project.client}</span>
            </div>
            <div>
              <span className="text-[#a3a3a3] uppercase block font-medium">Role</span>
              <span className="text-white font-mono mt-1 block">{project.role}</span>
            </div>
            <div>
              <span className="text-[#a3a3a3] uppercase block font-medium">Timeline</span>
              <span className="text-white font-mono mt-1 block">{project.timeline}</span>
            </div>
            <div>
              <span className="text-[#a3a3a3] uppercase block font-medium">Status</span>
              <span className="text-emerald-400 font-mono mt-1 block">Shipped &amp; Live</span>
            </div>
          </div>

          {/* In-Depth Case Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[16px] leading-[26px]">
            <div className="space-y-3">
              <span className="h1-sub text-[#a3a3a3] text-[14px] font-medium uppercase">
                The Challenge
              </span>
              <p className="text-[#d6d6d6]">{project.challenge}</p>
            </div>

            <div className="space-y-3">
              <span className="h1-sub text-[#a3a3a3] text-[14px] font-medium uppercase">
                The Solution
              </span>
              <p className="text-[#d6d6d6]">{project.solution}</p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <span className="h1-sub text-[#a3a3a3] text-[14px] font-medium uppercase">
              Key Deliverables &amp; Artifacts
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-[2%] text-[#d6d6d6] text-[14px]"
                >
                  <span className="text-white font-mono text-[12px]">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <div className="p-6 bg-white/5 border border-white/15 rounded-[2%] space-y-2">
            <span className="text-[12px] font-mono uppercase tracking-wider text-[#a3a3a3]">
              Quantified Impact
            </span>
            <p className="text-white text-[18px] font-medium leading-relaxed">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-black flex items-center justify-between">
          <span className="text-[#a3a3a3] text-[12px] uppercase font-mono">
            CYNTHIA UGWU ARCHIVE
          </span>
          <button
            onClick={onClose}
            className="badge-pill py-1.5 px-6 text-[14px] cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
