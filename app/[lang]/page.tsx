import HeroSection from '@/components/hero.section';
import LearnFromGraceSection from '@/components/learn-from-grace.section';
import WhyTmSection from '@/components/why-tm.section';
import type { GlobalPageProps } from '@/lib/types';
import { getDictionary } from './dictionaries';

export default async function Home(props: GlobalPageProps) {
  const { lang } = await props.params;

  const dict = await getDictionary(lang);
  return (
    <div className="min-h-dvh">
      <HeroSection {...dict.sections.hero} />
      <WhyTmSection {...dict.sections.whyTm} />
      <LearnFromGraceSection {...dict.sections.learnFromGrace} />
    </div>
  );
}
