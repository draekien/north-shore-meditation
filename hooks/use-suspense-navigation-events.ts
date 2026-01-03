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

export const useSuspenseNavigationEvents = ({ onNavigate }: UseNavigationEventsOptions) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    onNavigate?.({ url, pathname, searchParams });
  }, [pathname, searchParams, onNavigate]);
};
