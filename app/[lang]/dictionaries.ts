import 'server-only';
import type { Locale } from '../../lib/constants';
import type LocalisedStrings from './dictionaries/en.json';

export type Dictionary = typeof LocalisedStrings;

export type Dictionaries = {
  [K in Locale]: () => Promise<Dictionary>;
};

const dictionaries: Dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  // 'zh-Hans': () => import('./dictionaries/zh-Hans.json').then((module) => module.default),
};

export const getDictionary = async (locale: keyof Dictionaries) => dictionaries[locale]();
