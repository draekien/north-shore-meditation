import { cn } from '@/lib/utils';
import academicsSvg from '@/public/academics.svg';
import creativeSvg from '@/public/creative.svg';
import dreamerSvg from '@/public/dreamer.svg';
import meditateSvg from '@/public/meditate.svg';
import relationshipSvg from '@/public/relationship.svg';
import relaxSvg from '@/public/relax.svg';
import resilientSvg from '@/public/resilient.svg';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from './ui/card';

export type WhyTmCard = {
  title: string;
  description: string;
  key: string;
};

export type WhyTmSectionProps = {
  title: string;
  cards: Array<WhyTmCard>;
};

export default function WhyTmSection({ title, cards = [] }: WhyTmSectionProps) {
  return (
    <section id="why-tm" className="py-16">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <h1 className="mb-12 scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight text-primary first:mt-0">
          {title}
        </h1>
        <div className="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { src: dreamerSvg, textColor: 'text-sky-500', key: 'dreamer' },
            { src: resilientSvg, textColor: 'text-emerald-600', key: 'resilient' },
            { src: relationshipSvg, textColor: 'text-pink-500', key: 'relationship' },
            { src: relaxSvg, textColor: 'text-teal-400', key: 'relax' },
            { src: creativeSvg, textColor: 'text-purple-500', key: 'creative' },
            { src: academicsSvg, textColor: 'text-indigo-600', key: 'academics' },
            { src: meditateSvg, textColor: 'text-rose-600', key: 'meditate' },
          ]
            .map(({ src, textColor, key }) => {
              const card = cards.find((card) => card.key === key);

              if (!card) throw new Error(`No card matches the current key: ${key}`);

              return {
                src,
                textColor,
                ...card,
              };
            })
            .map(({ title, description, textColor, src, key }, index) => (
              <Card
                key={key}
                className={cn(
                  `row-span-1 ${index === 3 || index === 6 ? 'md:col-span-2' : ''}`,
                  'border-0 bg-white/30 backdrop-blur-3xl',
                  'dark:bg-slate-700/30'
                )}
              >
                <CardHeader>
                  <h3 className={cn('text-xl', textColor)}>{title}</h3>
                  <Image src={src} alt="" />
                </CardHeader>
                <CardContent>
                  <p>{description}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
