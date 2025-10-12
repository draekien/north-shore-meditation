import type { PropsWithChildren } from 'react';

export default function PageSectionContainer({ children }: PropsWithChildren) {
  return <section className="container mx-auto px-4">{children}</section>;
}
