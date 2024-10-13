import { defaultLocale, locales } from '@/lib/constants';
import { match } from '@formatjs/intl-localematcher';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import Negotiator from 'negotiator';
import { NextResponse, type NextRequest } from 'next/server';

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(20, '10 s'),
});

function getLocale({ headers }: NextRequest) {
  const languageHeader = { 'accept-language': headers.get('accept-language') || '' };
  const languages = new Negotiator({ headers: languageHeader }).languages();
  return match(languages, locales, defaultLocale);
}

export default async function middleware(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    console.warn(`Too many requests from ${ip}`);
    return NextResponse.redirect(new URL('/blocked', request.url));
  }

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return NextResponse.next();

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
    '/((?!_next|favicon|icon|apple-icon|api|sitemap|robots|blocked).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
