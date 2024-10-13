import { Card, CardContent, CardHeader } from '@/components/ui/card';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import { baseKeywords } from '@/lib/constants';
import type { GlobalPageProps } from '@/lib/types';
import bird from '@/public/bird.webp';
import { Brain, Clock, Feather, Microscope } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '../dictionaries';

export const metadata: Metadata = {
  title: 'What Is Transcendental Meditation®',
  description:
    'Explore the simplicity and power of a practice that requires no concentration, no control of the mind, and no monitoring of thoughts.',
  keywords: [...baseKeywords, 'How', 'Work', 'Natural', 'Technique'],
  alternates: {
    canonical: '/tm',
    languages: {
      en: '/en/tm',
    },
  },
};

export default async function Tm({ params: { lang } }: GlobalPageProps) {
  const {
    pages: { tm },
  } = await getDictionary(lang);

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center md:min-h-[50dvh] md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h1 className="text-primary">{tm.title}</h1>
              <p className="mb-6 text-xl text-foreground">{tm.subtitle}</p>
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="md:w-1/2">
              <Image src={bird} alt="" className="rounded-xl opacity-90" placeholder="blur" />
            </div>
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="mx-auto mb-12 max-w-3xl text-primary">{tm.sections.whatIsTm.title}</h2>
              <div className="mx-auto max-w-3xl">
                {tm.sections.whatIsTm.paragraphs.map((text) => (
                  <p key={text} className="text-lg">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </PageSectionContainer>
      </SecondaryPageSection>
      <PrimaryPageSection>
        <PageSectionContainer>
          <h2 className="mb-12 text-primary">{tm.sections.keyFeatures.title}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Effortless', icon: <Feather className="h-10 w-10 text-teal-500" /> },
              { title: 'Natural', icon: <Brain className="h-10 w-10 text-amber-400" /> },
              { title: 'Quick', icon: <Clock className="h-10 w-10 text-rose-400" /> },
              { title: 'Effective', icon: <Microscope className="h-10 w-10 text-indigo-500" /> },
            ]
              .map(({ title, icon }) => {
                const card = tm.sections.keyFeatures.cards.find((x) => x.title === title);

                if (!card) throw new Error(`Missing card with title inside key features section ${title}`);

                return {
                  icon,
                  ...card,
                };
              })
              .map(({ title, icon, description }) => (
                <Card key={title} className="bg-card/80 backdrop-blur-xl">
                  <CardHeader>{icon}</CardHeader>
                  <CardContent>
                    <h3 className="text-primary">{title}</h3>
                    <p>{description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <h2 className="mb-8 text-center text-primary">{tm.sections.howItWorks.title}</h2>
          <div className="mx-auto max-w-3xl">
            <ol className="mx-4 list-decimal space-y-6 text-lg">
              {tm.sections.howItWorks.steps.map((step) => (
                <li key={step.title}>
                  <h3 className="text-lg text-primary">{step.title}</h3>
                  {step.description}
                </li>
              ))}
            </ol>
          </div>
        </PageSectionContainer>
      </SecondaryPageSection>
    </PageContent>
  );
}
