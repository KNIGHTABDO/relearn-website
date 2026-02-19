import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ReLearn",
  description: "How ReLearn handles your data and privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          ReLearn
        </Link>
      </nav>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: February 19, 2026</p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              ReLearn is a free, open-source AI-powered educational platform. We are committed to
              protecting your privacy. This policy explains what data we collect and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Data We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Desktop App:</strong> ReLearn stores all your data locally on your device using
              SQLite. Your documents, study materials, chat history, and flashcards never leave your
              computer. We do not operate any servers that collect or store your personal data.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              <strong>Google Sign-In:</strong> When you connect your Google account, we request access
              to use Google&apos;s AI services (Gemini) on your behalf. We receive your name, email
              address, and profile picture solely to display them in the app. We do not store your
              Google credentials on any server — tokens are saved locally on your device only.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              <strong>GitHub Sign-In:</strong> If you connect GitHub Copilot, we use a device code
              flow. Your GitHub token is stored locally on your device only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. AI Services</h2>
            <p className="text-gray-600 leading-relaxed">
              When you use AI features (chat, flashcards, quizzes, summaries, etc.), your document
              content is sent directly from your device to the AI provider (Google Gemini or GitHub
              Copilot) using your own account credentials. ReLearn does not proxy, log, or store
              these AI interactions on any server.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              ReLearn integrates with Google Gemini API and GitHub Copilot API. Your use of these
              services is subject to their respective privacy policies:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
              <li><a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">Google Privacy Policy</a></li>
              <li><a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" className="text-blue-600 hover:underline">GitHub Privacy Statement</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Data Storage</h2>
            <p className="text-gray-600 leading-relaxed">
              All user data is stored locally on your device in a SQLite database. Uninstalling the
              app removes all stored data. We do not have access to your local data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Children&apos;s Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              ReLearn is designed for university and college students. We do not knowingly collect
              data from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Changes</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time. Changes will be posted on this page
              with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this privacy policy, please open an issue on our{" "}
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
