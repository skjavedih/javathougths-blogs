import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Install Ollama on Windows & macOS',
  description:
    'Step-by-step guide to install and run Ollama locally for AI development on Windows and macOS.',
}

export default function InstallOllamaPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Breadcrumb */}
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <nav className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="/ai-engineering-resources"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            AI Engineering Resources
          </Link>
          <span className="mx-2">›</span>
          <span>Install Ollama</span>
        </nav>
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          🦙 Install Ollama on Windows & macOS
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A complete, step-by-step walkthrough for installing and running Ollama locally on your
          machine&mdash;whether you&apos;re on Windows or macOS.
        </p>
      </div>

      {/* Content Preview */}
      <div className="container py-12">
        <article className="prose dark:prose-invert max-w-none">
          <h2>What You&apos;ll Learn</h2>
          <ul>
            <li>
              <strong>What is Ollama?</strong> — An open-source tool to run large language models
              (LLMs) locally on your machine without cloud dependencies.
            </li>
            <li>
              <strong>System Requirements</strong> — Minimum hardware and OS requirements for
              Windows and macOS.
            </li>
            <li>
              <strong>Step-by-Step Installation</strong> — Download, install, and verify Ollama on
              both platforms.
            </li>
            <li>
              <strong>Running Your First Model</strong> — Pull a model like Llama 2 or Mistral and
              run your first inference.
            </li>
            <li>
              <strong>Using the REST API</strong> — Integrate Ollama into your applications via its
              built-in HTTP API.
            </li>
            <li>
              <strong>Troubleshooting</strong> — Common issues and their resolutions.
            </li>
          </ul>

          <h2>Quick Start Preview</h2>
          <h3>macOS Installation</h3>
          <pre>
            <code className="language-bash">
              {`# Download and install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Verify installation
ollama --version

# Pull and run a model
ollama pull llama2
ollama run llama2`}
            </code>
          </pre>

          <h3>Windows Installation</h3>
          <ol>
            <li>
              Download the installer from{' '}
              <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer">
                ollama.com/download
              </a>
            </li>
            <li>Run the installer and follow the on-screen instructions</li>
            <li>Open PowerShell or Command Prompt</li>
            <li>
              Verify with <code>ollama --version</code>
            </li>
          </ol>

          <h2>Key Features Covered in the Guide</h2>
          <div className="not-prose my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-2 text-2xl">💻</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Local AI Development
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Run LLMs entirely on your machine — no API keys, no cloud costs.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-2 text-2xl">🔌</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                REST API Access
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Built-in HTTP endpoints to integrate AI into any application.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-2 text-2xl">📦</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Model Library
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Access Llama 2, Mistral, CodeLlama, Phi-2 and dozens more models.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-2 text-2xl">⚙️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Cross-Platform
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Works seamlessly on macOS, Windows, and Linux.
              </p>
            </div>
          </div>
        </article>

        {/* Download CTA */}
        <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-8 text-center sm:flex-row sm:text-left dark:border-gray-700 dark:bg-gray-800/50">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Download the Full Guide
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Get the complete PDF with screenshots, code snippets, and advanced configuration tips.
            </p>
          </div>
          <a
            href="/resources/install-ollama-guide.pdf"
            download
            className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Link
            href="/ai-engineering-resources"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
          >
            ← Back to AI Engineering Resources
          </Link>
        </div>
      </div>
    </div>
  )
}
