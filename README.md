# Javathoughts Blog

**System Design Mastery Hub** - A personal blog dedicated to System Design Patterns, Software Architecture, Java, and Best Practices.

**Live Site:** [https://www.javathoughts.com]

## 🚀 Technologies

This project is built with a modern stack focusing on performance and developer experience:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Contentlayer](https://common-good.io/contentlayer) (MDX)
- **Deployment**: [Vercel](https://vercel.com)
- **Newsletter**: [MailerLite](https://www.mailerlite.com/) (Custom API Integration)
- **Analytics**: Umami / Google Analytics (Configurable)
- **Comments**: Giscus (GitHub Discussions)

## ✨ Features

- 📝 **MDX Support**: Write blogs in Markdown/MDX with component support.
- 🌙 **Dark/Light Mode**: Fully responsive theme switching.
- 🎨 **Syntax Highlighting**: Beautiful code blocks.
- 📡 **Automated RSS Feed**: Dynamic `feed.xml` generation via Route Handler.
- 📨 **Newsletter Integration**: Direct subscription support for MailerLite.
- 🔍 **SEO Optimized**: Sitemap, robots.txt, and metadata generation.
- ⚡ **High Performance**: Static generation with Next.js.

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **Yarn** or **NPM** installed.

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/skjavedih/javathoughts-blogs.git
    cd javathoughts-blogs
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Variables**:
    Create a `.env` file in the root directory and add the necessary keys (request from owner if needed):

    ```env
    # Newsletter (MailerLite)
    MAILERLITE_API_KEY=your_api_key
    MAILERLITE_GROUP_ID=your_group_id

    # Comments (Giscus)
    NEXT_PUBLIC_GISCUS_REPO=...
    NEXT_PUBLIC_GISCUS_REPOSITORY_ID=...
    ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the blog.

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

## 👤 Author & Owner

**Javed Shaikh**

- **Blog**: [Javathoughts](https://www.javathoughts.com)
- **Email**: [skjavedb@gmail.com](mailto:skjavedb@gmail.com)
- **GitHub**: [@skjavedih](https://github.com/skjavedih)
- **Twitter/X**: [@thoughtsinjava](https://twitter.com/thoughtsinjava)

---

&copy; 2025 Javathoughts. All rights reserved.
