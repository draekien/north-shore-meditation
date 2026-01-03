'use client';

import { ProgressProvider } from '@bprogress/next/app';
import { PropsWithChildren } from 'react';

export default function ProgressBar({ children }: PropsWithChildren) {
  return (
    <ProgressProvider color="#059669" shallowRouting>
      {children}
    </ProgressProvider>
  );
}
