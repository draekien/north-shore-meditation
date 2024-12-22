import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ButtonLink from '@/components/ui/button-link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();
  const giftCardVisible = currentMonth === 11 && currentDate >= 10 && currentDate <= 24;

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
          {giftCardVisible && (
            <Card className="relative mt-10 overflow-clip border-0 bg-white/30 backdrop-blur-3xl dark:bg-slate-700/30">
              <CardHeader>
                <CardTitle className="text-center">🎁 Give the Gift of TM 🎁</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex flex-col text-center">
                  <span className="text-secondary">Looking for a last minute gift idea for the holiday season?</span>
                  <span>Call us to find out how you can gift your loved ones</span>
                  <em className="text-secondary">the simplest technique</em>
                  <span>that will benefit all aspects of their life</span>
                  <small className="mt-10">
                    Gift the entire TM Course, or give a gift voucher that contributes to part of the tuition to learn
                    TM at North Shore TM centre in Lane Cove NSW Australia
                  </small>
                </p>
                <p className="text-center">
                  Call
                  <ButtonLink href="tel:0424450578" variant="link" className="px-2" prefetch={false}>
                    0424 450 578
                  </ButtonLink>
                  or email
                  <ButtonLink href="mailto:tm@northshoremeditation.au" variant="link" className="px-2" prefetch={false}>
                    tm@northshoremeditation.au
                  </ButtonLink>
                  for more details
                </p>
              </CardContent>
            </Card>
          )}
        </PageSectionContainer>
      </SecondaryPageSection>
    </PageContent>
  );
}
