import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const MobileNavigationMenuListItem = forwardRef<ComponentRef<typeof Link>, ComponentPropsWithoutRef<typeof Link>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <Link
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground leadning-none block space-y-1 rounded-md p-3 no-underline outline-hidden transition-colors select-none',
            className
          )}
          {...props}
        >
          {title && <div className="leadining-none text-sm font-medium">{title}</div>}
          {children && <div className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</div>}
        </Link>
      </li>
    );
  }
);

MobileNavigationMenuListItem.displayName = 'MobileNavigationMenuListItem';

export { MobileNavigationMenuListItem };
