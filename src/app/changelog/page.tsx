'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, ArrowLeft, Tag, Calendar, Package, ExternalLink } from 'lucide-react';

interface Release {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  assets: { name: string; browser_download_url: string; size: number }[];
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function parseMarkdown(text: string) {
  // Simple markdown to HTML for changelog bodies
  return text
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-white mt-6 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-white mt-8 mb-4">$2</h2>')
    .replace(/^- (.+)$/gm, '<li class="text-gray-300 ml-4 mb-1">• $1</li>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-white/10 text-brand-purple text-sm font-mono">$1</code>')
    .replace(/\n\n/g, '<br/><br/>');
}

export default function ChangelogPage() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/repos/KNIGHTABDO/relearn/releases?per_page=50')
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setReleases(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-[#030014]">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-[#030014]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center">
              <BookOpen size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold text-white">ReLearn</span>
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition flex items-center gap-1">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Changelog</h1>
        <p className="text-lg text-gray-400 mb-16">All releases and updates for ReLearn desktop app</p>

        {loading ? (
          <div className="space-y-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="glass-card rounded-2xl p-8 animate-pulse">
                <div className="h-6 w-32 bg-white/10 rounded mb-4" />
                <div className="h-4 w-64 bg-white/5 rounded mb-6" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-white/5 rounded" />
                  <div className="h-3 w-3/4 bg-white/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : releases.length === 0 ? (
          <div className="glass-card rounded-2xl p-12 text-center">
            <Package size={48} className="text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No releases yet. Stay tuned!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {releases.map((release, idx) => (
              <article key={release.id} className="glass-card rounded-2xl p-8 hover:border-brand-purple/20 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-semibold">
                    <Tag size={14} />
                    {release.tag_name}
                  </span>
                  {idx === 0 && (
                    <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                      Latest
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    {formatDate(release.published_at)}
                  </span>
                </div>

                {release.name && release.name !== release.tag_name && (
                  <h2 className="text-xl font-bold text-white mb-4">{release.name}</h2>
                )}

                {release.body && (
                  <div
                    className="prose prose-invert max-w-none text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(release.body) }}
                  />
                )}

                {/* Assets */}
                {release.assets.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Downloads</p>
                    <div className="flex flex-wrap gap-2">
                      {release.assets.map(a => (
                        <a key={a.name} href={a.browser_download_url}
                           className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-gray-300 transition">
                          <Package size={12} />
                          {a.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <a href={release.html_url} target="_blank"
                   className="inline-flex items-center gap-1 mt-4 text-xs text-gray-500 hover:text-gray-300 transition">
                  View on GitHub <ExternalLink size={12} />
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
