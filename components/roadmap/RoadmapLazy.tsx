'use client'

import dynamic from 'next/dynamic'
import { RoadmapNode } from '@/lib/roadmapTypes'

const RoadmapGraph = dynamic(() => import('./RoadmapGraph'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[80vh] w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-gray-900 dark:border-gray-100"></div>
        <p className="text-gray-500 dark:text-gray-400">Loading interactive roadmap...</p>
      </div>
    </div>
  ),
})

export default function RoadmapLazy({ data }: { data: RoadmapNode }) {
  return <RoadmapGraph data={data} />
}
