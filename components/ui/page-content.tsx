import { cn } from '@/lib/utils';
import type { ClassValue } from 'clsx';

export type PageContentProps = {
  className?: ClassValue;
  children: React.ReactNode;
};

export default function PageContent({ className, children }: PageContentProps) {
  return <div className={cn('min-h-dvh', className)}>{children}</div>;
}
