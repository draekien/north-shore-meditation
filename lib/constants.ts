export const defaultLocale = 'en';
export const locales = ['en'] as const;
export type Locale = (typeof locales)[number] | string;

export const baseKeywords = [
  'Transcendental Meditation',
  'Transcendental Meditation Sydney',
  'Transcendental Meditation Shorth Shore',
  'Meditation',
  'TM',
] as const;
