'use client'

import { useEffect, useState } from 'react'
import { useIsAdmin } from '../hooks/useIsAdmin'

export default function LikeButton({ slug }: { slug: string }) {
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const key = `like-count-${slug}`
    const userLikedKey = `user-liked-${slug}`

    const storedLikes = localStorage.getItem(key)
    const storedUserLiked = localStorage.getItem(userLikedKey)

    setLikes(storedLikes ? parseInt(storedLikes, 10) : 0)
    setIsLiked(storedUserLiked === 'true')
  }, [slug])

  const handleLike = () => {
    const key = `like-count-${slug}`
    const userLikedKey = `user-liked-${slug}`

    let newLikes = likes
    const newIsLiked = !isLiked

    if (newIsLiked) {
      newLikes += 1
    } else {
      newLikes -= 1
    }

    localStorage.setItem(key, newLikes.toString())
    localStorage.setItem(userLikedKey, newIsLiked.toString())

    setLikes(newLikes)
    setIsLiked(newIsLiked)
  }

  const isAdmin = useIsAdmin()
  if (!isAdmin) {
    return null
  }

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-1 rounded-md px-2 py-1 transition-colors ${
        isLiked
          ? 'text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
          : 'text-gray-500 hover:bg-gray-100 hover:text-red-500 dark:text-gray-400 dark:hover:bg-gray-800'
      }`}
      aria-label="Like this post"
    >
      <svg
        className={`h-5 w-5 ${isLiked ? 'fill-current' : 'fill-none'}`}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>{likes}</span>
    </button>
  )
}
