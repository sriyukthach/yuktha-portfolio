import React from 'react';

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle deep grid pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-35" />

      {/* Very subtle ambient blue glow top left */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />

      {/* Very subtle dark baby-pink glow top right */}
      <div className="absolute top-1/4 -right-40 w-80 h-80 bg-pink-950/15 rounded-full blur-3xl" />

      {/* Deep navy atmospheric glow center bottom */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[400px] bg-slate-900/40 rounded-full blur-3xl" />
    </div>
  );
}
