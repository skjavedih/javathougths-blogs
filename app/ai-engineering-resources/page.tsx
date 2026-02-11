import ResourceCard from '@/components/ResourceCard'
import resourcesData from '@/data/resourcesData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'AI Engineering Resources',
  description:
    'Downloadable AI engineering guides — from installing Ollama and n8n to mastering the golden rules of building AI applications.',
})

export default function AIEngineeringResourcesPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Page Header */}
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          AI Engineering Resources
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Curated, downloadable guides to accelerate your AI engineering journey. Each resource
          provides hands-on, step-by-step instructions — from local AI setup to production-ready
          architectural principles.
        </p>
      </div>

      {/* Resource Cards Grid */}
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resourcesData.map((resource) => (
            <ResourceCard
              key={resource.slug}
              title={resource.title}
              slug={resource.slug}
              description={resource.description}
              icon={resource.icon}
              pdfFileName={resource.pdfFileName}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
