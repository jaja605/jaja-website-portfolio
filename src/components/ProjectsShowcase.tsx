import { useState } from 'react';
import { ExternalLink, Github, Sparkles, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#07090e] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">
            <span>04. Flagship Projects</span>
            <span className="text-slate-600">·</span>
            <span>Software & Hardware Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Selected Works & Systems.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From custom 3D WebGL renderers to embedded IoT agricultural hypervisors and competitive analytics platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0a0f1d] border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-blue-600/60 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-black/30" />
                  
                  {/* Project Index Badge */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-md text-xs font-mono text-cyan-400">
                    Project #{String(idx + 1).padStart(2, '0')}
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 px-2.5 py-1 bg-blue-600 text-white rounded-md text-xs font-medium flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3 text-sky-200" />
                      <span>Flagship</span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7">
                  {/* Unboxed Metadata Line */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
                    <span>{project.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-blue-400">{project.stack.slice(0, 3).join(', ')}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.tagline}
                  </p>

                  {/* Quantitative Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl mb-6 text-center">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-[11px] sm:text-xs font-mono text-slate-300">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-slate-800/70 mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Inspect Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Deep-Dive Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0f1d] border border-blue-900/50 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1.5">
                  {selectedProject.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Image Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-800 h-52 sm:h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Architectural Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Key Technical Capabilities
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used (Unboxed Text with Separators) */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-blue-300">
                  {selectedProject.stack.map((item, idx) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded">
                        {item}
                      </span>
                      {idx < selectedProject.stack.length - 1 && <span className="text-slate-600">/</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect on GitHub</span>
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
