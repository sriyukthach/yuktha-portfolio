import React from 'react';
import { Sparkles, GraduationCap, Code2, Trophy, ArrowUpRight, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2.5 h-6 bg-accent-blue rounded-sm"></div>
          <div>
            <h2 className="text-xs font-mono font-semibold tracking-wider text-accent-blue-light uppercase">
              01. Background & Perspective
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              About Me
            </h3>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main About Statement Card */}
          <div className="lg:col-span-7 bg-surface-card border border-surface-border rounded-xl p-6 sm:p-8 shadow-subtle-card flex flex-col justify-between">
            <div className="space-y-4 text-text-secondary leading-relaxed text-base sm:text-lg">
              <p>
                {personalInfo.about}
              </p>
            </div>

            {/* Core Values / Focus Pillars */}
            <div className="mt-8 pt-6 border-t border-surface-border/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-surface/50 border border-surface-border/40">
                <div className="text-xs font-mono text-accent-blue-light font-semibold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Curiosity First
                </div>
                <div className="text-xs text-text-muted">
                  Turning exploratory ideas into functional, real-world tools.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface/50 border border-surface-border/40">
                <div className="text-xs font-mono text-text-primary font-semibold mb-1 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-sky-400" />
                  Hands-On Code
                </div>
                <div className="text-xs text-text-muted">
                  Building full-stack apps and testing AI workflows end-to-end.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface/50 border border-surface-border/40">
                <div className="text-xs font-mono text-pink-300 font-semibold mb-1 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-pink-400" />
                  Hackathon Drive
                </div>
                <div className="text-xs text-text-muted">
                  Thriving in collaborative, fast-paced problem solving sprints.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics / Academic Snapshot Card */}
          <div className="lg:col-span-5 bg-surface-card border border-surface-border rounded-xl p-6 sm:p-8 shadow-subtle-card flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-mono font-semibold text-text-muted uppercase tracking-wider mb-6 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent-blue-light" />
                Academic & Training Snapshot
              </h4>

              <div className="space-y-4">
                {/* Metric Item 1 */}
                <div className="flex items-start justify-between p-3.5 rounded-lg bg-surface/70 border border-surface-border/60">
                  <div>
                    <div className="text-xs font-mono text-text-muted">Undergraduate Degree</div>
                    <div className="text-sm font-semibold text-text-primary">B.Tech – CSE (AI & ML)</div>
                    <div className="text-xs text-text-subtle">BVRIT Hyderabad (2025 – Present)</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-blue-950/80 text-accent-blue-light font-mono text-xs font-bold border border-blue-800/40">
                      9.70 CGPA
                    </span>
                  </div>
                </div>

                {/* Metric Item 2 */}
                <div className="flex items-start justify-between p-3.5 rounded-lg bg-surface/70 border border-surface-border/60">
                  <div>
                    <div className="text-xs font-mono text-text-muted">Industry Readiness Trainee</div>
                    <div className="text-sm font-semibold text-text-primary">Full Stack Web Development</div>
                    <div className="text-xs text-text-subtle">NxtWave CCBP 4.0 Academy</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-800 text-text-secondary font-mono text-[11px] border border-surface-border">
                      Active
                    </span>
                  </div>
                </div>

                {/* Metric Item 3 */}
                <div className="flex items-start justify-between p-3.5 rounded-lg bg-surface/70 border border-surface-border/60">
                  <div>
                    <div className="text-xs font-mono text-text-muted">Location & Base</div>
                    <div className="text-sm font-semibold text-text-primary">Hyderabad, Telangana</div>
                    <div className="text-xs text-text-subtle">Open to collaborations & projects</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-300 font-mono text-[11px] border border-emerald-800/40">
                      India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border/50 text-xs text-text-subtle font-mono flex items-center justify-between">
              <span>Goal: Bridging AI algorithms with practical interfaces</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
