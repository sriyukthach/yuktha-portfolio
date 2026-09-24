import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section for scroll spy
      const sections = ['contact', 'education', 'certifications', 'experience', 'projects', 'skills', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-surface-border/60 py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-1"
            aria-label="Sri Yuktha Portfolio Home"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center group-hover:border-accent-blue/50 transition-colors">
              <span className="font-mono text-sm font-bold text-accent-blue-light group-hover:text-white transition-colors">
                Y
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono tracking-wider text-sm font-bold text-text-primary group-hover:text-accent-blue-light transition-colors">
                {personalInfo.brand}
              </span>
              <span className="text-[10px] text-text-subtle font-mono tracking-tight hidden sm:inline-block">
                AI/ML & Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-card/60 p-1 rounded-full border border-surface-border/50 backdrop-blur-sm" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-accent-blue/20 text-accent-blue-light border border-accent-blue/40 shadow-sm'
                      : 'text-text-muted hover:text-text-primary hover:bg-surface-hover/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Social Quick Links & CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-text-primary hover:bg-surface-card rounded-lg border border-transparent hover:border-surface-border transition-all"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent-blue-light hover:bg-surface-card rounded-lg border border-transparent hover:border-surface-border transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="ml-1 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-text-primary bg-surface-card hover:bg-surface-hover border border-surface-border hover:border-accent-blue/40 rounded-lg transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-accent-blue-light" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-muted hover:text-text-primary hover:bg-surface-card rounded-lg border border-surface-border/50 focus:outline-none focus:ring-2 focus:ring-accent-blue"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 pt-2 bg-background-secondary/95 border-b border-surface-border backdrop-blur-xl shadow-2xl">
          <nav className="flex flex-col space-y-1.5 py-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-blue/15 text-accent-blue-light border-l-2 border-accent-blue'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-card'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-surface-border flex items-center justify-around">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-text-muted hover:text-text-primary"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-text-muted hover:text-accent-blue-light"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-accent-blue-light bg-accent-blue/10 rounded-md"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
