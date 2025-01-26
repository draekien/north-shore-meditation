'use client';

import { queryClient } from '@/lib/query-client';
import { QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';

export default function QueryClientProvider({ children }: PropsWithChildren) {
  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
}
