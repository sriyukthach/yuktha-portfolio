import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border/70 bg-background-secondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-mono text-sm font-bold text-text-primary tracking-wider">
            {personalInfo.brand}
          </span>
          <span className="hidden sm:inline text-surface-border">|</span>
          <p className="text-xs text-text-muted font-mono">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & Developed with React & Tailwind.
          </p>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-muted hover:text-text-primary rounded-lg bg-surface hover:bg-surface-hover border border-surface-border transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-muted hover:text-accent-blue-light rounded-lg bg-surface hover:bg-surface-hover border border-surface-border transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 text-text-muted hover:text-accent-blue-light rounded-lg bg-surface hover:bg-surface-hover border border-surface-border transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 ml-2 text-xs font-mono text-text-muted hover:text-accent-blue-light bg-surface hover:bg-surface-hover border border-surface-border rounded-lg flex items-center gap-1.5 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
