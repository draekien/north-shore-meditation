import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ButtonLink from '@/components/ui/button-link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { GlobalPageProps } from '@/lib/types';
import type { Metadata } from 'next';
import { getDictionary } from '../../dictionaries';

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
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

export default async function IndividualProgramsPage({ params: { lang } }: GlobalPageProps) {
  const {
    pages: { individualMeditation },
  } = await getDictionary(lang);

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <h1 className="text-primary">{individualMeditation.title}</h1>
          <Tabs className="mt-8" defaultValue={individualMeditation.tabs[0].title}>
            <TabsList className="bg-muted/50">
              {individualMeditation.tabs.map((tab) => (
                <TabsTrigger key={tab.title} value={tab.title}>
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {individualMeditation.tabs.map((tab) => (
              <TabsContent key={tab.title} value={tab.title} className="mt-6">
                <article>
                  <h2 className="hidden">{tab.title}</h2>
                  <p>{tab.subtitle}</p>
                  <Accordion type="multiple" className="my-4">
                    {tab.keyFeatures.map((feature) => (
                      <AccordionItem key={feature.title} value={feature.title}>
                        <AccordionTrigger className="flex-row-reverse justify-end gap-2">
                          {feature.title}
                        </AccordionTrigger>
                        <AccordionContent>{feature.description}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <Card>
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
                </article>
              </TabsContent>
            ))}
          </Tabs>
        </PageSectionContainer>
      </PrimaryPageSection>
    </PageContent>
  );
}
