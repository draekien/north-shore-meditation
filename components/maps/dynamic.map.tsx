import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';
import type { GoogleMapProps } from './map';

const Map = dynamic(() => import('./map'), {
  loading: () => <Skeleton className="h-80 w-80 rounded-lg border-0 md:h-[450px] md:w-[600px]" />,
});

export default function DynamicMap(props: GoogleMapProps) {
  return <Map {...props} />;
}
