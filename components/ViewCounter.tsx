'use client'

import { useEffect, useState } from 'react'
import { useIsAdmin } from '../hooks/useIsAdmin'

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const isAdmin = useIsAdmin()

  useEffect(() => {
    const trackView = async () => {
      try {
        // Always increment the view count when the page loads
        const response = await fetch(`/api/views/${slug}`, {
          method: 'POST',
        })

        if (response.ok) {
          const data = await response.json()
          setViews(data.count)
        }
      } catch (error) {
        console.error('Error tracking view:', error)
      } finally {
        setLoading(false)
      }
    }

    trackView()
  }, [slug])

  // Only show view count to admins
  if (!isAdmin) {
    return null
  }

  if (loading) {
    return (
      <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <svg
          className="mr-1 h-4 w-4 animate-spin"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Loading...
      </span>
    )
  }

  return (
    <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
      <svg
        className="mr-1 h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      {views !== null ? `${views} views` : 'N/A'}
    </span>
  )
}
