import { defaultLocale, locales } from '@/lib/constants';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse, type NextRequest } from 'next/server';


function getLocale({ headers }: NextRequest) {
  const languageHeader = { 'accept-language': headers.get('accept-language') || '' };
  try {
    const languages = new Negotiator({ headers: languageHeader }).languages();
    return match(languages, locales, defaultLocale);
  } catch (error) {
    console.error('Error in langeuage negotiation: ', error);
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return NextResponse.next();
  if (pathname === '/sitemap.xml') return NextResponse.next();

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|favicon|icon|apple-icon|api|sitemap.xml|robots).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
