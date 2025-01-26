import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ButtonLink from '@/components/ui/button-link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChristmasGiftCard } from '@/components/ui/christmas-gift-card';
import { EverydayGiftCard } from '@/components/ui/everyday-gift-card';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { GlobalPageProps } from '@/lib/types';
import type { Metadata } from 'next';
import { getDictionary } from '../../dictionaries';

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
    metadataBase: new URL('https://www.northshoremeditation.au'),
    title: 'Transcendental Meditation Programs for Individuals',
    description:
      'North Shore Meditation offers a range of Transcendental Meditation® programs for individuals ranging from Group Sessions, Private Sessions, and One Day Meditation Retreats.',
    alternates: {
      canonical: `/${lang}/programs/individuals`,
      languages: {
        en: `/en/programs/individuals`,
      },
    },
    openGraph: {
      url: `/${lang}/programs/individuals`,
    },
  };
}

export default async function IndividualProgramsPage({ params }: GlobalPageProps) {
  const { lang } = await params;
  const {
    pages: { individualMeditation },
  } = await getDictionary(lang);

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center md:min-h-[50dvh] md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-primary">{individualMeditation.title}</h1>
              <p className="mb-6 text-xl text-foreground">{individualMeditation.subtitle}</p>
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <Tabs defaultValue={individualMeditation.tabs[0].title}>
            <TabsList className="h-auto flex-wrap bg-muted/50">
              {individualMeditation.tabs.map((tab) => (
                <TabsTrigger key={tab.title} value={tab.title}>
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {individualMeditation.tabs.map((tab) => (
              <TabsContent key={tab.title} value={tab.title} className="mt-6">
                <h2 className="hidden">{tab.title}</h2>
                <p>{tab.subtitle}</p>
                <Accordion type="multiple" className="my-4">
                  {tab.keyFeatures.map((feature) => (
                    <AccordionItem key={feature.title} value={feature.title}>
                      <AccordionTrigger className="flex-row-reverse justify-end gap-2 text-left">
                        {feature.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-left">{feature.description}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Card className="border-0 bg-white/30 backdrop-blur-3xl dark:bg-slate-700/30">
                  <CardHeader>
                    <CardTitle>{tab.cta.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{tab.cta.subtitle}</p>
                  </CardContent>
                  <CardFooter>
                    <ButtonLink size="lg" className="w-full" href={tab.cta.href}>
                      {tab.cta.action}
                    </ButtonLink>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
          <ChristmasGiftCard />
          <EverydayGiftCard />
        </PageSectionContainer>
      </SecondaryPageSection>
    </PageContent>
  );
}
