import Link from 'next/link';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { NavigationMenuLink } from '../ui/navigation-menu';
import { cn } from '@/lib/utils';
import { NavLink } from './nav-link';

const NavigationMenuListItem = forwardRef<ComponentRef<typeof Link>, ComponentPropsWithoutRef<typeof Link>>(
  (props, ref) => {
    return (
      <li>
        <NavLink ref={ref} {...props} />
      </li>
    );
  }
);

NavigationMenuListItem.displayName = 'NavigationMenuListItem';

export { NavigationMenuListItem };
