import graceAbout from '@/assets/grace_about.webp';
import MarketSquareCarParkMap from '@/components/maps/car-park-market-square';
import WalkingDirections from '@/components/maps/walk-directions';
import ButtonLink from '@/components/ui/button-link';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import { baseKeywords } from '@/lib/constants';
import type { GlobalPageProps } from '@/lib/types';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '../dictionaries';

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
    title: 'About Us',
    description:
      'Meet Dr. Grace Pei, a former urological surgeon who has dedicated her career to medicinal research and global pharmaceutical development. Now at her Transcendental Meditation® (TM) Centre in Lane Cove, she draws on her wealth of corporate experience and personal journey to guide others towards finding balance and peace.',
    keywords: [
      ...baseKeywords,
      'Dr. Grace Pei',
      'How do I get to North Shore Meditation Centre',
      'Can the teachers at North Shore Meditation Centre travel to me',
    ],
    alternates: {
      canonical: `/${lang}/about-us`,
      languages: {
        en: '/en/about-us',
      },
    },
    openGraph: {
      url: `/${lang}/about-us`,
    },
  };
}

export default async function AboutUsPage({ params }: GlobalPageProps) {
  const { lang } = await params;
  const {
    pages: { aboutUs },
  } = await getDictionary(lang);

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center md:min-h-[50dvh] md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-primary">{aboutUs.title}</h1>
              <p className="mb-6 text-xl text-foreground">{aboutUs.subtitle}</p>
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center justify-around md:min-h-[50dvh] md:flex-row">
            <div className="md:w-1/2">
              <h2 className="text-primary">{aboutUs.sections.grace.title}</h2>
              {aboutUs.sections.grace.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className="rounded-xl shadow-lg md:w-1/3">
              <Image src={graceAbout} alt={aboutUs.heroAlt} placeholder="blur" className="rounded-xl" />
            </div>
          </div>
        </PageSectionContainer>
      </SecondaryPageSection>
      <PrimaryPageSection>
        <PageSectionContainer>
          <h2 className="mb-12 text-center text-primary">{aboutUs.sections.centre.title}</h2>
          <div className="flex flex-col justify-center gap-8 md:min-h-[50dvh] md:flex-row md:flex-wrap md:gap-16">
            <div className="flex flex-col gap-8 lg:w-3/4 lg:flex-row-reverse">
              <div className="lg:w-1/2">
                <h3>{aboutUs.sections.centre.bus.title}</h3>
                <p>{aboutUs.sections.centre.bus.description}</p>
              </div>
              <WalkingDirections className="lg:h-80 lg:w-1/2" />
            </div>
            <div className="flex flex-col gap-8 lg:w-3/4 lg:flex-row">
              <div className="lg:w-1/2">
                <h3>{aboutUs.sections.centre.driving.title}</h3>
                <p>{aboutUs.sections.centre.driving.description}</p>
              </div>
              <MarketSquareCarParkMap className="lg:h-80 lg:w-1/2" />
            </div>
            <div className="flex flex-col lg:w-1/2 lg:items-center lg:justify-center">
              <h3>{aboutUs.sections.centre.remote.title}</h3>
              <p className="mb-4 md:text-center">{aboutUs.sections.centre.remote.description}</p>
              <div>
                <ButtonLink href="/contact-us">{aboutUs.sections.centre.remote.action}</ButtonLink>
              </div>
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
    </PageContent>
  );
}
