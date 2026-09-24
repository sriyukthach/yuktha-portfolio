import React from 'react';
import { Trophy, Calendar, Award, Code, Users, Sparkles, Building2 } from 'lucide-react';
import { hackathonsAndAchievements } from '../data/portfolioData';

export default function Hackathons() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2.5 h-6 bg-accent-blue rounded-sm"></div>
          <div>
            <h2 className="text-xs font-mono font-semibold tracking-wider text-accent-blue-light uppercase">
              05. Competitions & Engagements
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Hackathons & Achievements
            </h3>
          </div>
        </div>

        <p className="text-text-muted text-sm sm:text-base max-w-2xl mb-10">
          Fast-paced problem solving, competitive coding contests, and collaborative innovation sprints.
        </p>

        {/* Timeline / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathonsAndAchievements.map((item) => (
            <div
              key={item.id}
              className="bg-surface-card rounded-xl p-6 border border-surface-border hover:border-accent-blue/40 transition-all duration-200 shadow-subtle-card flex flex-col justify-between"
            >
              <div>
                {/* Header: Date & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-text-muted flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-blue-light" />
                    {item.date}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950/50 text-blue-300 border border-blue-800/40">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-base font-bold text-text-primary mb-1">
                  {item.title}
                </h4>

                {/* Organizers */}
                <div className="text-xs font-mono text-accent-blue-light mb-4 flex items-center gap-1.5">
                  <Building2 className="w-3 h-3 text-text-subtle" />
                  <span>{item.organizers}</span>
                </div>

                {/* Highlight / Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {item.highlight}
                </p>
              </div>

              {/* Linked Project tag if available */}
              {item.projectLinked && (
                <div className="mt-4 pt-3 border-t border-surface-border/50 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-subtle">Built Project:</span>
                  <span className="text-text-primary font-semibold">{item.projectLinked}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
