import Link from 'next/link';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
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
