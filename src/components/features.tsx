'use client';

import { BookOpen, Brain, Mic, PenTool, Zap, BarChart3, Map, CalendarDays, Headphones, Camera, Users, Languages } from 'lucide-react';

const features = [
  { icon: Brain, title: 'AI Flashcards', desc: 'Auto-generate flashcards from any document with spaced repetition (SM-2)', color: 'from-purple-500 to-purple-700' },
  { icon: PenTool, title: 'Practice Exams', desc: 'AI creates MCQ exams from your entire course with timed testing and scoring', color: 'from-blue-500 to-blue-700' },
  { icon: Headphones, title: 'AI Podcast', desc: 'Two-host podcast generated from your study materials with custom voices', color: 'from-pink-500 to-pink-700' },
  { icon: Mic, title: 'Voice Tutor', desc: 'Talk to your AI tutor using voice — ask questions, get explanations', color: 'from-cyan-500 to-cyan-700' },
  { icon: Map, title: 'Mind Maps', desc: 'Interactive mind maps auto-generated from document structure', color: 'from-green-500 to-green-700' },
  { icon: CalendarDays, title: 'Study Planner', desc: 'AI creates a personalized weekly study schedule based on your materials', color: 'from-orange-500 to-orange-700' },
  { icon: BarChart3, title: 'Analytics', desc: 'Track your study progress with heatmaps, charts, and mastery scores', color: 'from-yellow-500 to-yellow-700' },
  { icon: Camera, title: 'Snap a Problem', desc: 'Take a photo of any problem — AI solves it step by step', color: 'from-red-500 to-red-700' },
  { icon: BookOpen, title: 'PDF Viewer', desc: 'Full PDF rendering with text selection, zoom, and page navigation', color: 'from-indigo-500 to-indigo-700' },
  { icon: Languages, title: '40+ Languages', desc: 'Generate study materials in any language for global students', color: 'from-teal-500 to-teal-700' },
  { icon: Users, title: 'Spaces', desc: 'Organize courses into spaces with multi-document chat and study tools', color: 'from-violet-500 to-violet-700' },
  { icon: Zap, title: 'Gemini & Copilot', desc: 'Connect your Google AI or GitHub Copilot for powerful AI responses', color: 'from-amber-500 to-amber-700' },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Everything you need to study</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">12 AI-powered tools that transform any document into an interactive learning experience</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 feature-card transition-all duration-300 group cursor-default">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                <f.icon size={22} className="text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative image */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 pointer-events-none">
        <img src="https://lh3.googleusercontent.com/d/1x74pF4phJTfsE_sNMzLSxHvJfmbg8Lw7=w2000" alt="" className="w-full h-full object-cover rounded-3xl" />
      </div>
    </section>
  );
}
