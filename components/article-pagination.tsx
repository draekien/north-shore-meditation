'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationRoot,
} from './ui/pagination';

type PaginationProps = {
  limit: number;
  total: number;
};

export default function ArticlePagination({ total, limit }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.ceil(total / limit);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}#journals-list`;
  };

  const nextPageURL = hasNextPage ? createPageURL(currentPage + 1) : '#';
  const prevPageURL = hasPrevPage ? createPageURL(currentPage - 1) : '#';

  const moreThanThreePages = totalPages > 3;
  const pageButtons = moreThanThreePages ? 3 : totalPages;

  return (
    <PaginationRoot>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious aria-disabled={!hasPrevPage} href={prevPageURL} />
        </PaginationItem>
        {[...Array(pageButtons).keys()].map((i) => (
          <PaginationItem key={i}>
            <PaginationLink href={createPageURL(i + 1)} isActive={currentPage === i + 1}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {moreThanThreePages && <PaginationEllipsis />}
        <PaginationItem>
          <PaginationNext aria-disabled={!hasNextPage} href={nextPageURL} />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
}
