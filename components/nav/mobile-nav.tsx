import Link from 'next/link';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import { NavLink } from './nav-link';

const MobileNavigationMenuListItem = forwardRef<ComponentRef<typeof Link>, ComponentPropsWithoutRef<typeof Link>>(
  (props, ref) => {
    return (
      <li>
        <NavLink ref={ref} {...props} />
      </li>
    );
  }
);

MobileNavigationMenuListItem.displayName = 'MobileNavigationMenuListItem';

export { MobileNavigationMenuListItem };
