import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — ReLearn",
  description: "Terms of service for using ReLearn.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          ReLearn
        </Link>
      </nav>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: February 19, 2026</p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Acceptance</h2>
            <p className="text-gray-600 leading-relaxed">
              By using ReLearn, you agree to these terms. ReLearn is a free, open-source educational
              tool provided as-is.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Use of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              ReLearn is designed for educational purposes. You may use it to study, create flashcards,
              generate quizzes, and interact with AI tutors using your own AI provider accounts
              (Google Gemini, GitHub Copilot).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Your Content</h2>
            <p className="text-gray-600 leading-relaxed">
              You retain all rights to the documents and content you upload to ReLearn. All content
              is stored locally on your device and is never transmitted to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. AI Services</h2>
            <p className="text-gray-600 leading-relaxed">
              AI-generated content (summaries, flashcards, quiz questions, etc.) is provided for
              educational assistance only. It may contain errors. Always verify important information
              with your course materials and instructors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Third-Party Accounts</h2>
            <p className="text-gray-600 leading-relaxed">
              ReLearn requires you to connect your own Google or GitHub account for AI features.
              Your use of these services is subject to their respective terms of service. You are
              responsible for compliance with their terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              ReLearn is provided &quot;as is&quot; without warranties of any kind. We are not responsible
              for any loss of data, incorrect AI-generated content, or issues arising from the use
              of third-party AI services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Open Source</h2>
            <p className="text-gray-600 leading-relaxed">
              ReLearn is open-source software licensed under the MIT License. You can view, modify,
              and distribute the source code according to the license terms at{" "}
              <a href="https://github.com/KNIGHTABDO/relearn" className="text-blue-600 hover:underline">
                github.com/KNIGHTABDO/relearn
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these terms, please open an issue on our{" "}
              <a href="https://github.com/KNIGHTABDO/relearn" className="text-blue-600 hover:underline">
                GitHub repository
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
