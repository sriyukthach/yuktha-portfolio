import React from 'react';
import { 
  BrainCircuit, 
  Code2, 
  Terminal, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Layers,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map string icon names to Lucide components
const iconMap = {
  BrainCircuit: BrainCircuit,
  Code2: Code2,
  Terminal: Terminal,
  Database: Database,
  Wrench: Wrench,
  Cpu: Cpu
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2.5 h-6 bg-accent-blue rounded-sm"></div>
          <div>
            <h2 className="text-xs font-mono font-semibold tracking-wider text-accent-blue-light uppercase">
              02. Technical Toolkit
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Skills & Technologies
            </h3>
          </div>
        </div>

        <p className="text-text-muted text-sm sm:text-base max-w-2xl mb-10">
          Technologies and tools I have actively worked with through academic coursework, hackathons, and practical software projects.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryGroup) => {
            const IconComponent = iconMap[categoryGroup.iconName] || Layers;
            const isPinkAccent = categoryGroup.accent === 'pink';

            return (
              <div
                key={categoryGroup.category}
                className={`bg-surface-card rounded-xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                  isPinkAccent ? 'glow-pink-border' : 'glow-border'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg ${
                        isPinkAccent 
                          ? 'bg-pink-950/30 text-pink-300 border border-pink-900/40' 
                          : 'bg-blue-950/40 text-accent-blue-light border border-blue-800/40'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-semibold text-text-primary text-base">
                        {categoryGroup.category}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-text-subtle mb-4 leading-relaxed">
                    {categoryGroup.description}
                  </p>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {categoryGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-surface/90 text-text-secondary border border-surface-border/80 hover:border-accent-blue/40 hover:text-text-primary transition-colors"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          isPinkAccent ? 'bg-pink-400/80' : 'bg-accent-blue'
                        }`} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle indicator bar */}
                <div className="mt-6 pt-3 border-t border-surface-border/40 flex items-center justify-between text-[11px] text-text-subtle font-mono">
                  <span>{categoryGroup.skills.length} competencies</span>
                  <span className="text-accent-blue-light">Hands-on</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency note */}
        <div className="mt-8 p-4 rounded-lg bg-surface-card/60 border border-surface-border/50 flex items-start gap-3 text-xs text-text-muted">
          <CheckCircle2 className="w-4 h-4 text-accent-blue-light shrink-0 mt-0.5" />
          <span>
            <strong>Practiced Application:</strong> Technologies listed reflect direct implementation in project repositories, coursework, and competitive hackathon prototypes.
          </span>
        </div>

      </div>
    </section>
  );
}
