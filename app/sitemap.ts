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

function createSitemapEntry(options?: CreateSitemapEntryOptions): MetadataRoute.Sitemap[0] {
  return {
    url: createUrl(options?.path),
    alternates: createLocalizedUrls(options?.path),
    lastModified: new Date(),
    priority: options?.priority ?? 0.5,
    changeFrequency: options?.changeFrequency ?? 'weekly',
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];
}
