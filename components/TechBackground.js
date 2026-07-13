'use client';

import React from 'react';

export default function TechBackground() {
  return (
    <>
      {/* Background Underlay (z-0 renders behind all components) */}
      <div className="absolute inset-0 bg-slate-50/45 z-0 pointer-events-none" />

      {/* Masked Dot Grid & Ambient Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Radial Masked Fine Dot Grid - Increased opacity color to rgba(15,23,42,0.08) for clear visibility */}
        <div
          className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1.5px,transparent_1.5px)] bg-[size:24px_24px]"
          style={{
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 70%, transparent 100%)"
          }}
        />

        {/* Ambient Blurred Glows */}
        <div className="absolute top-[-15%] right-[-10%] w-[55%] h-[55%] bg-primary/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-15%] w-[55%] h-[55%] bg-teal-500/6 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[25%] w-[40%] h-[40%] bg-orange-500/6 rounded-full blur-[110px]" />
      </div>

      {/* Perspective wireframe grid floor - Increased opacity to z-0 and rgba(15,23,42,0.025) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"
        style={{
          maskImage: "radial-gradient(ellipse at center, white 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, white 70%, transparent 100%)"
        }}
      />
    </>
  );
}
