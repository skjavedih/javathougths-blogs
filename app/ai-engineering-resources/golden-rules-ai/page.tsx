import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Golden Rules Before Building Any AI Application',
  description:
    'Before building an application, define the rules of intelligence. Learn the 5 foundational documents every AI engineer must create before writing code.',
}

export default function GoldenRulesAIPage() {
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
          <span>Golden Rules</span>
        </nav>
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          🚀 Golden Rule Before Building Any AI Application
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 italic">
          &quot;Before building an application, define the rules of intelligence.&quot;
        </p>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          AI agents are powerful — but without structure, they become chaotic. So before writing even
          1 line of code, we define <strong>5 foundational documents</strong>.
        </p>
      </div>

      {/* Content */}
      <div className="container py-12">
        <article className="prose dark:prose-invert max-w-none">
          {/* 1️⃣ Agent.md */}
          <h2>1️⃣ Agent.md – Brain of the Application</h2>
          <p>This file defines:</p>
          <ul>
            <li>🎭 Agent Role</li>
            <li>🎯 Goals</li>
            <li>🧠 Reasoning Style</li>
            <li>🚫 Guardrails</li>
            <li>🛠 Tools Allowed</li>
          </ul>

          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Example Structure
            </h4>
            <pre className="overflow-x-auto text-sm text-gray-800 dark:text-gray-200">
              <code>{`# Agent: Antigravity App Builder

## Role
You are a senior full-stack engineer.

## Rules
- Always create scalable architecture.
- Prefer clean folder structure.
- Ask for clarification before assumptions.

## Restrictions
- No hardcoded secrets.
- No deprecated libraries.`}</code>
            </pre>
          </div>

          <div className="not-prose my-6 space-y-2">
            <p className="text-gray-700 dark:text-gray-300">
              👉 This prevents hallucination
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              👉 Makes AI predictable
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              👉 Makes output production-grade
            </p>
          </div>

          {/* 2️⃣ README.md */}
          <h2>2️⃣ README.md – Human Contract</h2>
          <p>This is for developers. Contains:</p>
          <ul>
            <li>Project overview</li>
            <li>Tech stack</li>
            <li>Setup steps</li>
            <li>Architecture diagram</li>
            <li>How to run locally</li>
            <li>Deployment steps</li>
          </ul>
          <p>
            <strong>This makes onboarding easy.</strong>
          </p>

          {/* 3️⃣ SKILLS.md */}
          <h2>3️⃣ SKILLS.md – Agent Capability Memory 🧠</h2>
          <p>
            This is your powerful idea 👏 Whenever the agent uses a skill while building:
          </p>
          <ul>
            <li>JWT Authentication</li>
            <li>Stripe Payment Integration</li>
            <li>GraphQL</li>
            <li>Docker</li>
            <li>Redis Caching</li>
            <li>Vector DB</li>
            <li>CI/CD</li>
          </ul>
          <p>It must automatically append it to SKILLS.md.</p>

          <h3>Why This Is Genius?</h3>
          <p>Because:</p>
          <ul>
            <li>You can audit what AI actually knows.</li>
            <li>You track capability growth.</li>
            <li>You avoid repeating learning.</li>
            <li>It becomes an evolving intelligence log.</li>
          </ul>

          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Example
            </h4>
            <pre className="overflow-x-auto text-sm text-gray-800 dark:text-gray-200">
              <code>{`# Skills Used in This Project
- Spring Boot 3
- PostgreSQL
- JWT Authentication
- Dockerization
- REST API Design
- OpenAPI Documentation`}</code>
            </pre>
          </div>

          {/* 4️⃣ CONTRIBUTING.md */}
          <h2>4️⃣ CONTRIBUTING.md – Collaboration Rules</h2>
          <p>When multiple students contribute:</p>
          <ul>
            <li>Code standards</li>
            <li>PR rules</li>
            <li>Branch naming conventions</li>
            <li>Commit message format</li>
            <li>Testing requirements</li>
          </ul>

          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Example
            </h4>
            <pre className="overflow-x-auto text-sm text-gray-800 dark:text-gray-200">
              <code>{`## Contribution Guidelines
- Use feature branches.
- Follow Clean Code principles.
- Add unit tests.
- Follow conventional commits.`}</code>
            </pre>
          </div>
          <p>
            <strong>This avoids chaos in teams.</strong>
          </p>

          {/* 5️⃣ Proper Planning */}
          <h2>5️⃣ Proper Planning Before Execution (Most Important 🔥)</h2>
          <p>Before building any app, the agent MUST:</p>

          <h3>Step 1: Requirement Understanding</h3>
          <ul>
            <li>Clarify objective</li>
            <li>Define scope</li>
            <li>Identify users</li>
            <li>Define constraints</li>
          </ul>

          <h3>Step 2: Architecture Plan</h3>
          <ul>
            <li>High-level design</li>
            <li>Tech stack decision</li>
            <li>DB schema idea</li>
            <li>APIs required</li>
          </ul>

          <h3>Step 3: Task Breakdown</h3>
          <ul>
            <li>Backend tasks</li>
            <li>Frontend tasks</li>
            <li>DevOps tasks</li>
            <li>Security tasks</li>
            <li>Testing tasks</li>
          </ul>

          <h3>Step 4: Execution Flow Plan</h3>
          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Example
            </h4>
            <ol className="list-decimal space-y-1 pl-6 text-sm text-gray-800 dark:text-gray-200">
              <li>Setup project structure</li>
              <li>Configure database</li>
              <li>Implement authentication</li>
              <li>Build core APIs</li>
              <li>Integrate frontend</li>
              <li>Add validation</li>
              <li>Add logging</li>
              <li>Write tests</li>
              <li>Dockerize</li>
              <li>Deploy</li>
            </ol>
          </div>

          {/* 🛑 Critical Rule */}
          <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6 dark:border-red-700 dark:bg-red-900/20">
            <h3 className="mb-3 text-xl font-bold text-red-700 dark:text-red-400">
              🛑 CRITICAL RULE: Ask Permission Before Building
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Before writing code, agent should say:
            </p>
            <blockquote className="mb-4 border-l-4 border-red-400 pl-4 italic text-gray-700 dark:text-gray-300">
              &quot;Here is the architecture plan and execution flow. Do you approve this plan?
              Should I proceed?&quot;
            </blockquote>
            <p className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
              This prevents:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-gray-700 dark:text-gray-300">
              <li>Wrong implementation</li>
              <li>Wasted effort</li>
              <li>Misaligned requirements</li>
            </ul>
            <p className="mt-4 font-semibold text-red-700 dark:text-red-400">
              This teaches students: AI should assist — not assume.
            </p>
          </div>
        </article>

        {/* Download CTA */}
        <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-8 text-center sm:flex-row sm:text-left dark:border-gray-700 dark:bg-gray-800/50">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Download the Full Guide
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Get the complete PDF with the 5 foundational documents every AI engineer must create
              before building any AI application.
            </p>
          </div>
          <a
            href="/resources/golden-rules-ai-guide.pdf"
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
