import { cn } from '@/lib/utils';
import searching from '@/public/undraw_searching_re_3ra9.svg';
import { DialogDescription } from '@radix-ui/react-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import type { CallToAction } from './types';

export type IntroCallToAction = {
  video: {
    dialogTitle: string;
    dialogDescription: string;
    dialogTrigger: string;
  };
} & CallToAction;

export default function IntroCallToActionSection({
  action,
  href,
  title,
  subtitle,
  helpText,
  className,
  video: { dialogTitle, dialogTrigger, dialogDescription },
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
            <div>
              <Link href={href} referrerPolicy="no-referrer">
                <Button className="px-8 py-3 text-lg font-semibold" size="lg" variant="secondary">
                  {action}
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger>{dialogTrigger}</DialogTrigger>
                <DialogContent>
                  <DialogTitle>{dialogTitle}</DialogTitle>
                  <DialogDescription>{dialogDescription}</DialogDescription>
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube-nocookie.com/embed/fHBUjQCIiqg?si=uBj1TNDTPR7Xgcuk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
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
