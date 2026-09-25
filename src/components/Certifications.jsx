import React, { useState } from 'react';
import { Award, Sparkles, CheckCircle2, ShieldCheck, ExternalLink, X, Eye, Calendar, User, Hash } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  const getAssetUrl = (path) => {
    if (!path) return '';
    const base = import.meta.env.BASE_URL || '/';
    return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
  };

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
              <div>
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-surface border border-surface-border text-accent-blue-light group-hover:text-blue-300 group-hover:border-accent-blue/30 transition-colors shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
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

                {/* Certificate Specific Details if available */}
                {(cert.certificateId || cert.date || cert.recipient) && (
                  <div className="mt-3.5 p-2.5 rounded-lg bg-surface/70 border border-surface-border/60 text-[11px] font-mono text-text-secondary space-y-1">
                    {cert.recipient && (
                      <div className="flex items-center justify-between">
                        <span className="text-text-subtle">Recipient:</span>
                        <span className="font-medium text-text-primary">{cert.recipient}</span>
                      </div>
                    )}
                    {cert.date && (
                      <div className="flex items-center justify-between">
                        <span className="text-text-subtle">Earned on:</span>
                        <span className="text-text-secondary">{cert.date}</span>
                      </div>
                    )}
                    {cert.certificateId && (
                      <div className="flex items-center justify-between">
                        <span className="text-text-subtle">Certificate ID:</span>
                        <span className="text-accent-blue-light font-bold tracking-wider">{cert.certificateId}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-surface-border/40 flex items-center justify-between text-[11px] font-mono text-text-subtle">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Coursework
                </span>
                
                {cert.image ? (
                  <button
                    type="button"
                    onClick={() => setActiveCertificate(cert)}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-accent-blue/15 text-accent-blue-light hover:bg-accent-blue/25 hover:text-white border border-accent-blue/30 transition-colors font-mono text-[10px]"
                  >
                    <Eye className="w-3 h-3" />
                    <span>View Certificate</span>
                  </button>
                ) : (
                  <span>{cert.issuer.split(' ')[0]}</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Image Modal */}
      {activeCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveCertificate(null)}
        >
          <div
            className="relative bg-surface-card border border-surface-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface">
              <div>
                <h4 className="text-sm font-bold text-text-primary">
                  {activeCertificate.fullTitle || activeCertificate.title}
                </h4>
                <p className="text-xs font-mono text-text-subtle">
                  Issuer: {activeCertificate.issuer} {activeCertificate.certificateId ? `• ID: ${activeCertificate.certificateId}` : ''}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary bg-surface-card hover:bg-surface-hover border border-surface-border transition-colors"
                aria-label="Close certificate preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-background">
              <img
                src={getAssetUrl(activeCertificate.image)}
                alt={`${activeCertificate.title} Certificate`}
                className="max-h-[65vh] w-auto max-w-full rounded-lg shadow-lg border border-surface-border object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-surface-border bg-surface flex items-center justify-between text-xs font-mono text-text-subtle">
              <span>Presented to: {activeCertificate.recipient || 'Chebiyyam Sri Yuktha'}</span>
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="px-3 py-1 rounded bg-surface-card hover:bg-surface-hover border border-surface-border text-text-secondary text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
