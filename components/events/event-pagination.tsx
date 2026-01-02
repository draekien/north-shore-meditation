'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import { EventDefaults } from './event-constants';

type EventPaginationProps = {
  total: number;
  page: number;
};

export function EventPagination({ page, total }: EventPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const totalPages = Math.ceil(total / EventDefaults.PAGE_LIMIT);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            scroll={false}
            href={`${pathname}?${createQueryString('page', `${page - 1}`)}`}
            aria-disabled={page <= 1}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink scroll={false} href={`${pathname}?${createQueryString('page', `${page}`)}`} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            scroll={false}
            href={`${pathname}?${createQueryString('page', `${page + 1}`)}`}
            aria-disabled={page >= totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
