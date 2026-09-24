import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Terminal, Code, Cpu, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-surface-border text-xs font-mono text-text-secondary shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
            </span>
            <span className="text-text-muted">B.Tech CSE (AI & ML)</span>
            <span className="text-surface-border">|</span>
            <span className="text-accent-blue-light font-medium">CGPA 9.70</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-200 to-slate-100">Sri Yuktha</span>.
            </h1>
            <div className="flex items-center gap-2.5 pt-1">
              <span className="h-0.5 w-6 bg-accent-blue rounded-full"></span>
              <p className="text-lg sm:text-xl font-medium text-accent-blue-light font-mono">
                {personalInfo.heroRole}
              </p>
            </div>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl font-normal">
            {personalInfo.heroSupportingText}
          </p>

          {/* Action Buttons Grid */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            {/* Primary Action */}
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-5 py-3 rounded-lg text-sm font-semibold bg-accent-blue hover:bg-blue-600 text-white transition-all shadow-md shadow-blue-500/10 flex items-center justify-center gap-2 group"
            >
              <span>Explore My Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="px-5 py-3 rounded-lg text-sm font-semibold bg-surface-card hover:bg-surface-hover text-text-primary border border-surface-border hover:border-accent-blue/50 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-accent-blue-light" />
              <span>Contact Me</span>
            </a>

            {/* Social Outbound Buttons */}
            <div className="flex items-center gap-2.5 pt-1 sm:pt-0">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-card hover:bg-surface-hover text-text-muted hover:text-text-primary border border-surface-border hover:border-surface-border/80 transition-all flex items-center gap-1.5 text-xs font-medium"
                aria-label="Sri Yuktha GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-card hover:bg-surface-hover text-text-muted hover:text-accent-blue-light border border-surface-border hover:border-surface-border/80 transition-all flex items-center gap-1.5 text-xs font-medium"
                aria-label="Sri Yuktha LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Subtext Info */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-text-subtle font-mono border-t border-surface-border/40 w-full">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Hyderabad, Telangana, India
            </span>
            <span>•</span>
            <span>BVRIT Hyderabad</span>
            <span>•</span>
            <span>Full-Stack Trainee @ NxtWave</span>
          </div>
        </div>

        {/* Right Column: Sleek Abstract Technical Visual */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            
            {/* Outer stylized card framing */}
            <div className="relative rounded-2xl bg-surface-card/90 border border-surface-border p-6 shadow-subtle-card backdrop-blur-sm overflow-hidden">
              
              {/* Subtle top decoration bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-text-muted">
                  <Terminal className="w-3.5 h-3.5 text-accent-blue-light" />
                  <span>sriyuktha@workstation:~</span>
                </div>
              </div>

              {/* Code/Architecture Abstract Display */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* Tech node block 1: AI / ML Pipeline */}
                <div className="p-3 rounded-lg bg-surface/80 border border-surface-border/70 hover:border-accent-blue/30 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-accent-blue-light font-semibold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      Core Focus
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800/40">
                      B.Tech AI & ML
                    </span>
                  </div>
                  <p className="text-text-secondary text-[11px] leading-relaxed">
                    Python • Machine Learning • Prompt Engineering • Generative AI
                  </p>
                </div>

                {/* Tech node block 2: Web Engineering */}
                <div className="p-3 rounded-lg bg-surface/80 border border-surface-border/70 hover:border-accent-blue/30 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-text-primary font-semibold flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-sky-400" />
                      Web Development
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/80 text-text-muted border border-surface-border">
                      Full-Stack
                    </span>
                  </div>
                  <p className="text-text-secondary text-[11px] leading-relaxed">
                    React • TypeScript • FastAPI • Express.js • Tailwind CSS • SQLite
                  </p>
                </div>

                {/* Tech node block 3: Recent Highlights */}
                <div className="p-3 rounded-lg bg-surface/80 border border-surface-border/70 hover:border-pink-500/20 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-pink-300 font-semibold flex items-center gap-1.5 text-[11px]">
                      <Sparkles className="w-3 h-3 text-pink-400" />
                      Recent Hackathons & Innovation
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-pink-950/40 text-pink-300 border border-pink-900/40">
                      2026
                    </span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-text-primary font-medium">SmartBundle AI</span>
                      <span className="text-accent-blue-light font-mono text-[10px]">DEMUX 3.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-primary font-medium">PyroSentinel-GIS</span>
                      <span className="text-pink-300 font-mono text-[10px]">SIH 2026</span>
                    </div>
                  </div>
                </div>

                {/* Mini console output visual */}
                <div className="pt-2 px-1 flex items-center justify-between text-[11px] text-text-subtle font-mono">
                  <span className="text-emerald-400">$ ready_for_innovation --status=active</span>
                  <span className="w-2 h-4 bg-accent-blue animate-pulse"></span>
                </div>

              </div>

            </div>

            {/* Delicate subtle accent dot */}
            <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-accent-pink-subtle/20 border border-pink-500/30 blur-[1px]"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
