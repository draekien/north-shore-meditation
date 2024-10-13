export const defaultLocale = 'en';
export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];

export const baseKeywords = [
  'Transcendental Meditation',
  'Transcendental',
  'Meditation',
  'TM',
  'Maharishi',
  'Yogi',
  'Inner Peace',
  'Stress Relief',
] as const;