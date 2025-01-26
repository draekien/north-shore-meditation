import type { Locale } from './constants';

export type GlobalPageProps = {
  params: Promise<{
    lang: Locale;
    slug?: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
