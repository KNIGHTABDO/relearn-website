'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030014]/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center">
            <BookOpen size={18} className="text-white" />
          </div>
          <span className="text-lg font-bold text-white">ReLearn</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-400 hover:text-white transition">Features</a>
          <a href="#screenshots" className="text-sm text-gray-400 hover:text-white transition">Preview</a>
          <a href="#download" className="text-sm text-gray-400 hover:text-white transition">Download</a>
          <Link href="/changelog" className="text-sm text-gray-400 hover:text-white transition">Changelog</Link>
          <a href="https://github.com/KNIGHTABDO/relearn" target="_blank" className="text-sm text-gray-400 hover:text-white transition">GitHub</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#download" className="download-btn px-5 py-2 rounded-full text-sm font-medium text-white">
            Download Free
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#030014]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-3">
          <a href="#features" className="block text-gray-300 py-2" onClick={() => setOpen(false)}>Features</a>
          <a href="#download" className="block text-gray-300 py-2" onClick={() => setOpen(false)}>Download</a>
          <Link href="/changelog" className="block text-gray-300 py-2" onClick={() => setOpen(false)}>Changelog</Link>
        </div>
      )}
    </nav>
  );
}
