import TmStatsChart from '@/components/tm-stats-chart';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import type { GlobalPageProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import maharishi from '@/public/maharishi.jpg';
import omegaSvg from '@/public/undraw_omega_-4-kob.svg';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '../../dictionaries';

export default async function YourChoicePage({ params: { lang } }: GlobalPageProps) {
  const {
    pages: { choice },
  } = await getDictionary(lang);

  return (
    <div className="min-h-dvh">
      <section className="relative bg-emerald-50/30 py-20 backdrop-blur dark:bg-emerald-900/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 py-8 md:min-h-[50dvh] md:flex-row">
            <div className="md:mb-0 md:w-1/2">
              <h1 className="text-primary">{choice.title}</h1>
              <p className="text-xl text-foreground">{choice.subtitle}</p>
            </div>
            <div className="md:mb-0 md:w-1/2">
              <Image src={omegaSvg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background/80 py-16 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="md:w-1/3">
              <Image
                src={maharishi}
                alt="Maharishi Mahesh Yogi during a 1979 visit to MUM"
                className="rounded-lg shadow-lg"
                placeholder="blur"
              />
            </div>
            <div className="max-w-3xl md:w-2/3">
              <h2 className="text-primary">{choice.sections.origins.title}</h2>
              {choice.sections.origins.paragraphs.map((text) => (
                <p key={text} className="text-foreground">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-emerald-50/30 py-20 backdrop-blur dark:bg-emerald-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-primary">{choice.sections.science.title}</h2>
          <p className="mb-4">{choice.sections.science.description}</p>
          <div className="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-3">
            {choice.sections.science.cards.map(({ title, description, citation, chart }, index) => (
              <Card
                key={title}
                className={cn(
                  `row-span-1 ${index === 3 || index === 6 ? 'md:col-span-2' : ''}`,
                  'border-0 bg-white/30 backdrop-blur-3xl',
                  'dark:bg-slate-700/30'
                )}
              >
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>{chart && <TmStatsChart {...chart} />}</CardContent>
                <CardFooter>
                  <div className="flex w-full items-start gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={citation.doi}
                          className="w-full hover:text-primary focus:text-primary"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <small className="block truncate">{citation.name}</small>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">{citation.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
