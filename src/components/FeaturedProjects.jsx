import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  FolderGit2, 
  Sparkles, 
  Check, 
  Code, 
  Filter, 
  Flame, 
  ShoppingBag, 
  BookOpen, 
  Layers,
  Bot
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

export default function FeaturedProjects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'web', label: 'Full-Stack Web' },
    { id: 'hackathon', label: 'Hackathons' }
  ];

  const filteredProjects = featuredProjects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'ai') {
      return project.id === 'smartbundle-ai' || project.id === 'ruralrise' || project.id === 'foodlink-ai';
    }
    if (filter === 'web') {
      return project.id === 'novelnest' || project.id === 'customcraft' || project.id === 'bugtrace' || project.id === 'foodlink-ai';
    }
    if (filter === 'hackathon') {
      return project.category.includes('Hackathon') || project.category.includes('SIH') || project.id === 'foodlink-ai';
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2.5 h-6 bg-accent-blue rounded-sm"></div>
              <h2 className="text-xs font-mono font-semibold tracking-wider text-accent-blue-light uppercase">
                03. Software & Research
              </h2>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Featured Projects
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-surface-card rounded-lg border border-surface-border self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium font-mono whitespace-nowrap transition-all ${
                  filter === cat.id
                    ? 'bg-accent-blue text-white shadow-sm'
                    : 'text-text-muted hover:text-text-primary hover:bg-surface-hover'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isRuralRise = project.id === 'ruralrise';
            const isNovelNest = project.id === 'novelnest';
            const isSmartBundle = project.id === 'smartbundle-ai';

            return (
              <div
                key={project.id}
                className="bg-surface-card rounded-xl border border-surface-border hover:border-accent-blue/40 shadow-subtle-card transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-blue-glow-sm"
              >
                {/* Card Top / Header */}
                <div className="p-6 sm:p-7 pb-4">
                  {/* Category & Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-xs font-mono font-semibold text-accent-blue-light tracking-wide">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-surface/80 text-text-muted border border-surface-border">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-text-primary group-hover:text-accent-blue-light transition-colors mb-3 leading-snug">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-6 bg-surface/60 rounded-lg p-4 border border-surface-border/50">
                      <div className="text-xs font-mono font-semibold text-text-muted mb-2.5 uppercase tracking-wider">
                        Key Features & Architecture
                      </div>
                      <ul className="space-y-1.5">
                        {project.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                            <span className="text-accent-blue-light font-bold shrink-0 mt-0.5">›</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Badges */}
                  <div className="mb-2">
                    <div className="text-[11px] font-mono text-text-subtle uppercase mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface border border-surface-border text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom / Action Buttons */}
                <div className="px-6 sm:px-7 py-4 bg-surface/80 border-t border-surface-border/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* GitHub Button (only when available) */}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-text-primary bg-surface-card hover:bg-surface-hover border border-surface-border hover:border-accent-blue/50 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="text-xs text-text-subtle font-mono">No public repo</span>
                    )}

                    {/* Live Demo Button (only when available) */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-accent-blue hover:bg-blue-600 transition-all shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-text-subtle">
                    {project.shortTitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
