import ContactUsForm from '@/components/forms/contact-us.form';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import { baseKeywords } from '@/lib/constants';
import type { GlobalPageProps } from '@/lib/types';
import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';


export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
    title: 'Contact Us',
    description: 'Connect with North Shore Meditation by sending us an inquiry',
    keywords: [...baseKeywords, 'Contact Us'],
    alternates: {
      canonical: `/${lang}/contact-us`,
      languages: {
        en: '/en/contact-us',
      },
    },
  };
}

export default async function ContactUsPage({ params: { lang } }: GlobalPageProps) {
  const {
    pages: { contactUs },
  } = await getDictionary(lang);

  return (
    <PageContent className="min-h-[200px]">
      <PrimaryPageSection>
        <PageSectionContainer>
          <h1 className="text-primary">{contactUs.title}</h1>
          <p className="text-xl text-foreground">{contactUs.subtitle}</p>
          <ContactUsForm {...contactUs} />
        </PageSectionContainer>
      </PrimaryPageSection>
    </PageContent>
  );
}
