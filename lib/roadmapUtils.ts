import fs from 'fs'
import path from 'path'

const roadmapsDirectory = path.join(process.cwd(), 'data/roadmaps')

import { RoadmapNode } from './roadmapTypes'

export async function getRoadmapData(slug: string): Promise<RoadmapNode | null> {
  const fullPath = path.join(roadmapsDirectory, `${slug}.json`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const data = JSON.parse(fileContents) as RoadmapNode

  return await resolveReferences(data)
}

async function resolveReferences(node: RoadmapNode): Promise<RoadmapNode> {
  if (node.dataRef) {
    const refPath = path.join(roadmapsDirectory, `${node.dataRef}.json`)
    if (fs.existsSync(refPath)) {
      const refContents = fs.readFileSync(refPath, 'utf8')
      const refData = JSON.parse(refContents) as RoadmapNode
      // Merge the reference data into the current node, but keep current node's id/label if they exist and are different (though usually we just want to inject the children)
      // Actually, if it's a direct reference, we might want to just replace the Children or attributes.
      // For this specific use case (Foundation), we want to append the children of the foundation to this node, or replace this node with the foundation node but keep the parent connection?
      // Simpler: If dataRef exists, load that data and return it. Overrides local props if conflict, or we can merge.

      // Let's assume dataRef means "replace this node's content with the referenced node's content", but maybe keep the ID if needed?
      // Or better, just return the referenced node.
      return await resolveReferences(refData)
    }
  }

  if (node.children) {
    const resolvedChildren = await Promise.all(
      node.children.map(async (child) => await resolveReferences(child))
    )
    return { ...node, children: resolvedChildren }
  }

  return node
}

export function getAllRoadmaps() {
  // Return list of available roadmaps (hardcoded or scanned)
  return [
    { slug: 'data-scientist', title: 'Data Scientist' },
    { slug: 'ml-engineer', title: 'Machine Learning Engineer' },
    { slug: 'ai-engineer', title: 'AI Engineer' },
    { slug: 'java-backend', title: 'Java Backend Engineer' },
    { slug: 'full-stack', title: 'Full Stack Engineer' },
  ]
}
