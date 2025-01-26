import { createSitemapEntry } from '@/app/sitemap';
import { getArticles } from '@/lib/contentful-api';
import type { MetadataRoute } from 'next';

export async function generateSitemaps() {
  const allPosts = await getArticles({
    limit: 1,
  });

  const pages = Math.ceil(allPosts.total! / 100);

  return [...new Array(pages).keys().map((i) => ({ id: i }))];
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getArticles({
    limit: 100,
    skip: id * 100,
  });

  return allPosts.items.map((post) => ({
    ...createSitemapEntry({
      path: `/articles/${post.slug}`,
      priority: 0.7,
    }),
    lastModified: post.sys.publishedAt,
  }));
}
