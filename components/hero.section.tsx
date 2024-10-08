import heroImage from '@/public/hero.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export type HeroSectionProps = {
  title: string;
  subtitle: string;
  action: string;
  href: string;
};

export default function HeroSection({ title, subtitle, action, href }: HeroSectionProps) {
  return (
    <section className="relative flex h-[calc(100dvh-5rem)] items-center justify-center">
      <Image
        src={heroImage}
        alt="Serene meditation background"
        className="absolute object-cover"
        placeholder="blur"
        fill
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-300/70 via-indigo-100/20 dark:from-indigo-900/40 dark:via-indigo-100/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-purple-300/70 via-white/5 dark:from-purple-900/20"></div>
      <div className="relative text-center text-yellow-900 drop-shadow-2xl">
        <h1 className="mb-4">{title}</h1>
        <p className="mb-8 text-xl">{subtitle}</p>
        <Link href={href} referrerPolicy="no-referrer" target="_blank" rel="noreferrer noopener">
          <Button className="px-8 py-3 text-lg font-semibold" size="lg">
            {action}
          </Button>
        </Link>
      </div>
    </section>
  );
}
