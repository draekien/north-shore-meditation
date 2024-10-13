import { cn } from '@/lib/utils';
import type { ClassNameValue } from 'tailwind-merge';

export type SharedMapProps = {
  className?: ClassNameValue;
};

export type GoogleMapProps = {
  src: string;
} & SharedMapProps;

export default async function Map({ className, src }: GoogleMapProps) {
  return (
    <iframe
      src={src}
      className={cn('h-80 w-80 rounded-lg border-0 md:h-[450px] md:w-[600px]', className)}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
