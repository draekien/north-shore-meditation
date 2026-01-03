'use client';

import { useSuspenseNavigationEvents } from '@/hooks/use-suspense-navigation-events';
import { ComponentProps, Suspense, useState } from 'react';
import { Sheet } from '../ui/sheet';

type NavSheetProps = Omit<ComponentProps<typeof Sheet>, 'open' | 'onOpenChange'>;

const NavSheet = (props: NavSheetProps) => {
  const [open, setOpen] = useState(false);

  useSuspenseNavigationEvents({
    onNavigate: () => setOpen(false),
  });

  return <Sheet open={open} onOpenChange={setOpen} {...props} />;
};

export const SuspenseNavSheet = (props: NavSheetProps) => (
  <Suspense>
    <NavSheet {...props} />
  </Suspense>
);
