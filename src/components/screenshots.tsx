'use client';

import { useState } from 'react';

const screenshots = [
  { src: 'https://lh3.googleusercontent.com/d/1k6Tiqc__iL_JJhGMpOCs0sImCFy7BCGt=w2000', label: 'AI-Powered Learning' },
  { src: 'https://lh3.googleusercontent.com/d/13QvyLBzdbmjYaYFxQ92jR-U12NXl71cQ=w2000', label: 'Smart Dashboard' },
  { src: 'https://lh3.googleusercontent.com/d/1o6ZR5UTIGcTyBUpLwv5FwIYSFnuuRPvO=w2000', label: 'Transform Your Study' },
];

export default function Screenshots() {
  const [active, setActive] = useState(0);

  return (
    <section id="screenshots" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">See it in action</h2>
          <p className="text-lg text-gray-400">Beautiful, intuitive interface designed for focused studying</p>
        </div>

        {/* Main image */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-8 aspect-video">
          <img
            src={screenshots[active].src}
            alt={screenshots[active].label}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
        </div>

        {/* Thumbnails */}
        <div className="flex items-center justify-center gap-4">
          {screenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                active === i ? 'border-brand-purple scale-105' : 'border-white/10 opacity-50 hover:opacity-80'
              }`}
            >
              <img src={s.src} alt={s.label} className="w-32 h-20 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
