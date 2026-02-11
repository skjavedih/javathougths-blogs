# 🛠️ Skills.md — Technologies & Skills Used in Javathoughts Blog

> A comprehensive overview of every technology, library, tool, and technical skill powering the **Javathoughts Blog** platform.

---

## 🏗️ Core Framework & Runtime

| Technology        | Version   | Purpose                                                      |
| ----------------- | --------- | ------------------------------------------------------------ |
| **Next.js**       | 15.5.x    | React framework with App Router, SSG, SSR, and API Routes    |
| **React**         | 18.3.x    | UI component library for building interactive interfaces     |
| **TypeScript**    | 5.x       | Type-safe development across the entire codebase             |
| **Node.js**       | 18+       | JavaScript runtime for server-side rendering and build tools |

---

## 🎨 Styling & Design

| Technology            | Version | Purpose                                       |
| --------------------- | ------- | --------------------------------------------- |
| **Tailwind CSS**      | 4.x     | Utility-first CSS framework for rapid styling  |
| **@tailwindcss/forms**      | 0.5.x   | Form element styling plugin                   |
| **@tailwindcss/typography** | 0.5.x   | Prose/typography styling for blog content     |
| **tailwind-merge**    | 3.x     | Intelligent Tailwind class merging utility     |
| **PostCSS**           | 8.x     | CSS transformation and plugin pipeline         |
| **clsx**              | 2.x     | Conditional CSS class name utility             |
| **next-themes**       | 0.4.x   | Dark/Light mode theme switching with system detection |

### Design Skills Applied
- 🌙 **Dark/Light Mode** — Full theme switching with system preference detection.
- 📱 **Responsive Design** — Mobile-first layouts with hamburger navigation (`MobileNav`).
- ♿ **Accessibility** — Semantic HTML, ARIA attributes, keyboard navigation support.
- 🎯 **Component Architecture** — Reusable, composable UI components following React best practices.

---

## 📝 Content Management & MDX Pipeline

| Technology                    | Purpose                                           |
| ----------------------------- | ------------------------------------------------- |
| **Contentlayer2**             | Type-safe content processing for MDX files        |
| **next-contentlayer2**        | Next.js integration for Contentlayer2             |
| **gray-matter**               | Frontmatter (YAML) parsing from MDX files         |
| **reading-time**              | Automatic reading time calculation per blog post  |
| **github-slugger**            | URL-safe slug generation for headings and tags    |
| **Pliny**                     | Blog toolkit providing MDX plugins and utilities  |

### Remark Plugins (Markdown Processing)
| Plugin                              | Purpose                                      |
| ----------------------------------- | -------------------------------------------- |
| **remark-gfm**                      | GitHub Flavored Markdown (tables, strikethrough, task lists) |
| **remark-math**                     | LaTeX math expression support                |
| **remark-github-blockquote-alert**  | GitHub-style alert blockquotes (NOTE, TIP, WARNING) |
| **remarkExtractFrontmatter** (Pliny)| Frontmatter extraction from MDX              |
| **remarkCodeTitles** (Pliny)        | Code block title annotations                 |
| **remarkImgToJsx** (Pliny)          | Image tag conversion to JSX components       |

### Rehype Plugins (HTML Processing)
| Plugin                       | Purpose                                           |
| ---------------------------- | ------------------------------------------------- |
| **rehype-slug**              | Auto-generate IDs for headings                    |
| **rehype-autolink-headings** | Clickable anchor links on headings                |
| **rehype-katex**             | KaTeX math rendering in HTML                      |
| **rehype-katex-notranslate** | Prevents translation services from breaking math  |
| **rehype-citation**          | Academic citation and bibliography support         |
| **rehype-prism-plus**        | Syntax highlighting with line numbers & highlighting |
| **rehype-preset-minify**     | HTML minification for production builds            |

### Content Skills Applied
- ✍️ **MDX Authoring** — Write rich blog posts combining Markdown with React components.
- 🏷️ **Tagging System** — Auto-generated tag counts with dedicated tag pages.
- 🔍 **Full-Text Search** — Client-side search via KBar with auto-indexed content.
- 📖 **Table of Contents** — Auto-generated TOC from heading extraction.
- 📚 **Multiple Layouts** — 6 layout templates (PostLayout, PostSimple, PostBanner, ListLayout, ListLayoutWithTags, AuthorLayout).

---

## 📊 Data Visualization

| Technology | Version | Purpose                                          |
| ---------- | ------- | ------------------------------------------------ |
| **D3.js**  | 7.x     | Interactive roadmap visualizations and data graphics |

### Visualization Skills Applied
- 🗺️ **Interactive Roadmaps** — 6 career track roadmaps (Java Backend, Full Stack, AI Engineer, ML Engineer, Data Scientist, Common Foundation) rendered with D3.js.
- ⚡ **Lazy Loading** — Roadmap components use React lazy loading (`RoadmapLazy.tsx`) for optimal performance.

---

## 📡 API & Integrations

| Service             | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| **MailerLite**      | Newsletter subscription management via custom API  |
| **Giscus**          | GitHub Discussions-powered comment system          |
| **Umami Analytics** | Privacy-friendly website analytics                 |
| **RSS (rss)**       | Automated blog feed generation (`feed.xml`)        |
| **n8n**             | Workflow automation (embedded via iframe)           |

