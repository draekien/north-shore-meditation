import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import { getAllBlogPosts } from '@/lib/contentful-api';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <h1>Welcome to the North Shore Meditation Blog</h1>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts?.map((article) => (
              <article key={article.sys.id} className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg">
                <Image
                  alt={article.image.title}
                  className="aspect-[4/3] w-full object-cover"
                  height="263"
                  src={article.image.url}
                  width="350"
                />
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
                      href={`/blog/${article.slug}`}
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
