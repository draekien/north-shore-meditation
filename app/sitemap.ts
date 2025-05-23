import { getAllArticles } from '@/lib/contentful-api';
import { MetadataRoute } from 'next';

function createUrl(path?: string) {
  return `https://www.northshoremeditation.au${path || ''}`;
}

function createLocalizedUrls(path?: string) {
  return {
    languages: {
      en: `${createUrl()}/en${path || ''}`,
    },
  };
}

type CreateSitemapEntryOptions = {
  path?: string;
  priority?: number;
  changeFrequency?: MetadataRoute.Sitemap[0]['changeFrequency'];
};

export function createSitemapEntry(options?: CreateSitemapEntryOptions): MetadataRoute.Sitemap[0] {
  return {
    url: createUrl(options?.path),
    alternates: createLocalizedUrls(options?.path),
    lastModified: new Date(),
    priority: options?.priority ?? 0.5,
    changeFrequency: options?.changeFrequency ?? 'weekly',
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getAllArticles();

  return [
    createSitemapEntry({
      priority: 1,
    }),
    createSitemapEntry({
      path: '/tm',
      priority: 0.8,
    }),
    createSitemapEntry({
      path: '/tm/your-choice',
      priority: 0.8,
    }),
    createSitemapEntry({
      path: '/tm/your-way',
      priority: 0.8,
    }),
    createSitemapEntry({
      path: '/about-us',
      priority: 0.7,
    }),
    createSitemapEntry({
      path: '/contact-us',
      priority: 0.6,
    }),
    createSitemapEntry({
      path: '/privacy-notice',
      priority: 0.1,
    }),
    createSitemapEntry({
      path: '/programs/individuals',
      priority: 0.7,
    }),
    createSitemapEntry({
      path: '/programs/corporate',
      priority: 0.7,
    }),
    createSitemapEntry({
      path: '/journals',
      priority: 0.7,
    }),
    ...allPosts.items.map((post) => ({
      ...createSitemapEntry({
        path: `/journals/${post!.slug}`,
        priority: 0.8,
      }),
      lastModified: post!.sys.publishedAt,
    })),
  ];
}
