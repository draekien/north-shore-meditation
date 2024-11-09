import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ButtonLink from '@/components/ui/button-link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import type { GlobalPageProps } from '@/lib/types';
import type { Metadata } from 'next';
import { getDictionary } from '../../dictionaries';

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
    title: 'Transcendental Meditation Programs for Businesses',
    description: '',
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
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eaque aliquam corrupti suscipit soluta
            nulla temporibus at quam, consectetur commodi. A rem dolore nobis incidunt qui nulla consequuntur eaque
            officia.
          </p>
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
