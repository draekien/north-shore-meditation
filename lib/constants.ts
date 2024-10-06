export const defaultLocale = 'en-AU';
export const locales = ['en-AU'] as const;
export type Locale = (typeof locales)[number];
