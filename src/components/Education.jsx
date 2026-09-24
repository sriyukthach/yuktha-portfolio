import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2.5 h-6 bg-accent-blue rounded-sm"></div>
          <div>
            <h2 className="text-xs font-mono font-semibold tracking-wider text-accent-blue-light uppercase">
              07. Academic Journey
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Education & Training
            </h3>
          </div>
        </div>

        <p className="text-text-muted text-sm sm:text-base max-w-2xl mb-10">
          Academic milestones and specialized full-stack software development training.
        </p>

        {/* Education Timeline */}
        <div className="relative border-l border-surface-border ml-3 md:ml-6 space-y-8">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8 group">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface-card border-2 border-accent-blue group-hover:bg-accent-blue group-hover:scale-110 transition-all shadow-sm"></div>

              {/* Card */}
              <div className="bg-surface-card rounded-xl p-6 border border-surface-border hover:border-accent-blue/40 transition-all shadow-subtle-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-text-primary group-hover:text-accent-blue-light transition-colors">
                    {edu.institution}
                  </h4>
                  <span className="text-xs font-mono text-text-muted flex items-center gap-1.5 self-start sm:self-auto bg-surface px-2.5 py-1 rounded border border-surface-border">
                    <Calendar className="w-3.5 h-3.5 text-accent-blue-light" />
                    {edu.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-accent-blue-light font-mono">
                    {edu.degree}
                  </span>
                  <span className="text-surface-border">•</span>
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-950/60 text-blue-200 border border-blue-800/50">
                    {edu.score}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
