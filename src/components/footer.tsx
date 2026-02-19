import { BookOpen, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center">
            <BookOpen size={14} className="text-white" />
          </div>
          <span className="text-sm font-semibold text-white">ReLearn</span>
          <span className="text-xs text-gray-500">&middot; Completely free, forever</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link href="/changelog" className="hover:text-white transition">Changelog</Link>
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms</Link>
          <a href="https://github.com/KNIGHTABDO/relearn" target="_blank" className="hover:text-white transition flex items-center gap-1">
            <Github size={14} /> GitHub
          </a>
          <a href="https://twitter.com/jip7e" target="_blank" className="hover:text-white transition flex items-center gap-1">
            <Twitter size={14} /> Twitter
          </a>
        </div>

        <p className="text-xs text-gray-600">
          Built with AI by students, for students
        </p>
      </div>
    </footer>
  );
}
