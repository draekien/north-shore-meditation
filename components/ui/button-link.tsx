import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { buttonVariants } from './button';

export type ButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    children: ReactNode;
  };

export default function ButtonLink({ variant, size, className, href, target, rel, ...rest }: ButtonLinkProps) {
  const isExternal = typeof href === 'string' && /^https?:\/\//.test(href);
  return (
    <Link
      href={href}
      target={target ?? (isExternal ? '_blank' : undefined)}
      rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
      {...rest}
      className={cn(
        buttonVariants({ variant, size, className }),
        'aria-disabled:text-muted-foreground aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed'
      )}
      tabIndex={rest['aria-disabled'] ? -1 : undefined}
    />
  );
}
