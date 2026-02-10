export type RoadmapNode = {
  id: string
  label: string
  type?: 'root' | 'branch' | 'leaf'
  children?: RoadmapNode[] | null
  _children?: RoadmapNode[] | null // For D3 collapsing state
  description?: string
  link?: string
  externalLinks?: { label: string; url: string }[]
  dataRef?: string
}
