export const defaultLocale = 'en-AU';
export const locales = ['en-AU', 'zh-Hans'] as const;
export type Locale = (typeof locales)[number];
