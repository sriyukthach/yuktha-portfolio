import React from 'react';
import { Github, Folder, Code, Terminal, Sparkles } from 'lucide-react';
import { moreProjects } from '../data/portfolioData';

export default function MoreProjects() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2.5 h-6 bg-accent-pink-subtle rounded-sm"></div>
          <div>
            <h2 className="text-xs font-mono font-semibold tracking-wider text-pink-300 uppercase">
              04. Additional Works
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              More Projects
            </h3>
          </div>
        </div>

        {/* Small Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moreProjects.map((project, index) => (
            <div
              key={index}
              className="bg-surface-card rounded-xl p-6 border border-surface-border hover:border-pink-500/30 transition-all duration-200 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Top Row: Icon & Github */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-surface border border-surface-border text-pink-300 group-hover:border-pink-500/40 transition-colors">
                    <Folder className="w-4 h-4" />
                  </div>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface rounded-md border border-transparent hover:border-surface-border transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>

                {/* Title */}
                <h4 className="text-base font-bold text-text-primary mb-1.5 group-hover:text-pink-300 transition-colors">
                  {project.title}
                </h4>

                {/* Category if any */}
                {project.category && (
                  <div className="text-[11px] font-mono text-text-muted mb-3">
                    {project.category}
                  </div>
                )}

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Technologies at bottom */}
              <div className="pt-3 border-t border-surface-border/50 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-surface-border text-text-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
