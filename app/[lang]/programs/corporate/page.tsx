import type { TmStatsChartProps } from '@/components/tm-stats-chart';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ButtonLink from '@/components/ui/button-link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import type { GlobalPageProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getDictionary } from '../../dictionaries';

const DynamicChart = dynamic(() => import('@/components/tm-stats-chart'), {
  loading: () => <Skeleton className="h-[200px] w-full" />,
});

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
    title: 'Transcendental Meditation Programs for Businesses',
    description:
      'Transcendental Meditation is proven to improve workplace relations, forster a culture of collaboration, boost productivity and job satisfaction, prevent workplace mental health issues, and create a more engaged and resilient team. Discover corporate TM programs at North Shore Meditation.',
    alternates: {
      canonical: `/${lang}/programs/corporate`,
      languages: {
        en: '/en/programs/corporate',
      },
    },
    openGraph: {
      url: `/${lang}/programs/corporate`,
    },
  };
}

export default async function CorporateProgramsPage({ params: { lang } }: GlobalPageProps) {
  const {
    pages: { corporateMeditation },
  } = await getDictionary(lang);

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center md:min-h-[50dvh] md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-primary">{corporateMeditation.title}</h1>
              <p className="mb-6 text-xl text-foreground">{corporateMeditation.subtitle}</p>
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <h2 className="text-primary">{corporateMeditation.introduction.title}</h2>
          <p>{corporateMeditation.introduction.paragraph}</p>
          <Accordion type="multiple" className="my-4">
            {corporateMeditation.keyFeatures.map((feature) => (
              <AccordionItem key={feature.title} value={feature.title}>
                <AccordionTrigger className="flex-row-reverse justify-end gap-2 text-left">
                  {feature.title}
                </AccordionTrigger>
                <AccordionContent className="text-left">{feature.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="my-4 grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-3">
            {corporateMeditation.science.cards.map(({ title, description, citation, chart }, index) => (
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
          <Card className="border-0 bg-white/30 backdrop-blur-3xl dark:bg-slate-700/30">
            <CardHeader>
              <CardTitle>{corporateMeditation.cta.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{corporateMeditation.cta.subtitle}</p>
            </CardContent>
            <CardFooter>
              <ButtonLink size="lg" className="w-full" href={corporateMeditation.cta.href}>
                {corporateMeditation.cta.action}
              </ButtonLink>
            </CardFooter>
          </Card>
        </PageSectionContainer>
      </SecondaryPageSection>
    </PageContent>
  );
}
