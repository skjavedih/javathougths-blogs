import Link from 'next/link'

interface RoadmapCardProps {
  title: string
  slug: string
  description: string
  icon?: React.ReactNode
}

export default function RoadmapCard({ title, slug, description, icon }: RoadmapCardProps) {
  return (
    <div className="h-full">
      <Link
        href={`/roadmaps/${slug}`}
        className="flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white p-6 shadow-md transition-all hover:scale-105 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
      >
        <div className="flex flex-1 flex-col items-center text-center">
          {icon && <div className="mb-4 text-4xl">{icon}</div>}
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="mb-4 flex-grow text-gray-500 dark:text-gray-400">{description}</p>
          <div className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 mt-auto rounded-lg px-4 py-2 text-white">
            Start Learning
          </div>
        </div>
      </Link>
    </div>
  )
}
