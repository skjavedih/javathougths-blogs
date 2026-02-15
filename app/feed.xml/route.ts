import { escape } from 'pliny/utils/htmlEscaper'
import siteMetadata from '@/data/siteMetadata'
import { allBlogs } from 'contentlayer/generated'
import { sortPosts } from 'pliny/utils/contentlayer'
import Rss from 'rss'
import { headers } from 'next/headers'

/* eslint-disable @typescript-eslint/no-explicit-any */

export const dynamic = 'force-static'

const generateRssItem = (config: any, post: any) => `
  <item>
    <guid>${config.siteUrl}/blog/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${config.siteUrl}/blog/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${config.email} (${config.author})</author>
    ${post.tags && post.tags.map((t: string) => `<category>${t}</category>`).join('')}
  </item>
`

const generateRss = (config: any, posts: any, page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(config.title)}</title>
      <link>${config.siteUrl}/blog</link>
      <description>${escape(config.description)}</description>
      <language>${config.language}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${config.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post: any) => generateRssItem(config, post)).join('')}
    </channel>
  </rss>
`

export async function GET() {
  const publishPosts = allBlogs.filter((post) => post.draft !== true)
  // @ts-ignore
  const sortedPosts = sortPosts(publishPosts)
  const rss = generateRss(siteMetadata, sortedPosts)

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
