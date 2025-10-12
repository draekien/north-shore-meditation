import superWomanSvg from '@/assets/undraw_super-woman_6nx2.svg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import { baseKeywords } from '@/lib/constants';
import type { GlobalPageProps } from '@/lib/types';
import { BookOpenIcon, CalendarIcon, HeartPlusIcon, ShieldIcon, UsersIcon, WaypointsIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '../dictionaries';

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
    metadataBase: new URL('https://www.northshoremeditation.au'),
    title: 'TM for Women',
    description:
      'Discover TM for Women at North Shore Meditation. A supportive community for mothers, executives, students, and carers. Learn meditation in a women-only setting with life-stage support for pregnancy, menopause, parenting, and career transitions.',
    keywords: [
      ...baseKeywords,
      'transcendental meditation for women',
      "women's meditation",
      'meditation for mothers',
      'women-only meditation classes',
      'meditation for menopause',
      'meditation for pregnancy',
      "women's meditation group",
      'meditation for working mothers',
      "women's wellness",
      'stress relief for women',
      'meditation North Shore',
      "women's mindfulness",
      'postpartum meditation',
      'meditation for career women',
      "women's mental health",
      'female empowerment meditation',
      'meditation for women executives',
      "women's group meditation",
      'TM for women Australia',
    ],
    alternates: {
      canonical: `/${lang}/tm-for-women`,
      languages: {
        en: '/en/tm-for-women',
      },
    },
    openGraph: {
      url: `/${lang}/tm-for-women`,
    },
  };
}

export default async function Page({ params }: GlobalPageProps) {
  const { lang } = await params;
  const {
    pages: { tmForWomen },
  } = await getDictionary(lang);

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center md:min-h-[50dvh] md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h1 className="text-primary">{tmForWomen.title}</h1>
              <p className="mb-6 text-xl text-foreground">{tmForWomen.subtitle}</p>
            </div>
            <div>
              <Image src={superWomanSvg} alt="" />
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <h2 className="text-center text-primary">{tmForWomen.sections.community.title}</h2>
          {tmForWomen.sections.community.paragraphs.map((text) => (
            <p key={text} className="mx-auto max-w-prose text-foreground">
              {text}
            </p>
          ))}
        </PageSectionContainer>
      </SecondaryPageSection>
      <PrimaryPageSection>
        <PageSectionContainer>
          <h2 className="mb-12 text-center text-primary">{tmForWomen.sections.why.title}</h2>
          <div className="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-3">
            <Card className="backdrop-blur-xl, border-0 bg-card/50">
              <CardHeader>
                <CardTitle className="flex justify-between">
                  {tmForWomen.sections.why.cards.safe.title}
                  <UsersIcon className="text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent>{tmForWomen.sections.why.cards.safe.description}</CardContent>
            </Card>
            <Card className="backdrop-blur-xl, border-0 bg-card/50">
              <CardHeader>
                <CardTitle className="flex justify-between">
                  {tmForWomen.sections.why.cards.support.title}
                  <HeartPlusIcon className="text-secondary" />
                </CardTitle>
              </CardHeader>
              <CardContent>{tmForWomen.sections.why.cards.support.description}</CardContent>
            </Card>
            <Card className="backdrop-blur-xl, border-0 bg-card/50">
              <CardHeader>
                <CardTitle className="flex justify-between">
                  {tmForWomen.sections.why.cards.movement.title}
                  <WaypointsIcon className="text-tertiary" />
                </CardTitle>
              </CardHeader>
              <CardContent>{tmForWomen.sections.why.cards.movement.description}</CardContent>
            </Card>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <h2 className="mb-12 text-center text-primary">{tmForWomen.sections.begin.title}</h2>
          <div className="mx-auto mb-8 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="flex flex-col justify-between bg-card/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  <BookOpenIcon className="text-primary" />
                  {tmForWomen.sections.begin.cards.learn.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">{tmForWomen.sections.begin.cards.learn.description}</CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={tmForWomen.sections.begin.cards.learn.cta.href}>
                    {tmForWomen.sections.begin.cards.learn.cta.title}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between bg-card/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  <CalendarIcon className="text-tertiary" />
                  {tmForWomen.sections.begin.cards.join.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">{tmForWomen.sections.begin.cards.join.description}</CardContent>
              <CardFooter>
                <Button asChild variant="tertiary">
                  <Link href={tmForWomen.sections.begin.cards.join.cta.href}>
                    {tmForWomen.sections.begin.cards.join.cta.title}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <div className="mb-8 rounded-lg border border-emerald-100 bg-emerald-50/50 p-6 backdrop-blur-xl dark:border-emerald-900 dark:bg-emerald-900/30 md:col-span-2">
              <p>
                <strong className="text-primary">{tmForWomen.sections.begin.cards.choice.title}:</strong>{' '}
                {tmForWomen.sections.begin.cards.choice.description}
              </p>
            </div>
            <div className="md:col-span-2">
              <ShieldIcon className="mx-auto mb-4 size-12 text-primary" />
              <h3 className="text-center text-primary">{tmForWomen.sections.certified.title}</h3>
              <p className="mx-auto mb-4 max-w-prose">{tmForWomen.sections.certified.description}</p>
              <div className="flex justify-center">
                <Button variant="link" asChild>
                  <Link href={tmForWomen.sections.certified.cta.href}>{tmForWomen.sections.certified.cta.title}</Link>
                </Button>
              </div>
            </div>
          </div>
        </PageSectionContainer>
      </SecondaryPageSection>
    </PageContent>
  );
}
