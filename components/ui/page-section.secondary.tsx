import type { PropsWithChildren } from 'react';

export default function SecondaryPageSection({ children }: PropsWithChildren) {
  return <section className="bg-background/80 py-16 backdrop-blur-xl">{children}</section>;
}
