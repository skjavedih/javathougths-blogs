export interface Resource {
  title: string
  slug: string
  description: string
  icon: string
  pdfFileName: string
}

const resourcesData: Resource[] = [
  {
    title: 'Install Ollama on Windows & macOS',
    slug: 'install-ollama',
    description:
      'Step-by-step guide to install and run Ollama locally for AI development. Covers Windows and macOS setup, model downloading, and first inference.',
    icon: '🦙',
    pdfFileName: 'install-ollama-guide.pdf',
  },
  {
    title: 'Install n8n Locally or on Cloud (Hostinger + Node.js)',
    slug: 'install-n8n',
    description:
      'Complete setup guide for running n8n locally or deploying it to Hostinger using Node.js. Includes domain configuration, SSL, and production tips.',
    icon: '⚡',
    pdfFileName: 'install-n8n-guide.pdf',
  },
  {
    title: 'Golden Rules Before Building Any AI Application',
    slug: 'golden-rules-ai',
    description:
      'Essential principles and architectural thinking every AI engineer must follow. From data strategy to model selection and deployment best practices.',
    icon: '📐',
    pdfFileName: 'golden-rules-ai-guide.pdf',
  },
]

export default resourcesData
