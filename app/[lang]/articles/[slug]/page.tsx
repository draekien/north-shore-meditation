import { Articles } from '@/components/articles';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import ButtonLink from '@/components/ui/button-link';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import { baseKeywords } from '@/lib/constants';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/contentful-api';
import type { GlobalPageProps } from '@/lib/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// 1 hr
export const revalidate = 60 * 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const allPosts = await getBlogPosts({
    limit: 10,
  });

  return allPosts.items.map((post) => ({
    slug: post.slug!,
  }));
}

export async function generateMetadata({ params }: GlobalPageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!slug) return {};

  const blogPost = await getBlogPostBySlug({ slug });

  if (!blogPost) return {};

  const blogKeywords = blogPost.seo?.map((x) => x!) ?? [];
  const keywordsSet = new Set([...baseKeywords, ...blogKeywords]);

  return {
    title: blogPost.title,
    description: blogPost.summary,
    keywords: [...keywordsSet],
    alternates: {
      canonical: `/${lang}/articles/${slug}`,
      languages: {
        en: `/en/articles/${slug}`,
      },
    },
    openGraph: {
      url: `/${lang}/articles/${slug}`,
    },
  };
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
          <div className="mx-auto grid max-w-prose grid-cols-1 justify-items-center">
            <Breadcrumb className="mb-8 justify-self-start">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/articles">Articles</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{blogPost.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-primary">{blogPost.title}</h1>
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
              <h2 className="mb-8 text-center text-primary">Want to keep reading?</h2>
              <Articles articles={relatedArticles} />
            </div>
          </PageSectionContainer>
        </SecondaryPageSection>
      )}
    </PageContent>
  );
}
