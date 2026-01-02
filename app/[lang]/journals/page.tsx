import BuildingBlocks from '@/assets/undraw_building-blocks_h5jb.svg';
import ArticlePagination from '@/components/article-pagination';
import { Articles } from '@/components/articles';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import { baseKeywords } from '@/lib/constants';
import { getArticles } from '@/lib/contentful-api';
import type { GlobalPageProps } from '@/lib/types';
import { BookDashed } from 'lucide-react';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Image from 'next/image';

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
    metadataBase: new URL('https://www.northshoremeditation.au'),
    title: 'Notes from Stillness',
    description: 'Learn about TM from the teachers at North Shore Meditation',
    keywords: [...baseKeywords, 'journal'],
    alternates: {
      canonical: `/${lang}/journals`,
      languages: {
        en: '/en/journals',
      },
    },
    openGraph: {
      url: `/${lang}/journals`,
    },
  };
}

export default async function JournalsPage({ searchParams, params }: GlobalPageProps) {
  if (!searchParams) throw new Error('Missing search params');
  const { page = 1 } = await searchParams;
  const { lang } = await params;
  const { isEnabled } = await draftMode();

  const journals = await getArticles({
    limit: 10,
    preview: isEnabled,
    skip: (+page - 1) * 10,
  });

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center md:min-h-[50dvh] md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h1 className="text-primary">Notes from Stillness</h1>
              <p className="mb-6 text-xl text-foreground">
                Take a deep dive into Transcendental Meditation® with the guidance of the teachers at North Shore
                Meditation
              </p>
            </div>
          </div>
          {journals.total ? (
            <>
              <div className="pt-20" id="journals-list">
                <Articles articles={journals.items} lang={lang} />
              </div>
              <div className="mt-16">
                <ArticlePagination total={journals.total || 0} limit={10} />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-8">
              <Alert className="w-full bg-background/70 backdrop-blur-sm md:w-96">
                <BookDashed className="h-4 w-4" />
                <AlertTitle>You&apos;re Early!</AlertTitle>
                <AlertDescription>
                  We are still in the process of writing and finalising journals. Please check back in with us a bit
                  later.
                </AlertDescription>
              </Alert>
              <Image
                className="w-full md:w-80"
                src={BuildingBlocks}
                alt="An illustration of a man placing building blocks onto the page"
              />
            </div>
          )}
        </PageSectionContainer>
      </PrimaryPageSection>
    </PageContent>
  );
}
