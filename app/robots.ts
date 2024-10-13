import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/_next/static/media', '/_next/static/css', '/_next/static/chunks'],
      disallow: ['/api/', '/public/', '/_next/', '/404.html', '/blocked'],
    },
    sitemap: 'https://www.northshoremeditation.au/sitemap.xml',
  };
}
