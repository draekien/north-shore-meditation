import { type TmStatsChartProps } from '@/components/tm-stats-chart';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { baseKeywords } from '@/lib/constants';
import type { GlobalPageProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import maharishi from '@/public/maharishi.webp';
import omegaSvg from '@/public/undraw_omega_-4-kob.svg';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getDictionary } from '../../dictionaries';

const DynamicChart = dynamic(() => import('@/components/tm-stats-chart'), {
  loading: () => <Skeleton className="h-[200px] w-full" />,
});

export const metadata: Metadata = {
  title: 'The Science behind Transcendental Meditation®',
  description: 'Discover the science backing the TM technique along with its origins with Maharishi Yogi',
  keywords: [...baseKeywords, 'Science', 'Health', 'Origins', 'History'],
  alternates: {
    canonical: '/tm/your-choice',
    languages: {
      en: '/en/tm/your-choice',
    },
  },
};

export default async function YourChoicePage({ params: { lang } }: GlobalPageProps) {
  const {
    pages: { choice },
  } = await getDictionary(lang);

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center gap-8 py-8 md:min-h-[50dvh] md:flex-row">
            <div className="md:mb-0 md:w-1/2">
              <h1 className="text-primary">{choice.title}</h1>
              <p className="text-xl text-foreground">{choice.subtitle}</p>
            </div>
            <div className="md:mb-0 md:w-1/2">
              <Image src={omegaSvg} alt="" />
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="md:w-1/3">
              <Image
                src={maharishi}
                alt="Maharishi Mahesh Yogi during a 1979 visit to MUM"
                className="rounded-lg shadow-lg"
                placeholder="blur"
              />
            </div>
            <div className="max-w-3xl md:w-2/3">
              <h2 className="text-primary">{choice.sections.origins.title}</h2>
              {choice.sections.origins.paragraphs.map((text) => (
                <p key={text} className="text-foreground">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </PageSectionContainer>
      </SecondaryPageSection>
      <PrimaryPageSection>
        <PageSectionContainer>
          <h2 className="text-primary">{choice.sections.science.title}</h2>
          <p className="mb-4">{choice.sections.science.description}</p>
          <div className="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-3">
            {choice.sections.science.cards.map(({ title, description, citation, chart }, index) => (
              <Card
                key={title}
                className={cn(
                  `row-span-1 ${index === 3 || index === 6 ? 'md:col-span-2' : ''}`,
                  'border-0 bg-white/30 backdrop-blur-3xl',
                  'dark:bg-slate-700/30'
                )}
              >
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>{chart && <DynamicChart {...(chart as unknown as TmStatsChartProps)} />}</CardContent>
                <CardFooter>
                  <div className="flex w-full items-start gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={citation.doi}
                          className="w-full hover:text-primary focus:text-primary"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <cite className="block truncate text-sm">{citation.name}</cite>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">{citation.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 md:mt-16">
            <h3 className="mb-4 text-primary">Definitions</h3>
            <dl>
              {choice.sections.science.definitions.map(({ key, value, href }) => (
                <Fragment key={key}>
                  <dt className="font-semibold underline underline-offset-1">
                    {href ? (
                      <Link href={href} className="hover:text-primary focus:text-primary" rel="noreferrer noopener">
                        {key}
                      </Link>
                    ) : (
                      key
                    )}
                  </dt>
                  <dd className="mb-2">
                    <blockquote>{value}</blockquote>
                  </dd>
                </Fragment>
              ))}
            </dl>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
    </PageContent>
  );
}
