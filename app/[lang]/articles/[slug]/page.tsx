import ButtonLink from '@/components/ui/button-link';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/contentful-api';
import type { GlobalPageProps } from '@/lib/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const allPosts = await getBlogPosts({
    limit: 10,
  });

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: GlobalPageProps) {
  const slug = (await params).slug;
  const { isEnabled } = await draftMode();

  if (!slug) return notFound();

  const blogPost = await getBlogPostBySlug({ slug, preview: isEnabled });

  console.log(blogPost);

  if (!blogPost?.content) return notFound();

  const relatedArticles = blogPost.relatedPostsCollection?.items?.filter((x) => !!x) ?? [];
  const hasRelatedArticles = !!relatedArticles.length;

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="grid grid-cols-1 justify-items-center">
            <h1>{blogPost.title}</h1>
            <p className="mb-10 text-sm text-muted-foreground">
              {blogPost.author} | {new Date(blogPost.sys.publishedAt).toLocaleDateString()}
            </p>
            <div className="max-w-[900px] space-y-4 md:text-xl lg:text-base xl:text-xl">
              {documentToReactComponents(blogPost.content.json, {
                renderNode: {
                  [INLINES.HYPERLINK]: (node, children) => (
                    <ButtonLink
                      variant="link"
                      className="h-auto w-auto px-0 py-0 md:text-xl lg:text-base xl:text-xl"
                      href={node.data.uri}
                    >
                      {children}
                    </ButtonLink>
                  ),
                  [BLOCKS.EMBEDDED_ASSET]: (node) => {
                    const embeddedAsset = blogPost.content!.links.assets.block.find(
                      (x) => x!.sys.id == node.data.target.sys.id
                    );
                    if (!embeddedAsset) return null;

                    return <Image src={embeddedAsset.url!} alt={embeddedAsset.description!} width={400} height={270} />;
                  },
                },
              })}
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      {hasRelatedArticles && (
        <SecondaryPageSection>
          <PageSectionContainer>
            <div className="space-y-14">
              <h2 className="mb-8">Want to keep reading?</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((article) => (
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
            </div>
          </PageSectionContainer>
        </SecondaryPageSection>
      )}
    </PageContent>
  );
}
