import IntroCallToActionSection from '@/components/call-to-actions/intro.cta';
import LearnCallToActionSection from '@/components/call-to-actions/learn.cta';
import TmCentreMap from '@/components/maps/tm-centre.map';
import ProgressBar from '@/components/progress-bar';
import { ThemeProvider } from '@/components/theme-provider';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { Button } from '@/components/ui/button';
import ButtonLink from '@/components/ui/button-link';
import { ModeToggle } from '@/components/ui/mode-toggle';
import {
  MobileNavigationMenuListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { baseKeywords, locales } from '@/lib/constants';
import type { GlobalPageProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { VercelToolbar } from '@vercel/toolbar/next';
import { MenuIcon, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import { Ma_Shan_Zheng, Noto_Sans_SC } from 'next/font/google';
import localFont from 'next/font/local';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { getDictionary } from './dictionaries';
import './globals.css';

const maShanZheng = Ma_Shan_Zheng({
  display: 'swap',
  variable: '--font-ma-shan-zheng',
  weight: '400',
  subsets: ['latin'],
});

const notoSans = Noto_Sans_SC({
  display: 'swap',
  variable: '--font-noto-sans',
  weight: 'variable',
  subsets: ['latin'],
});

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.northshoremeditation.au'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
    },
  },
  title: {
    template: '%s | North Shore Meditation',
    default: 'Learn Transcendental Meditation at North Shore Meditation',
  },
  description:
    'Transcendental Meditation® helps you to discover inner peace and joy, build resilience, enhance relationships, relieve stress and anxiety, expand your creative potential, achieve academic excellence, and nurture mental health and well-being. Discover why you should learn TM with Grace through North Shore Meditation.',
  keywords: [
    ...baseKeywords,
    'learn transcendental meditation',
    'why should I learn tm',
    'why transcendental meditation',
    'why tm',
  ],
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }: Readonly<PropsWithChildren<GlobalPageProps>>) {
  const dict = await getDictionary(params.lang);
  const shouldInjectToolbar = process.env.NODE_ENV === 'development';
  return (
    <html lang={params.lang}>
      <body className={`${geistSans.variable} ${maShanZheng.variable} ${notoSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          enableColorScheme
          disableTransitionOnChange
        >
          <TooltipProvider>
            <BackgroundGradientAnimation containerClassName="fixed -z-50" />
            <header className="sticky top-0 z-50 flex h-20 w-full shrink-0 items-center bg-white/50 px-4 shadow backdrop-blur-2xl dark:bg-slate-900/50 md:px-6">
              <h3 className="container p-4">
                <Link href="/" className="font-bold text-primary xl:text-2xl">
                  {dict.company}
                </Link>
              </h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="xl:hidden">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">{dict.nav.toggleButtonAlt}</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white backdrop-blur-md dark:bg-slate-950/75">
                  <div className="flex h-full flex-col justify-between gap-10 py-4">
                    <Accordion type="single" defaultValue="tm" collapsible>
                      <AccordionItem value="tm">
                        <AccordionTrigger>{dict.nav.tm.title}</AccordionTrigger>
                        <AccordionContent>
                          <ScrollArea className="h-72">
                            <ul className="grid gap-3">
                              <li>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:bg-accent focus:shadow-md"
                                  href={dict.nav.tm.hero.href}
                                >
                                  <Sparkles className={cn('h-6 w-6 text-amber-400')} />
                                  <div className="mb-2 mt-4 text-lg font-medium">{dict.nav.tm.hero.title}</div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    {dict.nav.tm.hero.description}
                                  </p>
                                </a>
                              </li>
                              {dict.nav.tm.items.map((item) => (
                                <MobileNavigationMenuListItem key={item.title} title={item.title} href={item.href}>
                                  {item.description}
                                </MobileNavigationMenuListItem>
                              ))}
                            </ul>
                          </ScrollArea>
                        </AccordionContent>
                      </AccordionItem>
                      {/* <AccordionItem value="programs">
                      <AccordionTrigger>{dict.nav.programs.title}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="grid gap-3">
                          {dict.nav.programs.items.map((component) => (
                            <MobileNavigationMenuListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </MobileNavigationMenuListItem>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem> */}
                      <AccordionItem value="more">
                        <AccordionTrigger>{dict.nav.more}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid gap-3">
                            <MobileNavigationMenuListItem href="/about-us" title={dict.nav.aboutUs} />
                            <MobileNavigationMenuListItem href="/contact-us" title={dict.nav.contactUs} />
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <ButtonLink
                      href={dict.nav.callToAction.href}
                      referrerPolicy="no-referrer"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {dict.nav.callToAction.action}
                    </ButtonLink>
                  </div>
                </SheetContent>
              </Sheet>
              <div className="container mx-auto hidden items-center justify-between gap-4 p-4 xl:flex">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>{dict.nav.tm.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                href={dict.nav.tm.hero.href}
                              >
                                <Sparkles className={cn('h-6 w-6 text-amber-400')} />
                                <div className="mb-2 mt-4 text-lg font-medium">{dict.nav.tm.hero.title}</div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  {dict.nav.tm.hero.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          {dict.nav.tm.items.map((item) => (
                            <NavigationMenuListItem key={item.href} href={item.href} title={item.title}>
                              {item.description}
                            </NavigationMenuListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    {/* <NavigationMenuItem>
                    <NavigationMenuTrigger>{dict.nav.programs.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {dict.nav.programs.items.map((component) => (
                          <NavigationMenuListItem key={component.title} title={component.title} href={component.href}>
                            {component.description}
                          </NavigationMenuListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem> */}
                    <NavigationMenuItem>
                      <Link href="/about-us" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {dict.nav.aboutUs}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/contact-us" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {dict.nav.contactUs}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <ModeToggle />
                <ButtonLink
                  href={dict.nav.callToAction.href}
                  referrerPolicy="no-referrer"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {dict.nav.callToAction.action}
                </ButtonLink>
              </div>
            </header>
            <main>
              {children}

              <IntroCallToActionSection {...dict.sections.ctas.intro} />
              <LearnCallToActionSection {...dict.sections.ctas.learn} />
            </main>
            <footer className="bg-emerald-900 py-8 text-white">
              <div className="container mx-auto px-4">
                <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
                  <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-semibold">{dict.company}</h2>
                    <p className="text-emerald-50">{dict.tagline}</p>
                  </div>
                  <ul className="text-center md:text-right">
                    <li>{dict.contactDetails.address}</li>
                    <li>
                      Email:{' '}
                      <Link
                        href={dict.contactDetails.email.href}
                        className="hover:text-emerald-100 focus:text-emerald-100"
                      >
                        {dict.contactDetails.email.display}
                      </Link>
                    </li>
                    <li>
                      Phone:{' '}
                      <Link
                        href={dict.contactDetails.phone.href}
                        className="hover:text-emerald-100 focus:text-emerald-100"
                      >
                        {dict.contactDetails.phone.display}
                      </Link>{' '}
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap-reverse items-end justify-center gap-8 md:justify-between">
                  <small className="w-80 md:w-1/3">{dict.footer.disclaimer}</small>
                  <TmCentreMap />
                </div>
              </div>
            </footer>
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        {shouldInjectToolbar && <VercelToolbar />}
        <ProgressBar />
      </body>
    </html>
  );
}
