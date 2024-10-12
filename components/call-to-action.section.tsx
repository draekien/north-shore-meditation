import Link from 'next/link';
import { Button } from './ui/button';

export type CallToActionButton = {
  label: string;
  href: string;
};

export type CallToActionSectionProps = {
  title: string;
  subtitle: string;
  explanation?: string;
  action?: string;
  href?: string;
  learn?: CallToActionButton;
  intro?: CallToActionButton;
};

export default function CallToActionSection({
  title,
  subtitle,
  explanation,
  action,
  href,
  intro,
  learn,
}: CallToActionSectionProps) {
  return (
    <section className="bg-emerald-50/50 py-16 text-emerald-800 backdrop-blur-sm dark:bg-emerald-800 dark:text-emerald-50">
      <div className="container mx-auto flex flex-col gap-8 px-4 text-center">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <h3 className="text-xl">{subtitle}</h3>
        {explanation && <p className="mt-0 pt-0 text-foreground">{explanation}</p>}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {action && href && (
            <Link href={href} referrerPolicy="no-referrer" target="_blank" rel="noreferrer noopener">
              <Button className="px-8 py-3 text-lg font-semibold" size="lg">
                {action}
              </Button>
            </Link>
          )}
          {intro && (
            <Link href={intro.href} referrerPolicy="no-referrer" target="_blank" rel="noreferrer noopener">
              <Button className="px-8 py-3 text-lg font-semibold" size="lg" variant="outline">
                {intro.label}
              </Button>
            </Link>
          )}
          {learn && (
            <Link href={learn.href} referrerPolicy="no-referrer" target="_blank" rel="noreferrer noopener">
              <Button className="px-8 py-3 text-lg font-semibold" size="lg">
                {learn.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
