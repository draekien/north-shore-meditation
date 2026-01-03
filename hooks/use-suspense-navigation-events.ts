import { ReadonlyURLSearchParams, usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

type OnNavigateEvent = {
  url: string;
  pathname: string;
  searchParams: ReadonlyURLSearchParams;
};

type UseNavigationEventsOptions = {
  onNavigate?: (e: OnNavigateEvent) => void;
};

export const useSuspenseNavigationEvents = (options: UseNavigationEventsOptions) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    options.onNavigate?.({ url, pathname, searchParams });
  }, [pathname, searchParams]);
};
