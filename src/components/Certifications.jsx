import React from 'react';
import { Award, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2.5 h-6 bg-accent-blue rounded-sm"></div>
          <div>
            <h2 className="text-xs font-mono font-semibold tracking-wider text-accent-blue-light uppercase">
              06. Continuous Learning
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Certifications & Qualifications
            </h3>
          </div>
        </div>

        <p className="text-text-muted text-sm sm:text-base max-w-2xl mb-10">
          Industry courses, AI fundamentals, and foundational technology certifications.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-surface-card rounded-xl p-5 border border-surface-border hover:border-accent-blue/40 transition-all duration-200 flex flex-col justify-between group shadow-sm"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-surface border border-surface-border text-accent-blue-light group-hover:text-blue-300 group-hover:border-accent-blue/30 transition-colors shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-surface-border text-text-muted mb-1.5">
                    {cert.category}
                  </span>
                  <h4 className="text-sm font-semibold text-text-primary group-hover:text-accent-blue-light transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono text-text-subtle mt-1.5">
                    Issuer: <span className="text-text-secondary">{cert.issuer}</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-surface-border/40 flex items-center justify-between text-[11px] font-mono text-text-subtle">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Coursework
                </span>
                <span>{cert.issuer.split(' ')[0]}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
