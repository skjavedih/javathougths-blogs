import { getAllRoadmaps } from '@/lib/roadmapUtils'
import RoadmapCard from '@/components/roadmap/RoadmapCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Roadmaps',
  description:
    'Interactive career roadmaps for Data Science, Machine Learning, and AI Engineering.',
}

export default function RoadmapsPage() {
  const roadmaps = getAllRoadmaps().map((r) => {
    let description = ''
    let icon = ''
    switch (r.slug) {
      case 'data-scientist':
        description = 'Master Python, Statistics, and ML basics to become a Data Scientist.'
        icon = '📊'
        break
      case 'ml-engineer':
        description = 'Learn deep learning, MLOps, and deployment to become an ML Engineer.'
        icon = '🤖'
        break
      case 'ai-engineer':
        description = 'Explore basic to advanced concepts in AI, LLMs, and Agents.'
        icon = '🧠'
        break
      case 'java-backend':
        description = 'Master Java, Spring Boot, Microservices, and Cloud Native development.'
        icon = '☕'
        break
      case 'full-stack':
        description = 'Become a versatile developer with React, Node.js/Java, and DevOps skills.'
        icon = '💻'
        break
      default:
        description = 'Interactive career roadmap.'
        icon = '🗺️'
    }
    return { ...r, description, icon }
  })

  // Sort roadmaps to ensure consistent order if needed, or rely on getAllRoadmaps order
  // For now, we trust getAllRoadmaps returns them, but we want to make sure our new ones are there.
  // Since getAllRoadmaps scans the directory, and we added the files, they should be present.

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Career Roadmaps
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Step-by-step guides to help you master the skills needed for the future of tech.
        </p>
      </div>
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((r) => (
            <RoadmapCard
              key={r.slug}
              title={r.title}
              slug={r.slug}
              description={r.description}
              icon={r.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
