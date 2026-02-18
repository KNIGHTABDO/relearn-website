'use client';

import { useEffect, useState } from 'react';
import { Download, ArrowDown, Sparkles } from 'lucide-react';

const GITHUB_OWNER = 'KNIGHTABDO';
const GITHUB_REPO = 'relearn';

interface Release {
  tag_name: string;
  assets: { name: string; browser_download_url: string; size: number }[];
}

function getOS() {
  if (typeof window === 'undefined') return 'windows';
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('mac')) return 'macos';
  if (ua.includes('linux')) return 'linux';
  return 'windows';
}

function getAssetForOS(assets: Release['assets'], os: string) {
  const patterns: Record<string, string[]> = {
    windows: ['.msi', '.exe'],
    macos: ['.dmg'],
    linux: ['.AppImage', '.deb'],
  };
  for (const ext of patterns[os] || patterns.windows) {
    const asset = assets.find(a => a.name.endsWith(ext));
    if (asset) return asset;
  }
  return assets[0];
}

export default function Hero() {
  const [release, setRelease] = useState<Release | null>(null);
  const [os, setOs] = useState('windows');
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    setOs(getOS());
    fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`)
      .then(r => r.json())
      .then(data => { if (data.tag_name) setRelease(data); })
      .catch(() => {});
  }, []);

  const asset = release ? getAssetForOS(release.assets, os) : null;
  const osLabel = os === 'macos' ? 'macOS' : os === 'linux' ? 'Linux' : 'Windows';

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-16">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-brand-cyan/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-slide-up">
          <Sparkles size={14} className="text-brand-purple" />
          <span className="text-xs font-medium text-gray-300">100% Free &middot; No Account Required &middot; Your Data Stays Local</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-white">Study Smarter</span>
          <br />
          <span className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan bg-clip-text text-transparent">
            with AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Upload your PDFs, videos, or notes. Get AI-generated flashcards, quizzes, mind maps, podcasts, study plans, and more. All on your desktop, completely free.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {asset ? (
            <a href={asset.browser_download_url} className="download-btn px-8 py-4 rounded-2xl text-lg font-semibold text-white flex items-center gap-3 group">
              <Download size={22} className="group-hover:animate-bounce" />
              Download for {osLabel}
              <span className="text-sm opacity-70">{release?.tag_name}</span>
            </a>
          ) : (
            <a href="#download" className="download-btn px-8 py-4 rounded-2xl text-lg font-semibold text-white flex items-center gap-3">
              <Download size={22} />
              Download Free
            </a>
          )}
          <a href="https://github.com/KNIGHTABDO/relearn" target="_blank"
             className="px-8 py-4 rounded-2xl text-lg font-medium text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/5 transition flex items-center gap-2">
            View on GitHub
          </a>
        </div>

        {/* Platform tags */}
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <span>Windows</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span>macOS (ARM + Intel)</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span>Linux</span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={20} className="text-gray-600" />
        </div>
      </div>
    </section>
  );
}
