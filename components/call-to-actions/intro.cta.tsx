import searching from '@/assets/undraw_searching_re_3ra9.svg';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Suspense } from 'react';
import { Button } from '../ui/button';
import ButtonLink from '../ui/button-link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Skeleton } from '../ui/skeleton';
import IntroVideo from './intro-video';
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
    <section className={cn('py-16 backdrop-blur-sm', className)}>
      <div className="container mx-auto flex flex-col gap-8 px-4">
        <h2 className="text-center text-secondary">{title}</h2>
        <div className="flex flex-col justify-center md:flex-row md:gap-8">
          <div>
            <Image src={searching} alt="" height={300} />
          </div>
          <div className="md:w-1/2">
            <p className="my-4 text-xl text-foreground">{subtitle}</p>
            <div className="flex flex-col gap-4 md:flex-row">
              <ButtonLink href={href} referrerPolicy="no-referrer" size="lg" variant="secondary">
                {action}
              </ButtonLink>
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
                  <Suspense fallback={<Skeleton className="aspect-video w-full" />}>
                    <IntroVideo dialogTitle={dialogTitle} />
                  </Suspense>
                  <DialogFooter>
                    <div className="flex items-center justify-between gap-4">
                      <small className="text-sm">{dialogFooter}</small>
                      <ButtonLink href={href} referrerPolicy="no-referrer" variant="link" size="sm">
                        {dialogFooterCta}
                      </ButtonLink>
                    </div>
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
