import PageContent from '@/components/ui/page-content';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import { baseKeywords } from '@/lib/constants';
import type { GlobalPageProps } from '@/lib/types';
import type { Metadata } from 'next';
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
        <div className="flex flex-col items-center md:min-h-[50dvh] md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h1 className="text-primary">{tmForWomen.title}</h1>
            <p className="mb-6 text-xl text-foreground">{tmForWomen.subtitle}</p>
          </div>
        </div>
      </PrimaryPageSection>
    </PageContent>
  );
}
