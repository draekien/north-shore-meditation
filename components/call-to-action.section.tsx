import Link from 'next/link';
import { Button } from './ui/button';

export type CallToActionSectionProps = {
  title: string;
  subtitle: string;
  action: string;
  href: string;
};

export default function CallToActionSection({ title, subtitle, action, href }: CallToActionSectionProps) {
  return (
    <section className="bg-emerald-50/50 py-16 text-emerald-800 backdrop-blur-sm dark:bg-emerald-800 dark:text-emerald-50">
      <div className="container mx-auto flex flex-col gap-8 px-4 text-center">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <h3 className="text-xl">{subtitle}</h3>
        <div>
          <Link href={href} referrerPolicy="no-referrer" target="_blank" rel="noreferrer noopener">
            <Button className="px-8 py-3 text-lg font-semibold" size="lg">
              {action}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
