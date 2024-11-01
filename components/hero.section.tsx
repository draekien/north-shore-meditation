import heroImage from '@/public/hero.webp';
import Image from 'next/image';
import ButtonLink from './ui/button-link';

export type HeroSectionProps = {
  title: string;
  subtitle: string;
  action: string;
  href: string;
  session: string;
  sessionHref: string;
};

export default function HeroSection({ title, subtitle, action, href, session, sessionHref }: HeroSectionProps) {
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
        <h2 className="mb-4 scroll-m-20 border-b-0 text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h2>
        <p className="mb-8 text-xl">{subtitle}</p>
        <div className="flex justify-center gap-4">
          <ButtonLink
            href={sessionHref}
            referrerPolicy="no-referrer"
            target="_blank"
            rel="noreferrer noopener"
            size="lg"
            variant="outline-secondary"
            className="border-yellow-900 text-yellow-900 hover:text-yellow-900/50 focus:text-yellow-900/50"
          >
            {session}
          </ButtonLink>
          <ButtonLink href={href} referrerPolicy="no-referrer" target="_blank" rel="noreferrer noopener" size="lg">
            {action}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
