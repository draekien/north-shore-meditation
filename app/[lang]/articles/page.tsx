import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import { getBlogPosts } from '@/lib/contentful-api';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

export default async function ArticlesPage() {
  const { isEnabled } = await draftMode();

  const blogPosts = await getBlogPosts({
    limit: 10,
    preview: isEnabled,
  });

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center md:min-h-[50dvh] md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h1 className="text-primary">Recent Articles</h1>
              <p className="mb-6 text-xl text-foreground">Take a deep dive into the benefits and science behind TM.</p>
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((article) => (
              <article key={article.sys.id} className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg">
                {article.image?.url && (
                  <Image
                    alt={article.image.title ?? `Image for ${article.title}`}
                    className="aspect-[4/3] w-full object-cover"
                    height={article.image.height ?? '263'}
                    src={article.image.url}
                    width={article.image.width ?? '350'}
                  />
                )}
                <div className="flex-1 p-6">
                  <Link href={`/articles/${article.slug}`}>
                    <h3 className="py-4 text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="mb-2 mt-4 max-w-none text-sm text-zinc-500 dark:text-zinc-400">{article.summary}</p>
                  <p className="mb-2 mt-2 max-w-none text-sm font-bold text-zinc-600 dark:text-zinc-400">
                    Written by: {article.author}
                  </p>
                  <div className="flex justify-end">
                    <Link
                      className="inline-flex h-10 items-center justify-center text-sm font-medium"
                      href={`/articles/${article.slug}`}
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </PageSectionContainer>
      </SecondaryPageSection>
    </PageContent>
  );
}
