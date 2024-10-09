import { Skeleton } from '@/components/ui/skeleton';

export function ChartSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[100px] rounded-xl" />
      <Skeleton className="h-[125px] w-[100px] rounded-xl" />
      <Skeleton className="h-[125px] w-[100px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  );
}
