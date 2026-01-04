import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

const POSTS_PER_PAGE = 4

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs.filter((p) => p.draft !== true))
  const posts = allCoreContent(sortedPosts)
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return <Main posts={initialDisplayPosts} pagination={pagination} />
}
