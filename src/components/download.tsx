'use client';

import { useEffect, useState } from 'react';
import { Download, Monitor, Apple, Terminal, ExternalLink } from 'lucide-react';

const GITHUB_OWNER = 'KNIGHTABDO';
const GITHUB_REPO = 'relearn';

interface Asset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface Release {
  tag_name: string;
  published_at: string;
  assets: Asset[];
}

function formatSize(bytes: number) {
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`;
}

function categorizeAssets(assets: Asset[]) {
  const result: Record<string, Asset[]> = { windows: [], macos: [], linux: [] };
  for (const a of assets) {
    const n = a.name.toLowerCase();
    if (n.endsWith('.msi') || n.endsWith('.exe') || n.includes('windows')) result.windows.push(a);
    else if (n.endsWith('.dmg') || n.includes('macos') || n.includes('darwin')) result.macos.push(a);
    else if (n.endsWith('.appimage') || n.endsWith('.deb') || n.includes('linux')) result.linux.push(a);
  }
  return result;
}

const platforms = [
  { key: 'windows', label: 'Windows', icon: Monitor, desc: '.msi installer' },
  { key: 'macos', label: 'macOS', icon: Apple, desc: '.dmg (ARM & Intel)' },
  { key: 'linux', label: 'Linux', icon: Terminal, desc: '.AppImage / .deb' },
];

export default function DownloadSection() {
  const [release, setRelease] = useState<Release | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`)
      .then(r => r.json())
      .then(data => { if (data.tag_name) setRelease(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const assets = release ? categorizeAssets(release.assets) : null;

  return (
    <section id="download" className="relative py-32 px-6">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Download ReLearn</h2>
          <p className="text-lg text-gray-400">
            {release ? `Latest: ${release.tag_name} • Released ${new Date(release.published_at).toLocaleDateString()}` : 'Free for all platforms'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map(p => {
            const platformAssets = assets?.[p.key] || [];
            return (
              <div key={p.key} className="glass-card rounded-2xl p-8 text-center hover:border-brand-purple/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <p.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{p.label}</h3>
                <p className="text-sm text-gray-400 mb-6">{p.desc}</p>

                {loading ? (
                  <div className="h-12 rounded-xl bg-white/5 animate-pulse" />
                ) : platformAssets.length > 0 ? (
                  <div className="space-y-3">
                    {platformAssets.map((a, i) => (
                      <a key={i} href={a.browser_download_url}
                         className="download-btn flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white w-full">
                        <Download size={16} />
                        {a.name.split('.').pop()?.toUpperCase()} ({formatSize(a.size)})
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-gray-500 py-3">Coming soon</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <a href={`https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases`}
             target="_blank"
             className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
            View all releases on GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
