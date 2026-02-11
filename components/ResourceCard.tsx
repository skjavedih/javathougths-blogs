'use client'

import Link from 'next/link'

interface ResourceCardProps {
  title: string
  slug: string
  description: string
  icon: string
  pdfFileName: string
}

export default function ResourceCard({
  title,
  slug,
  description,
  icon,
  pdfFileName,
}: ResourceCardProps) {
  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // Track download count (fire-and-forget)
    fetch('/api/download-count', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    }).catch(() => { })

    // Programmatically download the PDF
    try {
      const response = await fetch(`/resources/${pdfFileName}`)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = pdfFileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      // Fallback: open the PDF directly
      window.open(`/resources/${pdfFileName}`, '_blank')
    }
  }

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
      {/* Icon & Title Section */}
      <div className="flex flex-col items-center px-6 pt-8 pb-4 text-center">
        <div className="from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-3xl shadow-sm transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{description}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto flex flex-col gap-3 px-6 pt-2 pb-6">
        <Link
          href={`/ai-engineering-resources/${slug}`}
          className="border-primary-500 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20 inline-flex items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all duration-200"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          View Guide
        </Link>
        <button
          onClick={handleDownload}
          className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download PDF
        </button>
      </div>
    </div>
  )
}
