import ContactUsForm from '@/components/forms/contact-us.form';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import type { GlobalPageProps } from '@/lib/types';
import { getDictionary } from '../dictionaries';

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
