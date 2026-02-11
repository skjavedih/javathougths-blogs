import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Install n8n Locally or on Cloud (Hostinger + Node.js)',
  description:
    'Complete setup guide for running n8n locally or deploying it to Hostinger using Node.js with SSL and production configuration.',
}

export default function InstallN8nPage() {
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
          <span>Install n8n</span>
        </nav>
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          ⚡ Install n8n Locally or on Cloud
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A comprehensive guide to setting up n8n — the powerful workflow automation tool — on your
          local machine or deploying it to Hostinger with Node.js.
        </p>
      </div>

      {/* Content Preview */}
      <div className="container py-12">
        <article className="prose dark:prose-invert max-w-none">
          <h2>What You&apos;ll Learn</h2>
          <ul>
            <li>
              <strong>What is n8n?</strong> — An open-source, self-hostable workflow automation
              platform with 350+ integrations.
            </li>
            <li>
              <strong>Local Installation</strong> — Set up n8n on your development machine using
              npm, Docker, or npx.
            </li>
            <li>
              <strong>Cloud Deployment</strong> — Deploy n8n to Hostinger VPS with Node.js, PM2, and
              Nginx reverse proxy.
            </li>
            <li>
              <strong>Domain & SSL</strong> — Configure a custom domain and free SSL certificate
              with Let&apos;s Encrypt.
            </li>
            <li>
              <strong>Production Tips</strong> — Database configuration, environment variables,
              authentication, and backup strategies.
            </li>
          </ul>

          <h2>Quick Start Preview</h2>
          <h3>Local Installation (npm)</h3>
          <pre>
            <code className="language-bash">
              {`# Install n8n globally
npm install -g n8n

# Start n8n
n8n start

# Access the UI at http://localhost:5678`}
            </code>
          </pre>

          <h3>Cloud Deployment (Hostinger)</h3>
          <pre>
            <code className="language-bash">
              {`# SSH into your Hostinger VPS
ssh root@your-server-ip

# Install Node.js via NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts

# Install n8n and PM2
npm install -g n8n pm2

# Start n8n with PM2 (production)
pm2 start n8n --name n8n
pm2 save
pm2 startup`}
            </code>
          </pre>

          <h2>Key Topics Covered</h2>
          <div className="not-prose my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-2 text-2xl">🖥️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Local Development
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Run n8n on your machine with npm, Docker, or one-line npx command.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-2 text-2xl">☁️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Cloud Hosting
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Deploy to Hostinger VPS with PM2, Nginx, and auto-restart on reboot.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-2 text-2xl">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                SSL & Security
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Free SSL with Let&apos;s Encrypt, basic auth, and environment isolation.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-2 text-2xl">🔗</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                350+ Integrations
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Connect to APIs, databases, AI models, and SaaS platforms out of the box.
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
              Get the complete PDF with screenshots, Nginx configs, and production deployment
              checklist.
            </p>
          </div>
          <a
            href="/resources/install-n8n-guide.pdf"
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
