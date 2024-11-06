import heroImage from '@/public/hero.webp';
import Image from 'next/image';
import ButtonLink from './ui/button-link';

export type HeroSectionProps = {
  title: string;
  author: string;
  subtitle: string;
  action: string;
  href: string;
  session: string;
  sessionHref: string;
};

export default function HeroSection({ title, subtitle, action, href, session, sessionHref, author }: HeroSectionProps) {
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
        <div className="mb-12 scroll-m-20 border-b-0 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <div>{title}</div>
          <small className="text-sm">{author}</small>
        </div>
        <div className="mb-6 text-xl">{subtitle}</div>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink
            href={sessionHref}
            referrerPolicy="no-referrer"
            size="lg"
            variant="outline-secondary"
            className="w-60 border-yellow-900 bg-white/30 text-yellow-900 hover:border-yellow-900/50 hover:text-yellow-900/50 focus:text-yellow-900/50 md:w-auto md:bg-transparent"
          >
            {session}
          </ButtonLink>
          <ButtonLink href={href} referrerPolicy="no-referrer" size="lg" className="w-60 md:w-auto">
            {action}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
