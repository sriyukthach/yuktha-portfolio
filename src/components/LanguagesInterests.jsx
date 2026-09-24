import React from 'react';
import { Globe, Heart, Brain, Code, GitPullRequest, Crosshair, Activity } from 'lucide-react';
import { languages, interests } from '../data/portfolioData';

const interestIconMap = {
  Brain: Brain,
  Code: Code,
  GitPullRequest: GitPullRequest,
  Crosshair: Crosshair,
  Activity: Activity
};

export default function LanguagesInterests() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Languages Card */}
          <div className="bg-surface-card/70 rounded-xl p-6 border border-surface-border/80">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-lg bg-surface border border-surface-border text-accent-blue-light">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary">Languages</h4>
                <p className="text-xs text-text-subtle font-mono">Communication & Collaboration</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-surface border border-surface-border text-text-secondary"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Interests Card */}
          <div className="bg-surface-card/70 rounded-xl p-6 border border-surface-border/80">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-lg bg-surface border border-surface-border text-pink-300">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary">Interests & Pursuits</h4>
                <p className="text-xs text-text-subtle font-mono">Technical & Recreational</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {interests.map((item) => {
                const IconComponent = interestIconMap[item.icon] || Code;
                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-surface border border-surface-border text-text-secondary hover:border-pink-500/30 transition-colors"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-text-muted" />
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
