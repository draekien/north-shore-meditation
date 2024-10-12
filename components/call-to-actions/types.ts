import type { ClassNameValue } from 'tailwind-merge';

export type CallToAction = {
  title: string;
  subtitle: string;
  action: string;
  href: string;
  helpText: string;
  className?: ClassNameValue;
};
