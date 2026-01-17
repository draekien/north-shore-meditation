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
import { Item, ItemContent, ItemDescription, ItemGroup, ItemTitle } from '@/components/ui/item';

const DynamicChart = dynamic(() => import('@/components/tm-stats-chart'), {
  loading: () => <Skeleton className="h-50 w-full" />,
});

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
    metadataBase: new URL('https://www.northshoremeditation.au'),
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

export default async function CorporateProgramsPage({ params }: GlobalPageProps) {
  const { lang } = await params;
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
              <p className="text-foreground mb-6 text-xl">{corporateMeditation.subtitle}</p>
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <h2 className="text-primary">{corporateMeditation.introduction.title}</h2>
          {corporateMeditation.introduction.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <Accordion type="multiple" className="my-8">
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
                          className="hover:text-primary focus:text-primary w-full"
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
      <PrimaryPageSection>
        <PageSectionContainer>
          <h2 className="text-primary">The 4-Month Integration Journey</h2>
          <small>A structured engagement to turn deep rest into a permanent leadership habit.</small>
          <h3 className="mt-8">Phase 1: The Foundation</h3>
          <small>Month 1</small>
          <p>Establish an effortless, self-sufficient technique.</p>
          <ItemGroup className="md:grid md:grid-cols-3">
            <Item>
              <ItemContent>
                <ItemTitle>The Orientation</ItemTitle>
                <ItemDescription>A briefing to align objectives and explain the neurophysiology of TM</ItemDescription>
              </ItemContent>
            </Item>
            <Item>
              <ItemContent>
                <ItemTitle>Core Instruction</ItemTitle>
                <ItemDescription>Delivered over four consecutive days (1.5 - 2 hours per day)</ItemDescription>
              </ItemContent>
            </Item>
            <Item>
              <ItemContent>
                <ItemTitle>The ROI</ItemTitle>
                <ItemDescription>
                  Immediate reduction in cortisol and a baseline shift in mental clarity and focus
                </ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
          <h3 className="mt-8">Phase 2: Strategic Integration</h3>
          <small>Months 2 - 3</small>
          <p>Bridge the gap between the meditation mat and the boardroom.</p>
          <ItemGroup className="md:grid md:grid-cols-3">
            <Item>
              <ItemContent>
                <ItemTitle>The "Quiet Mind" at Work</ItemTitle>
                <ItemDescription>
                  Specialized sessions on using clarity for better decision-making and emotional intelligence
                </ItemDescription>
              </ItemContent>
            </Item>
            <Item>
              <ItemContent>
                <ItemTitle>The Strategic Health Vision</ItemTitle>
                <ItemDescription>
                  A coaching session to build your "Health Business Plan", ensuring your physical resilience matches
                  your long-term professional ambition
                </ItemDescription>
              </ItemContent>
            </Item>
            <Item>
              <ItemContent>
                <ItemTitle>Accountability</ItemTitle>
                <ItemDescription>
                  Regular group checking to ensure the habit remains stable during high-demand cycles
                </ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
          <h3 className="mt-8">Phase 3: The Executive Reset</h3>
          <small>Month 4</small>
          <p>Consolidate long-term vitality and habit consistency</p>
          <ItemGroup className="md:grid md:grid-cols-3">
            <Item>
              <ItemContent>
                <ItemTitle>Capstone Retreat</ItemTitle>
                <ItemDescription>
                  A half-day immersion in Maharishi Yoga Asana and breathing techniques to deepen the recovery response
                </ItemDescription>
              </ItemContent>
            </Item>
            <Item>
              <ItemContent>
                <ItemTitle>Natural Rhythms</ItemTitle>
                <ItemDescription>
                  Utilizing Ayurvedic principles for energy management, sleep quality, and peak performance
                </ItemDescription>
              </ItemContent>
            </Item>
            <Item>
              <ItemContent>
                <ItemTitle>The ROI</ItemTitle>
                <ItemDescription>
                  A resilient, revitalized team with a shared culture of sustainable excellence
                </ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
          <Card className="mt-6 border-0 bg-white/50 shadow-none backdrop-blur-3xl dark:bg-slate-700/50">
            <CardHeader>
              <CardTitle>Build a More Resilient Workplace</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{corporateMeditation.cta.subtitle}</p>
            </CardContent>
            <CardFooter>
              <ButtonLink size="lg" className="w-full" href={corporateMeditation.cta.href}>
                Book an Executive Briefing
              </ButtonLink>
            </CardFooter>
          </Card>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <h2 className="text-primary">Bespoke Talks &amp; Interactive Workshops</h2>
          <small>Strategic insights for your next wellbeing initiative or leadership retreat</small>
          <p>
            Looking for a high-impact session to plug into your annual wellbeing program or a special awareness day like
            "R U OK Day"? We offer bespoke corporate talks designed to introduce the science of resilience to your
            organization.
          </p>
          <ItemGroup className="mt-6 grid-cols-2 md:grid">
            <Item>
              <ItemContent>
                <ItemTitle>Duration</ItemTitle>
                <ItemDescription>Minimum 60 minutes (Onsite or Online)</ItemDescription>
              </ItemContent>
            </Item>
            <Item>
              <ItemContent>
                <ItemTitle>The Science of Stress Management</ItemTitle>
                <ItemDescription>Understanding the "de-excitation" response and its impact on burnout</ItemDescription>
              </ItemContent>
            </Item>
            <Item>
              <ItemContent>
                <ItemTitle>Leadership from Within</ItemTitle>
                <ItemDescription>
                  How a "Quiet Mind" improves decision-making and emotional intelligence
                </ItemDescription>
              </ItemContent>
            </Item>
            <Item>
              <ItemContent>
                <ItemTitle>The Ayurvedic Professional</ItemTitle>
                <ItemDescription>Ancient wisdom for energy management, sleep, and longevity</ItemDescription>
              </ItemContent>
            </Item>
            <Item>
              <ItemContent>
                <ItemTitle>Women's Wellbeing &amp; Leadership</ItemTitle>
                <ItemDescription>Supporting health and performance through every life stage</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
          <Card className="mt-6 border-0 shadow-none">
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
