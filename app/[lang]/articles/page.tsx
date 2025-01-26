import { Articles } from '@/components/articles';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import { baseKeywords } from '@/lib/constants';
import { getBlogPosts } from '@/lib/contentful-api';
import type { GlobalPageProps } from '@/lib/types';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
    title: 'Articles',
    description: 'Learn about TM from the teachers at North Shore Meditation',
    keywords: [...baseKeywords, 'articles'],
    alternates: {
      canonical: `/${lang}/articles`,
      languages: {
        en: '/en/articles',
      },
    },
    openGraph: {
      url: `/${lang}/articles`,
    },
  };
}

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
              <h1 className="text-primary">Articles</h1>
              <p className="mb-6 text-xl text-foreground">
                Take a deep dive into Transcendental Meditation® with the guidance of the teachers at North Shore
                Meditation
              </p>
            </div>
          </div>
          <Articles articles={blogPosts} />
        </PageSectionContainer>
      </PrimaryPageSection>
    </PageContent>
  );
}
