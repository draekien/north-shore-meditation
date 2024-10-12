import { cn } from '@/lib/utils';
import studying from '@/public/undraw_studying_re_deca.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import type { CallToAction } from './types';

export default function LearnCallToActionSection({ action, href, title, subtitle, helpText, className }: CallToAction) {
  return (
    <section
      id="intro-cta"
      className={cn(
        'bg-emerald-50/50 py-16 text-emerald-800 backdrop-blur-sm dark:bg-emerald-800/50 dark:text-emerald-50',
        className
      )}
    >
      <div className="container mx-auto flex flex-col gap-8 px-4">
        <h2 className="text-center">{title}</h2>
        <div className="flex flex-col justify-center md:flex-row-reverse md:gap-8">
          <div>
            <Image src={studying} alt="" height={300} />
          </div>
          <div className="text-right md:w-1/2">
            <p className="my-4 text-xl">{subtitle}</p>
            <Link href={href} referrerPolicy="no-referrer">
              <Button className="px-8 py-3 text-lg font-semibold" size="lg">
                {action}
              </Button>
            </Link>
            <div className="mt-16 text-left text-sm md:text-right">
              <small>{helpText}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
