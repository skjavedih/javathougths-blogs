import Link from '@/components/Link'

interface PaginationProps {
  totalPages: number
  currentPage: number
  basePath?: string
}

export default function Pagination({
  totalPages,
  currentPage,
  basePath = 'blog',
}: PaginationProps) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  const getLink = (page: number) => {
    if (page === 1) {
      // If we are on home (basePath is empty), go to '/'
      // If we are on blog (basePath is 'blog'), go to '/blog'
      return basePath ? `/${basePath}` : '/'
    }
    return basePath ? `/${basePath}/page/${page}` : `/page/${page}`
  }

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link href={getLink(currentPage - 1)} rel="prev">
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={getLink(currentPage + 1)} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}
