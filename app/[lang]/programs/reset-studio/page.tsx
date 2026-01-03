import PageContent from '@/components/ui/page-content';
import PageSectionContainer from '@/components/ui/page-section.container';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import { GlobalPageProps } from '@/lib/types';
import { getDictionary } from '../../dictionaries';
import { Metadata } from 'next';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from '@/components/ui/item';
import {
  AlertCircleIcon,
  BadgePlusIcon,
  BrainIcon,
  FingerprintIcon,
  TimerResetIcon,
  UserCheckIcon,
} from 'lucide-react';
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ButtonLink from '@/components/ui/button-link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;
  const {
    pages: {
      resetStudio: { title, seo },
    },
  } = await getDictionary(lang);

  return {
    metadataBase: new URL('https://www.northshoremeditation.au'),
    title,
    description: seo.description,
    alternates: {
      canonical: `/${lang}/programs/reset-studio`,
      languages: {
        en: '/en/programs/reset-studio',
      },
    },
    openGraph: {
      url: `/${lang}/programs/reset-studio`,
    },
  };
}

type PillarIconProps = {
  icon: string;
  className?: ClassValue;
};

function PillarIcon({ icon, className }: PillarIconProps) {
  switch (icon) {
    case 'pillar-1':
      return <UserCheckIcon className={cn(className)} />;
    case 'pillar-2':
      return <BrainIcon className={cn(className)} />;
    case 'pillar-3':
      return <FingerprintIcon className={cn(className)} />;
    case 'pillar-4':
      return <TimerResetIcon className={cn(className)} />;
    default:
      throw new Error(`Icon of type ${icon} is not supported`);
  }
}

export default async function Page({ params }: GlobalPageProps) {
  const { lang } = await params;
  const {
    pages: { resetStudio },
  } = await getDictionary(lang);

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center md:min-h-[50dvh] md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-primary">{resetStudio.title}</h1>
              <p className="text-foreground mb-6 text-xl">{resetStudio.subtitle}</p>
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer className="space-y-8">
          <header>
            <h2 className="text-primary">{resetStudio.pillars.title}</h2>
            <p>{resetStudio.pillars.description}</p>
          </header>
          <ItemGroup className="grid gap-4 md:grid-cols-2">
            {resetStudio.pillars.items.map((item) => (
              <Item key={item.key}>
                <ItemMedia>
                  <PillarIcon icon={item.key} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
          <footer>
            <h3>{resetStudio.pillars.footer.title}</h3>
            <blockquote>
              <strong className="font-medium">{resetStudio.pillars.footer.quote}</strong>{' '}
              <span className="text-muted-foreground text-sm text-nowrap">- {resetStudio.pillars.footer.author}</span>
            </blockquote>
          </footer>
        </PageSectionContainer>
      </SecondaryPageSection>
      <PrimaryPageSection>
        <PageSectionContainer className="max-w-3xl space-y-8">
          <header>
            <h2 className="text-primary">{resetStudio.path.title}</h2>
            <p>{resetStudio.path.subtitle}</p>
          </header>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg">{resetStudio.path.preparation.title}</h3>
              <p>{resetStudio.path.preparation.comfort}</p>
            </div>
            <Alert className="bg-card/40 backdrop-blur-3xl">
              <AlertCircleIcon />
              <AlertTitle>{resetStudio.path.preparation.capacity.title}</AlertTitle>
              <AlertDescription>{resetStudio.path.preparation.capacity.description}</AlertDescription>
            </Alert>
          </div>
          <Card className="bg-card/40 shadow-none backdrop-blur-3xl">
            <CardHeader>
              <CardDescription>{resetStudio.path.investment.title}</CardDescription>
              <CardTitle className="space-x-2">
                <span>
                  {Intl.NumberFormat(lang, {
                    currency: 'AUD',
                    currencyDisplay: 'symbol',
                    style: 'currency',
                  }).format(288)}
                </span>
                <span className="text-muted-foreground text-sm">GST Incl.</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ButtonLink className="w-full" href={resetStudio.path.cta.href}>
                {resetStudio.path.cta.title}
              </ButtonLink>
              <ItemGroup>
                {resetStudio.path.included.items.map((item) => (
                  <Item key={item.title}>
                    <ItemMedia>
                      <BadgePlusIcon />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemDescription>{item.description}</ItemDescription>
                    </ItemContent>
                  </Item>
                ))}
              </ItemGroup>
            </CardContent>
          </Card>
        </PageSectionContainer>
      </PrimaryPageSection>
    </PageContent>
  );
}
