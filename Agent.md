# 🤖 Agent.md — AI Agent for Javathoughts Blog

> This document describes how the AI coding agent operates within the **Javathoughts Blog** project, what it understands about the architecture, and how it assists with development, content creation, and maintenance.

---

## 📌 Project Overview

**Javathoughts** is a high-performance, SEO-optimized personal blog focused on **Java, System Design, Scalable Architecture, and AI Integration**. The agent has deep contextual awareness of the entire codebase and assists across all layers of the stack.

| Attribute          | Detail                                                                 |
| ------------------ | ---------------------------------------------------------------------- |
| **Site URL**       | [https://www.javathoughts.com](https://www.javathoughts.com)           |
| **Framework**      | Next.js 15 (App Router)                                                |
| **Styling**        | Tailwind CSS v4                                                        |
| **Content Engine** | Contentlayer2 (MDX)                                                    |
| **Deployment**     | Vercel (CI/CD via GitHub)                                              |
| **Author**         | Javed Shaikh                                                           |

---

## 🧠 How the Agent Works for This Project

### 1. Codebase Awareness

The agent maintains a deep understanding of the project's architecture:

- **App Router Structure** — Understands the `app/` directory layout including route groups (`blog/`, `tags/`, `roadmaps/`, `ai-engineering-resources/`, `contact/`, `about/`, `projects/`, `page/`), API routes (`app/api/`), and special files (`layout.tsx`, `page.tsx`, `not-found.tsx`, `robots.ts`, `sitemap.ts`).
- **Component Library** — Knows all 24+ reusable React components in `components/` (e.g., `Header`, `Footer`, `MobileNav`, `ThemeSwitch`, `Pagination`, `NewsletterForm`, `ContactForm`, `SearchButton`, `LikeButton`, `ViewCounter`, `RoadmapLazy`, `ResourceCard`).
- **Layout System** — Tracks the 6 layout templates in `layouts/` (`PostLayout`, `PostSimple`, `PostBanner`, `ListLayout`, `ListLayoutWithTags`, `AuthorLayout`).
- **Content Pipeline** — Understands how Contentlayer2 processes MDX files from `data/blog/` with remark/rehype plugins for syntax highlighting, math rendering, GFM, auto-linking headings, and citation support.
- **Configuration Files** — Monitors `contentlayer.config.ts`, `next.config.js`, `siteMetadata.js`, `headerNavLinks.ts`, `tsconfig.json`, and `postcss.config.js` for configuration consistency.

### 2. Content Management

The agent assists with blog content creation and management:

- **Creating New Blog Posts** — Generates properly formatted MDX files in `data/blog/` with correct frontmatter (title, date, tags, summary, images, authors, layout).
- **Tag Management** — Understands the auto-generated `tag-data.json` system that counts tag occurrences across all posts during the Contentlayer build.
- **Search Index** — Knows that the KBar search index (`public/search.json`) is auto-generated from all blog content during build.
- **Image Handling** — Manages blog images in `public/static/images/`, ensuring correct paths and responsive display.
- **Roadmap Data** — Manages interactive roadmap JSON data files in `data/roadmaps/` (Java Backend, Full Stack, AI Engineer, ML Engineer, Data Scientist, Common Foundation).
- **AI Engineering Resources** — Manages downloadable PDF guides in `public/resources/` with metadata in `data/resourcesData.ts`. Includes individual guide pages and download tracking via `app/api/download-count/`.

### 3. Build & Deployment Pipeline

The agent understands the complete CI/CD workflow:

```
Content (MDX) → Contentlayer2 Build → Next.js Build → Vercel Deployment
```

- **Build Process** — `contentlayer2 build && next build` (generates tag counts, search index, then builds Next.js).
- **Development** — `npm run dev` or `yarn dev` starts the Next.js dev server with hot reload.
- **Vercel Deployment** — Auto-deploys on push to GitHub. The agent can debug deployment failures (lockfile mismatches, dependency issues, build errors).
- **GitHub Actions** — Configured with `pages.yml` workflow for additional CI/CD automation.

### 4. Debugging & Maintenance

The agent can diagnose and resolve common issues:

- **Build Failures** — Resolves lockfile mismatches (`yarn.lock` vs `package.json`), missing dependencies, and TypeScript compilation errors.
- **Styling Issues** — Debugs Tailwind CSS v4 configuration, dark/light mode inconsistencies, and responsive design breakpoints.
- **Content Rendering** — Fixes MDX parsing errors, broken image links, and frontmatter validation issues.
- **SEO & Performance** — Ensures proper meta tags, sitemap generation, robots.txt configuration, and Content Security Policy (CSP) headers.
- **Pagination** — Maintains the 4-posts-per-page pagination system across Home and Blog pages.

### 5. Feature Development

The agent can plan and implement new features:

- **New Pages & Routes** — Creates new routes in the App Router with proper layouts and metadata.
- **Component Development** — Builds new React (TSX) components following existing patterns (functional components, Tailwind styling, dark mode support).
- **API Integration** — Implements API routes (e.g., newsletter subscription via MailerLite, RSS feed generation, download count tracking).
- **Third-Party Services** — Configures analytics (Umami), comments (Giscus), newsletter (MailerLite), and search (KBar/Algolia).

---

## 🔒 Security Awareness

The agent respects the project's security configuration:

- **Content Security Policy (CSP)** — Maintains whitelisted domains in `next.config.js` for scripts, frames, and connections.
- **Environment Variables** — Never exposes `.env` secrets; references them via `process.env.*` only.
- **Security Headers** — Preserves HSTS, X-Frame-Options (DENY), X-Content-Type-Options (nosniff), Referrer-Policy, and Permissions-Policy.

---

## 📂 Key Project Structure

```
javathoughts-blogs/
├── app/                    # Next.js App Router (pages, layouts, API routes)
│   ├── ai-engineering-resources/  # AI Resources listing + guide pages
│   │   ├── install-ollama/        # Ollama installation guide
│   │   ├── install-n8n/           # n8n setup guide
│   │   └── golden-rules-ai/       # AI architecture principles
│   ├── api/                # API endpoints (newsletter, download-count, etc.)
│   ├── blog/               # Blog listing & detail pages
│   ├── roadmaps/           # Interactive roadmap pages
│   ├── tags/               # Tag-based filtering
│   ├── contact/            # Contact form page
│   ├── about/              # About page
│   ├── projects/           # Projects showcase
│   └── layout.tsx          # Root layout with providers
├── components/             # 24+ reusable React components
├── css/                    # Global styles (Tailwind CSS)
├── data/
│   ├── blog/               # MDX blog posts (14 posts)
│   ├── authors/            # Author MDX profiles
│   ├── roadmaps/           # Roadmap JSON data (6 tracks)
│   ├── resourcesData.ts    # AI resource metadata
│   └── siteMetadata.js     # Site-wide configuration
├── layouts/                # 6 page layout templates
├── lib/                    # Utility functions (roadmap types & utils)
├── public/
│   ├── resources/          # Downloadable PDFs
│   └── static/             # Images, favicons
├── contentlayer.config.ts  # Content processing pipeline
├── next.config.js          # Next.js + CSP + Webpack config
└── package.json            # Dependencies & scripts
```

---

## 🤝 Agent Collaboration Model

The agent works as a **pair programming partner**:

1. **Understands Context** — Reads existing code before making changes.
2. **Preserves Patterns** — Follows established coding conventions and component patterns.
3. **Validates Changes** — Checks build status and addresses errors proactively.
4. **Documents Work** — Creates clear commit-worthy changes with explanations.
5. **Iterates on Feedback** — Adjusts implementation based on review comments.

---

*Last updated: February 2026*
