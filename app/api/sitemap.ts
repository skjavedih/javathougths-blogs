import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://javathoughts.com',
            lastModified: new Date(),
        },
    ]
}
