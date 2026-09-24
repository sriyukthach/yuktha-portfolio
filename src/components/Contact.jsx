import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-surface-border text-xs font-mono text-accent-blue-light mb-6">
          <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
          <span>Get in Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
          Let's build something.
        </h2>

        <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
          I'm always interested in learning, building, and exploring new ideas.
        </p>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-12">
          
          {/* Email Box */}
          <div className="bg-surface-card rounded-xl p-5 border border-surface-border hover:border-accent-blue/40 transition-all flex flex-col justify-between shadow-subtle-card">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-surface border border-surface-border text-accent-blue-light">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 text-text-muted hover:text-text-primary rounded bg-surface hover:bg-surface-hover border border-surface-border text-xs font-mono flex items-center gap-1 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">Email</h4>
              <p 
                className="text-xs sm:text-[13px] lg:text-sm font-semibold text-text-primary break-all sm:break-words lg:whitespace-nowrap lg:truncate xl:whitespace-normal"
                title={personalInfo.email}
              >
                {personalInfo.email}
              </p>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-4 pt-3 border-t border-surface-border/50 text-xs font-mono text-accent-blue-light hover:underline flex items-center gap-1"
            >
              <span>Send direct email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* LinkedIn Box */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-card rounded-xl p-5 border border-surface-border hover:border-accent-blue/40 transition-all flex flex-col justify-between group shadow-subtle-card"
          >
            <div>
              <div className="p-2 w-fit rounded-lg bg-surface border border-surface-border text-accent-blue-light mb-3 group-hover:border-accent-blue/40 transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">LinkedIn</h4>
              <p className="text-sm font-semibold text-text-primary group-hover:text-accent-blue-light transition-colors">
                Sri Yuktha Ch
              </p>
              <p className="text-xs text-text-subtle mt-1 font-mono">Connect professionally</p>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-border/50 text-xs font-mono text-accent-blue-light flex items-center gap-1">
              <span>View Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* GitHub Box */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-card rounded-xl p-5 border border-surface-border hover:border-accent-blue/40 transition-all flex flex-col justify-between group shadow-subtle-card"
          >
            <div>
              <div className="p-2 w-fit rounded-lg bg-surface border border-surface-border text-text-primary mb-3 group-hover:border-accent-blue/40 transition-colors">
                <Github className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">GitHub</h4>
              <p className="text-sm font-semibold text-text-primary group-hover:text-accent-blue-light transition-colors">
                @sriyukthach
              </p>
              <p className="text-xs text-text-subtle mt-1 font-mono">Explore repositories</p>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-border/50 text-xs font-mono text-accent-blue-light flex items-center gap-1">
              <span>View Code</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

        </div>

        {/* Location & Availability note */}
        <div className="text-xs font-mono text-text-subtle">
          Based in Hyderabad, Telangana, India • Open to hackathons, internships, and collaborative projects.
        </div>

      </div>
    </section>
  );
}
