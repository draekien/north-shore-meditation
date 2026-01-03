import Link from 'next/link';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { NavigationMenuLink } from '../ui/navigation-menu';
import { cn } from '@/lib/utils';

const NavigationMenuListItem = forwardRef<ComponentRef<typeof Link>, ComponentPropsWithoutRef<typeof Link>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none',
            className
          )}
          {...props}
        >
          {title && <div className="text-sm leading-none font-medium">{title}</div>}
          {children && <div className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</div>}
        </NavigationMenuLink>
      </li>
    );
  }
);

NavigationMenuListItem.displayName = 'NavigationMenuListItem';

export { NavigationMenuListItem };
