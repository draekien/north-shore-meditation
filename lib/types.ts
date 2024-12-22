import type { Locale } from './constants';

export type GlobalPageProps = {
  params: Promise<{
    lang: Locale;
  }>;
};
