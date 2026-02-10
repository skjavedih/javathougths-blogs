'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState, useCallback } from 'react'
import * as d3 from 'd3'
import { RoadmapNode } from '@/lib/roadmapTypes'
import clsx from 'clsx'

// Type definition for the component props
interface RoadmapGraphProps {
  data: RoadmapNode
}

// Extended HierarchyNode to include x, y coordinates from D3 layout
interface TreeNode extends d3.HierarchyPointNode<RoadmapNode> {
  x0?: number
  y0?: number
  _children?: TreeNode[] | null // For collapsing
}

export default function RoadmapGraph({ data }: RoadmapGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [activeNode, setActiveNode] = useState<RoadmapNode | null>(null)

  // We need to keep track of the root state across renders
  const rootRef = useRef<TreeNode | null>(null)

  const updateGraph = useCallback(() => {
    if (!containerRef.current || !svgRef.current || !rootRef.current) return

    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight || 600

    const margin = { top: 20, right: 90, bottom: 30, left: 90 }

    // Create the tree layout
    // Adjust nodeSize to control spacing (increased for better readability)
    const treeLayout = d3.tree<RoadmapNode>().nodeSize([60, 240])

    const root = rootRef.current

    // Compute the new tree layout
    treeLayout(root)

    // Extract nodes and links from the computed layout
    const nodes = root.descendants() as TreeNode[]
    const links = root.links()

    // Calculate bounds to center the tree
    let x0 = Infinity
    let x1 = -Infinity
    root.each((d) => {
      if (d.x > x1) x1 = d.x
      if (d.x < x0) x0 = d.x
    })

    const svg = d3.select(svgRef.current)

    // Clear previous content on each render to avoid duplicate SVG elements
    svg.selectAll('*').remove()

    // Create root container group (centered vertically)
    const gRoot = svg
      .append('g')
      .attr('class', 'roadmap-container')
      .attr('transform', `translate(${margin.left},${height / 2})`)

    const linkGroup = gRoot.append('g').attr('class', 'links')
    const nodeGroup = gRoot.append('g').attr('class', 'nodes')

    // Zoom / pan – always target the single root container
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        svg.select<SVGGElement>('g.roadmap-container')?.attr('transform', event.transform)
      })

    svg.call(zoom)
    // Optional: we could set an initial transform here if desired

    // 1. Links
    const linkSelection = linkGroup
      .selectAll<SVGPathElement, d3.HierarchyPointLink<RoadmapNode>>('path.link')
      .data(links, (d) => d.target.data.id)

    const linkEnter = linkSelection
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', (d) => {
        const source = d.source as unknown as TreeNode
        const o = { x: source.x0 || source.x, y: source.y0 || source.y }
        return diagonal(o, o)
      })
      .attr('fill', 'none')
      .attr('stroke', '#9ca3af') // lighter gray
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', 2)

    const linkUpdate = linkEnter.merge(linkSelection)

    linkUpdate
      .transition()
      .duration(500)
      .attr('d', (d) => diagonal(d.source as any, d.target as any))

    linkSelection
      .exit()
      .transition()
      .duration(500)
      .attr('d', (d) => {
        const source = (d as any).source as TreeNode
        const o = { x: source.x || 0, y: source.y || 0 }
        return diagonal(o, o)
      })
      .remove()

    // 2. Nodes
    const nodeSelection = nodeGroup
      .selectAll<SVGGElement, TreeNode>('g.node')
      .data(nodes, (d) => d.data.id)

    const nodeEnter = nodeSelection
      .enter()
      .append('g')
      .attr('class', 'node cursor-pointer')
      .attr(
        'transform',
        (d) => `translate(${(d.parent as any)?.y0 || 0},${(d.parent as any)?.x0 || 0})`
      )
      .on('click', (event, d) => {
        const node = d as unknown as TreeNode
        // Toggle children
        if (node.children) {
          node._children = node.children
          node.children = null as any // Force null for D3 collapse
        } else if (node._children) {
          node.children = node._children
          node._children = null
        } else {
          // Open link if lazy node
          if (node.data.link) {
            window.open(node.data.link, '_blank')
          }
          if (node.data.externalLinks && node.data.externalLinks.length > 0) {
            window.open(node.data.externalLinks[0].url, '_blank')
          }
        }
        updateGraph() // Re-render
      })
      .on('mouseover', (event, d) => {
        const node = d as unknown as TreeNode
        setActiveNode(node.data)
      })
    // .on('mouseout', () => {
    //     setActiveNode(null)
    // })

    // Circle for node
    nodeEnter
      .append('circle')
      .attr('r', 8) // Increased radius
      .attr('fill', (d) => (d._children ? '#f59e0b' : '#3b82f6')) // Amber for collapsed, Blue for expanded/leaf
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .attr('class', 'transition-colors duration-300 dark:stroke-gray-800')


    // Text Label
    nodeEnter
      .append('text')
      .attr('dy', '0.31em')
      .attr('x', (d) => (d.children || d._children ? -14 : 14)) // Increased spacing to prevent overlap
      .attr('text-anchor', (d) => (d.children || d._children ? 'end' : 'start'))
      .text((d) => d.data.label)
      .attr('class', 'text-sm font-medium dark:fill-gray-100 fill-gray-900 select-none shadow-sm') // Increased font size and weight
      .clone(true)
      .lower()
      .attr('stroke', 'white')
      .attr('stroke-width', 3)
      .attr('class', 'stroke-white dark:stroke-gray-900 text-sm font-medium')

    const nodeUpdate = nodeEnter.merge(nodeSelection)

    nodeUpdate
      .transition()
      .duration(500)
      .attr('transform', (d) => `translate(${d.y},${d.x})`)

    nodeUpdate
      .select('circle')
      .attr('fill', (d) => (d._children ? '#f59e0b' : '#3b82f6'))
      .attr('cursor', 'pointer')

    nodeSelection
      .exit()
      .transition()
      .duration(500)
      .attr('transform', (d) => {
        const parent = (d as any).parent as TreeNode
        return `translate(${parent?.y || 0},${parent?.x || 0})`
      })
      .remove()

    // Store old positions for transition
    nodes.forEach((d) => {
      d.x0 = d.x
      d.y0 = d.y
    })
  }, [])

  // Diagonal generator for curved links
  const diagonal = (s: { x: number; y: number }, d: { x: number; y: number }) => {
    return `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`
  }

  useEffect(() => {
    if (data) {
      try {
        // Initialize Hierarchy
        const root = d3.hierarchy<RoadmapNode>(data) as TreeNode
        root.x0 = 0
        root.y0 = 0

        // Collapse after depth 2 initially to avoid clutter
        // root.descendants().forEach((d) => {
        //     if (d.depth > 1 && d.children) {
        //         d._children = d.children
        //         d.children = null
        //     }
        // })

        rootRef.current = root
        updateGraph()
      } catch (err) {
        console.error('RoadmapGraph: Error in useEffect', err)
      }
    }
  }, [data, updateGraph])

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      updateGraph()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [updateGraph])

  return (
    <div
      ref={containerRef}
      className="relative h-[80vh] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-inner dark:border-gray-800 dark:bg-gray-900"
    >
      <svg ref={svgRef} className="h-full w-full cursor-grab active:cursor-grabbing">
        <g className="roadmap-container"></g>
      </svg>

      {/* Tooltip Overlay */}
      {activeNode && (
        <div className="z-10 max-w-xs rounded-lg border border-gray-100 bg-white p-4 shadow-lg transition-opacity duration-300 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-gray-100">
            {activeNode.label}
          </h3>
          {activeNode.description && (
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
              {activeNode.description}
            </p>
          )}
          {activeNode.externalLinks && activeNode.externalLinks.length > 0 && (
            <div className="mt-2">
              <h4 className="text-gray-500 uppercase mb-1 text-xs font-semibold">
                Resources
              </h4>
              <ul className="space-y-1">
                {activeNode.externalLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
