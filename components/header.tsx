import type { Locale } from '@/lib/constants';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

const programs: { title: string; href: string; description: string }[] = [
  {
    title: 'Private Sessions',
    href: '/docs/primitives/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Group Sessions',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Corporate Sessions',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
];

export type HeaderProps = {
  lang: Locale;
};

export const Header = ({ lang }: HeaderProps) => {
  return (
    <header className="shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold ">
          North Shore Transcendental Meditation®
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Transcendental Meditation®</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/tm"
                      >
                        <Sparkles className={cn('w-6 h-6 text-amber-400')} />
                        <div className="mb-2 mt-4 text-lg font-medium">Effortlessly Yours</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Easy to learn and enjoyable to practice. Experience the peacefulness of your awareness and get
                          to know your innermost self.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <NavigationMenuListItem href="/tm/your-choice" title="It's your choice">
                    Get to know the reasons you should consider TM.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem href="/tm/your-way" title="It's personal">
                    Each person experiences TM in a unique way. Discover yours.
                  </NavigationMenuListItem>
                  <NavigationMenuListItem href="/tm/your-community" title="It's for everyone">
                    Discover how TM is helping to improve the lives of ADHD children.
                  </NavigationMenuListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {programs.map((component) => (
                    <NavigationMenuListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </NavigationMenuListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* <ModeToggle  /> */}
        <Button className=" font-semibold">Book Session</Button>
      </div>
    </header>
  );
};