### Integration Skills Applied
- 📨 **Newsletter API** — Custom MailerLite API integration with form validation.
- 💬 **Comments System** — Giscus configured with dark/light theme support.
- 📈 **Analytics** — Umami with configurable providers (Plausible, Google Analytics, PostHog).
- 📡 **RSS Feed** — Dynamic `feed.xml` generation via Next.js Route Handler.
- 📬 **Contact Form** — Custom contact form with field validation.

---

## 🔍 SEO & Performance

| Skill                      | Implementation                                         |
| -------------------------- | ------------------------------------------------------ |
| **Structured Data**        | JSON-LD `BlogPosting` schema on every blog post        |
| **Sitemap**                | Auto-generated `sitemap.ts` with all routes             |
| **Robots.txt**             | Configured `robots.ts` for search engine crawling       |
| **Meta Tags**              | Dynamic `<title>`, description, and Open Graph tags     |
| **Social Cards**           | Twitter/Open Graph image cards for social sharing       |
| **Static Generation (SSG)**| Pre-rendered pages for lightning-fast load times         |
| **Image Optimization**     | Next.js `<Image>` component with responsive loading     |
| **Bundle Analysis**        | `@next/bundle-analyzer` for monitoring bundle size      |
| **HTML Minification**      | rehype-preset-minify for optimized HTML output          |

---

## 🔒 Security

| Skill                        | Implementation                                       |
| ---------------------------- | ---------------------------------------------------- |
| **Content Security Policy**  | Strict CSP headers whitelisting trusted domains      |
| **HSTS**                     | HTTP Strict Transport Security enabled               |
| **X-Frame-Options**          | Set to DENY to prevent clickjacking                  |
| **X-Content-Type-Options**   | Set to nosniff to prevent MIME type sniffing         |
| **Referrer-Policy**          | strict-origin-when-cross-origin                      |
| **Permissions-Policy**       | Camera, microphone, and geolocation disabled         |
| **Environment Variables**    | Secrets managed securely via `.env` (gitignored)     |

---

## 🧰 Development & Tooling

| Tool                           | Purpose                                         |
| ------------------------------ | ----------------------------------------------- |
| **ESLint**                     | Code linting with Next.js and TypeScript rules  |
| **Prettier**                   | Automatic code formatting                       |
| **prettier-plugin-tailwindcss**| Tailwind class sorting in Prettier              |
| **Husky**                      | Git hooks for pre-commit linting                |
| **lint-staged**                | Run linters only on staged files                |
| **@svgr/webpack**              | Import SVGs as React components                 |
| **cross-env**                  | Cross-platform environment variable setting     |
| **esbuild**                    | Fast JavaScript bundling (used by Contentlayer) |

---

## ☁️ Deployment & DevOps

| Technology          | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| **Vercel**          | Production hosting with automatic deployments       |
| **GitHub Actions**  | CI/CD pipeline (`pages.yml` workflow)               |
| **GitHub**          | Source control, issue templates, and code review     |
| **Yarn (Berry)**    | Package manager with `.yarnrc.yml` configuration    |
| **npm**             | Alternative package manager support                 |
| **DevContainers**   | Consistent development environment (`.devcontainer/`) |

---

## 📥 Resource Management & Downloads

| Skill                       | Implementation                                               |
| --------------------------- | ------------------------------------------------------------ |
| **Resource Card UI**        | `ResourceCard.tsx` with icon, title, description, dual CTAs  |
| **Data-Driven Pages**       | `resourcesData.ts` drives card rendering and guide pages     |
| **PDF Downloads**           | Static PDF assets served from `public/resources/`            |
| **Download Tracking API**   | `app/api/download-count/route.ts` — POST to increment, GET to read |
| **SEO Guide Pages**         | Individual guide pages with breadcrumbs, content preview, and download CTA |
| **Responsive Card Grid**    | 1→2→3 column responsive grid using Tailwind CSS              |

### Resource Management Skills Applied
- 📄 **Downloadable Content** — PDF guides served as static assets with proper `download` attributes.
- 📊 **Download Analytics** — In-memory download count tracking API (upgradable to Vercel KV/Redis).
- 🎨 **Content Preview Pages** — Rich guide preview pages with code snippets, feature cards, and CTA sections.
- 🧭 **Breadcrumb Navigation** — Hierarchical navigation on guide pages for better UX and SEO.

---

## 📋 Skills Summary

```
┌─────────────────────────────────────────────────────┐
│                 JAVATHOUGHTS BLOG                    │
├─────────────────────────────────────────────────────┤
│  Frontend     │ Next.js 15 · React 18 · TypeScript  │
│  Styling      │ Tailwind CSS v4 · PostCSS · clsx    │
│  Content      │ Contentlayer2 · MDX · Pliny         │
│  Plugins      │ 6 Remark + 7 Rehype plugins         │
│  Visualization│ D3.js · Lazy Loading                 │
│  Integrations │ MailerLite · Giscus · Umami · n8n   │
│  SEO          │ JSON-LD · Sitemap · RSS · Meta Tags  │
│  Security     │ CSP · HSTS · Permissions Policy      │
│  DevOps       │ Vercel · GitHub Actions · Husky      │
│  Tooling      │ ESLint · Prettier · esbuild          │
└─────────────────────────────────────────────────────┘
```

---

*Last updated: February 2026*
