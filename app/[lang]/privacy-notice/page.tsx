import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import type { GlobalPageProps } from '@/lib/types';
import { getDictionary } from '../dictionaries';

export default async function PrivacyNoticePage({ params: { lang } }: GlobalPageProps) {
  const {
    pages: { privacyNotice },
  } = await getDictionary(lang);

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <h1 className="text-3xl">{privacyNotice.title}</h1>
          <small>{privacyNotice.effectiveDate}</small>
          <p>{privacyNotice.intro}</p>
          {privacyNotice.sections.map((section, idx) => (
            <div key={idx} className="my-4">
              <h2 className="text-2xl">
                {idx + 1}. {section.title}
              </h2>
              <p>{section.intro}</p>
              {section.points && (
                <ul className="list-inside list-disc">
                  {section.points.map((point, pi) => (
                    <li key={pi} className="ml-2 list-item">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {section.footer && <p>{section.footer}</p>}
            </div>
          ))}
        </PageSectionContainer>
      </PrimaryPageSection>
    </PageContent>
  );
}
