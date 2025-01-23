import ButtonLink from '@/components/ui/button-link';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import { getAllBlogPosts, getBlogPost } from '@/lib/contentful-api';
import type { GlobalPageProps } from '@/lib/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const allPosts = await getAllBlogPosts(10);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: GlobalPageProps) {
  const slug = (await params).slug;
  const { isEnabled } = await draftMode();

  if (!slug) return notFound();

  const blogPost = await getBlogPost(slug, isEnabled);

  if (!blogPost) return notFound();

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
                    const embeddedAsset = blogPost.content.links.assets.block.find(
                      (x) => x.sys.id == node.data.target.sys.id
                    );
                    if (!embeddedAsset) return null;

                    return <Image src={embeddedAsset.url} alt={embeddedAsset.description} width={400} height={270} />;
                  },
                },
              })}
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
    </PageContent>
  );
}
