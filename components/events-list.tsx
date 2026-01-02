'use client';

import { EventFilters } from '@/app/[lang]/events/schemas';
import { useSuspenseEventsQuery } from '@/graphql/generated/gql.g';
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './ui/empty';
import { CalendarSyncIcon } from 'lucide-react';
import { Item, ItemDescription, ItemGroup, ItemHeader } from './ui/item';

type EventsListProps = {
  page: number;
  preview: boolean;
} & EventFilters;

export function EventsList({ page, preview, audiences, type, from }: EventsListProps) {
  const fromStartOfDay = from ?? new Date();

  fromStartOfDay.setHours(0, 0, 0, 0);

  const { data } = useSuspenseEventsQuery({
    limit: 25,
    preview,
    skip: (+page - 1) * 25,
    startsAtGte: fromStartOfDay.toISOString(),
    audiences: audiences?.length ? audiences : null,
    type: type || null,
  });

  if (!data.eventCollection) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <CalendarSyncIcon />
          </EmptyMedia>
          <EmptyTitle>Taking a Short Breather</EmptyTitle>
          <EmptyDescription>
            We&apos;re between events at the moment. New sessions and programs are being planned, so check back soon or
            join our mailing list for updates.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  const { items, total } = data.eventCollection;

  return (
    <ItemGroup>
      {items.map((item) => {
        if (!item) return null;

        return (
          <Item key={item.sys.id}>
            <ItemHeader>{item.name}</ItemHeader>
            {item.description && <ItemDescription>{item.description}</ItemDescription>}
          </Item>
        );
      })}
    </ItemGroup>
  );
}
