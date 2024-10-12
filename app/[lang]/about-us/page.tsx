import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import type { GlobalPageProps } from '@/lib/types';
import graceAbout from '@/public/grace_about.webp';
import Image from 'next/image';
import { getDictionary } from '../dictionaries';

export default async function AboutUsPage({ params: { lang } }: GlobalPageProps) {
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
    </PageContent>
  );
}
