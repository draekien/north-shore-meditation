import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import type { PropsWithChildren } from 'react';

export default function PageSectionContainer({ children, className }: PropsWithChildren & { className?: ClassValue }) {
  return <section className={cn('container mx-auto px-4', className)}>{children}</section>;
}
