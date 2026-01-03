import { baseKeywords } from '@/lib/constants';
import { getEvents } from '@/lib/contentful-api';
import { paginationParamsSchema } from '@/lib/schemas';
import { GlobalPageProps } from '@/lib/types';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { eventFiltersSchema } from './schemas';
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from '@/components/ui/empty';
import { CalendarSyncIcon } from 'lucide-react';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from '@/components/ui/item';
import PageContent from '@/components/ui/page-content';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import PageSectionContainer from '@/components/ui/page-section.container';
import { EventItem } from '@/components/events/event-items';
import { EventFilters } from '@/components/events/event-filters';
import { Separator } from '@/components/ui/separator';
import { EventDefaults } from '@/components/events/event-constants';
import { EventPagination } from '@/components/events/event-pagination';
import ButtonLink from '@/components/ui/button-link';

export async function generateMetadata(props: GlobalPageProps): Promise<Metadata> {
  const { lang } = await props.params;

  return {
    metadataBase: new URL('https://www.northshoremeditation.au'),
    title: 'Events',
    description:
      'Discover upcoming meditation events at North Shore Meditation. Join guided sessions, workshops, and retreats designed to reduce stress, build clarity, and support real-world mindfulness practice',
    keywords: [...baseKeywords, 'events'],
    alternates: {
      canonical: `/${lang}/events`,
      languages: {
        en: '/en/events',
      },
    },
    openGraph: {
      url: `/${lang}/events`,
    },
  };
}

export default async function Page({ searchParams, params }: GlobalPageProps) {
  if (!searchParams) throw new Error('Missing search params');

  const search = await searchParams;

  const { page } = paginationParamsSchema.parse(search);
  const { audiences, type, from } = eventFiltersSchema.parse(search);

  const { isEnabled: preview } = await draftMode();

  const fromStartOfDay = from ?? new Date();

  fromStartOfDay.setHours(0, 0, 0, 0);

  const { items, total } = await getEvents({
    skip: (page - 1) * EventDefaults.PAGE_LIMIT,
    limit: EventDefaults.PAGE_LIMIT,
    preview,
    audiences: audiences?.length ? audiences : null,
    type: type || null,
    startsAtGte: fromStartOfDay,
  });

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center md:min-h-[50dvh] md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h1 className="text-primary">Upcoming Events</h1>
              <p className="text-foreground mb-6 text-xl">
                Our events are designed to meet you where you are. Whether you’re attending an intro session, committing
                to a course, or stepping into a retreat, each event supports effortless meditation and lasting change.
              </p>
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer className="container max-w-3xl space-y-4">
          <header>
            <EventFilters searchParams={search} />
          </header>
          <Separator />
          {!items.length ? (
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <CalendarSyncIcon />
                </EmptyMedia>
                <EmptyTitle>Taking a Short Breather</EmptyTitle>
                <EmptyDescription>
                  We&apos;re between events at the moment. New sessions and programs are being planned, so check back
                  soon or join our mailing list for updates.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <>
              <ItemGroup className="gap-4">
                {items.map((item) => (
                  <EventItem key={item.sys.id} {...item} />
                ))}
              </ItemGroup>
              <footer>
                <EventPagination page={page} total={total || 0} />
              </footer>
            </>
          )}
          <Item>
            <ItemContent>
              <ItemTitle>Can&apos;t find an event that fits?</ItemTitle>
              <ItemDescription>Let us know so you can get notified about upcoming events</ItemDescription>
            </ItemContent>
            <ItemActions>
              <ButtonLink
                href={{
                  pathname: '/contact-us',
                  search: 'q=upcoming-events',
                }}
              >
                Contact Us
              </ButtonLink>
            </ItemActions>
          </Item>
        </PageSectionContainer>
      </SecondaryPageSection>
    </PageContent>
  );
}
