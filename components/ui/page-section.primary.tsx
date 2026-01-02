import type { PropsWithChildren } from 'react';

export default function PrimaryPageSection({ children }: PropsWithChildren) {
  return <section className="relative bg-emerald-50/30 py-20 backdrop-blur-sm dark:bg-emerald-900/20">{children}</section>;
}
