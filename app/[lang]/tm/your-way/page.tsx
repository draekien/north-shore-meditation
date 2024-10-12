import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import type { GlobalPageProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import meditateSvg from '@/public/meditate.svg';
import introSvg from '@/public/undraw_educator_re_ju47.svg';
import guidanceSvg from '@/public/undraw_fatherhood_-7-i19.svg';
import supportSvg from '@/public/undraw_showing_support_re_5f2v.svg';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '../../dictionaries';

export default async function YourWayPage({ params: { lang } }: GlobalPageProps) {
  const {
    pages: { way },
  } = await getDictionary(lang);

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center gap-8 py-8 md:min-h-[50dvh] md:flex-row">
            <div>
              <Image src={guidanceSvg} alt="" />
            </div>
            <div>
              <h1 className="text-primary">{way.title}</h1>
              <p className="text-xl">{way.subtitle}</p>
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
          <h2 className="mb-24 text-center text-primary">{way.sections.steps.title}</h2>
          <div className="mx-auto flex flex-col justify-around gap-24 md:w-2/3">
            {(
              [
                { src: introSvg, textColor: 'text-secondary', buttonVariant: 'secondary' },
                { src: meditateSvg, textColor: 'text-emerald-600 dark:text-emerald-500', buttonVariant: 'default' },
                { src: supportSvg, textColor: 'text-purple-500 dark:text-purple-600', buttonVariant: '' },
              ] as const
            )
              .map((image, idx) => ({
                ...image,
                ...way.sections.steps.steps[idx],
              }))
              .map(({ src, title, description, action, textColor, buttonVariant }, index) => (
                <div
                  key={title}
                  className={cn('flex flex-col gap-4 md:flex-row md:gap-16', index === 1 ? 'md:flex-row-reverse' : '')}
                >
                  <div className="mx-8 md:mx-0">
                    <Image src={src} alt="" />
                  </div>
                  <div className="md:max-w-1/2 mx-8">
                    <h3 className={textColor}>{title}</h3>
                    <p>{description}</p>
                    {action && (
                      <Link href={action.href}>
                        <Button className="mt-4" variant={buttonVariant || 'default'}>
                          {action.label}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </PageSectionContainer>
      </SecondaryPageSection>
      <PrimaryPageSection>
        <PageSectionContainer>
          <h2 className="mb-24 text-center text-primary">{way.sections.faq.title}</h2>
          <div className="mx-auto flex flex-col gap-4 md:w-2/3">
            {way.sections.faq.cards.map(({ q, a }) => (
              <Card key={q} className="bg-card/60 shadow-sm backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>{q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
    </PageContent>
  );
}
