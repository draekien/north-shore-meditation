'use client';

import { useSuspenseNavigationEvents } from '@/hooks/use-suspense-navigation-events';
import { ComponentProps, Suspense, useCallback, useState } from 'react';
import { Sheet, SheetTrigger } from '../ui/sheet';
import { MenuIcon } from 'lucide-react';
import { Button } from '../ui/button';

type NavSheetProps = Omit<ComponentProps<typeof Sheet>, 'open' | 'onOpenChange'> & {
  toggleButtonAlt: string;
};

const NavSheet = ({ children, toggleButtonAlt, ...props }: NavSheetProps) => {
  const [open, setOpen] = useState(false);

  const handleNavigate = useCallback(() => setOpen(false), []);

  useSuspenseNavigationEvents({
    onNavigate: handleNavigate,
  });

  return (
    <Sheet open={open} onOpenChange={setOpen} {...props}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen(true)}>
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">{toggleButtonAlt}</span>
        </Button>
      </SheetTrigger>
      {children}
    </Sheet>
  );
};

export const SuspenseNavSheet = (props: NavSheetProps) => (
  <Suspense>
    <NavSheet {...props} />
  </Suspense>
);
