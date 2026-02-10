import { getRoadmapData, getAllRoadmaps } from '@/lib/roadmapUtils'
import RoadmapLazy from '@/components/roadmap/RoadmapLazy'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const roadmaps = getAllRoadmaps()
  return roadmaps.map((r) => ({
    slug: r.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const roadmaps = getAllRoadmaps()
  const { slug } = await params
  const roadmap = roadmaps.find((r) => r.slug === slug)

  if (!roadmap) {
    return {
      title: 'Roadmap Not Found',
    }
  }

  return {
    title: `${roadmap.title} Roadmap`,
    description: `Interactive career roadmap for ${roadmap.title}. Step-by-step guide to becoming a ${roadmap.title}.`,
  }
}

export default async function RoadmapPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await getRoadmapData(slug)

  if (!data) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          {data.label}
        </h1>
        <p className="mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">
          Interactive career roadmap. Click nodes to expand/collapse.
        </p>
      </div>

      <RoadmapLazy data={data} />

      <div className="prose dark:prose-invert mt-8 max-w-none">
        <h3>How to use this roadmap</h3>
        <ul>
          <li>
            <strong>Zoom/Pan:</strong> Drag the canvas to move, scroll to zoom.
          </li>
          <li>
            <strong>Click Nodes:</strong> Expand or collapse branches.
          </li>
          <li>
            <strong>External Links:</strong> Blue links in tooltips open resources.
          </li>
        </ul>
      </div>
    </div>
  )
}
