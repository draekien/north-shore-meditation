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
import { getAllArticles, getArticlesBySlug } from '@/lib/contentful-api';
import type { GlobalPageProps } from '@/lib/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// 1 hr
export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const allPosts = await getAllArticles();

  return allPosts.items
    .filter((post) => post?.slug)
    .map((post) => ({
      slug: post!.slug,
    }));
}

export async function generateMetadata({ params }: GlobalPageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!slug) return {};

  let blogPost;

  try {
    blogPost = await getArticlesBySlug({ slug });
  } catch (error) {
    console.log('Failed to get article by slug: ', error);
    return {};
  }

  if (!blogPost) return {};

  const blogKeywords = blogPost.seo?.map((x) => x!) ?? [];
  const keywordsSet = new Set([...baseKeywords, ...blogKeywords]);

  return {
    metadataBase: new URL('https://www.northshoremeditation.au'),
    title: blogPost.title,
    description: blogPost.summary,
    keywords: [...keywordsSet],
    alternates: {
      canonical: `/${lang}/journals/${slug}`,
      languages: {
        en: `/en/journals/${slug}`,
      },
    },
    openGraph: {
      url: `/${lang}/journals/${slug}`,
    },
  };
}

export default async function JournalPage({ params }: GlobalPageProps) {
  const { slug, lang } = await params;
  const { isEnabled } = await draftMode();

  if (!slug) return notFound();

  const article = await getArticlesBySlug({ slug, preview: isEnabled });

  if (!article?.content) return notFound();

  const relatedArticles = article.relatedPostsCollection?.items?.filter((x) => !!x) ?? [];
  const hasRelatedArticles = !!relatedArticles.length;

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="mx-auto grid max-w-prose grid-cols-1 justify-items-center">
            <Breadcrumb className="mb-8 justify-self-start">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/journals">Notes from Stillness</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{article.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-primary">{article.title}</h1>
            <p className="text-muted-foreground mb-10 text-sm">
              {article.author} | {new Date(article.sys.publishedAt).toLocaleDateString()}
            </p>
            <div className="max-w-225 space-y-4 md:text-xl lg:text-base xl:text-xl">
              {documentToReactComponents(article.content.json, {
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
                    const embeddedAsset = article.content!.links.assets.block.find(
                      (x) => x!.sys.id == node.data.target.sys.id
                    );
                    if (!embeddedAsset) return null;

                    return <Image src={embeddedAsset.url!} alt={embeddedAsset.description!} width={400} height={270} />;
                  },
                  [BLOCKS.PARAGRAPH]: (node, children) => {
                    const { content } = node;
                    const isEmpty = content.every((x) => x.nodeType === 'text' && x.value === '');

                    return isEmpty ? (
                      <br />
                    ) : (
                      <p className="text-foreground text-base md:text-xl lg:text-base xl:text-xl">{children}</p>
                    );
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
              <h2 className="text-primary mb-8 text-center">Want to keep reading?</h2>
              <Articles articles={relatedArticles} lang={lang} />
            </div>
          </PageSectionContainer>
        </SecondaryPageSection>
      )}
    </PageContent>
  );
}
