import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ReLearn — AI Study Platform for Students',
  description: 'Transform your study materials into flashcards, quizzes, mind maps, podcasts, and more. Free desktop app powered by AI. Download for Windows, macOS, and Linux.',
  openGraph: {
    title: 'ReLearn — AI Study Platform',
    description: 'Transform study materials into interactive learning experiences with AI.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
