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

export default function ButtonLink({ variant, size, className, ...rest }: ButtonLinkProps) {
  return <Link {...rest} className={cn(buttonVariants({ variant, size, className }))} />;
}
