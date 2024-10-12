import { cn } from '@/lib/utils';
import searching from '@/public/undraw_searching_re_3ra9.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import type { CallToAction } from './types';

export type IntroCallToAction = {
  video: {
    dialogTitle: string;
    dialogDescription: string;
    dialogTrigger: string;
    dialogFooter: string;
    dialogFooterCta: string;
  };
} & CallToAction;

export default function IntroCallToActionSection({
  action,
  href,
  title,
  subtitle,
  helpText,
  className,
  video: { dialogTitle, dialogTrigger, dialogDescription, dialogFooter, dialogFooterCta },
}: IntroCallToAction) {
  return (
    <section id="intro-cta" className={cn('py-16 backdrop-blur-sm', className)}>
      <div className="container mx-auto flex flex-col gap-8 px-4">
        <h2 className="text-center text-secondary">{title}</h2>
        <div className="flex flex-col justify-center md:flex-row md:gap-8">
          <div>
            <Image src={searching} alt="" height={300} />
          </div>
          <div className="md:w-1/2">
            <p className="my-4 text-xl text-foreground">{subtitle}</p>
            <div className="flex flex-col gap-4 md:flex-row">
              <Link href={href} referrerPolicy="no-referrer">
                <Button className="px-8 py-3 text-lg font-semibold" size="lg" variant="secondary">
                  {action}
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    {dialogTrigger}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogDescription>{dialogDescription}</DialogDescription>
                  </DialogHeader>
                  <iframe
                    className="aspect-video w-full rounded-md border-0"
                    src="https://www.youtube-nocookie.com/embed/fHBUjQCIiqg?si=uBj1TNDTPR7Xgcuk"
                    title={dialogTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                  <DialogFooter>
                    <p className="flex gap-4 text-sm">
                      <span>{dialogFooter}</span>
                      <Link href={href} referrerPolicy="no-referrer">
                        <Button variant="link" size="sm">
                          {dialogFooterCta}
                        </Button>
                      </Link>
                    </p>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="mt-16 text-sm">
              <small>{helpText}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
