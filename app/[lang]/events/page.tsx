import { baseKeywords } from '@/lib/constants';
import { getEvents } from '@/lib/contentful-api';
import { paginationParamsSchema } from '@/lib/schemas';
import { GlobalPageProps } from '@/lib/types';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { eventFiltersSchema } from './schemas';
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from '@/components/ui/empty';
import { CalendarClockIcon, CalendarSyncIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import {
  ItemGroup,
  ItemDescription,
  Item,
  ItemContent,
  ItemTitle,
  ItemActions,
  ItemMedia,
  ItemFooter,
} from '@/components/ui/item';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import PageContent from '@/components/ui/page-content';
import PrimaryPageSection from '@/components/ui/page-section.primary';
import SecondaryPageSection from '@/components/ui/page-section.secondary';
import PageSectionContainer from '@/components/ui/page-section.container';

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

  const { lang } = await params;
  const { isEnabled: preview } = await draftMode();

  const fromStartOfDay = from ?? new Date();

  fromStartOfDay.setHours(0, 0, 0, 0);

  const { items, total } = await getEvents({
    skip: (page - 1) * 25,
    limit: 25,
    preview,
    audiences: audiences?.length ? audiences : null,
    type: type || null,
    startsAtGte: fromStartOfDay,
  });

  if (!items.length) {
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

  return (
    <PageContent>
      <PrimaryPageSection>
        <PageSectionContainer>
          <div className="flex flex-col items-center md:min-h-[50dvh] md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h1 className="text-primary">Upcoming Events</h1>
              <p className="mb-6 text-xl text-foreground">
                Our events are designed to meet you where you are. Whether you’re attending an intro session, committing
                to a course, or stepping into a retreat, each event supports effortless meditation and lasting change.
              </p>
            </div>
          </div>
        </PageSectionContainer>
      </PrimaryPageSection>
      <SecondaryPageSection>
        <PageSectionContainer>
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
            <ItemGroup className="container m-4">
              {items.map((item) => {
                const startsAt = new Date(item.startsAt);
                const endsAt = new Date(item.endsAt);

                return (
                  <Item key={item.sys.id} variant="outline" asChild>
                    <a href={item.bookingUrl!} target="_blank" rel="noopener noreferrer">
                      <ItemMedia>
                        <Badge>{item.type}</Badge>
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>{item.name}</ItemTitle>
                        {item.description && <ItemDescription>{item.description}</ItemDescription>}
                      </ItemContent>
                      <ItemActions>
                        <ExternalLinkIcon />
                      </ItemActions>
                      <ItemFooter>
                        <ItemGroup>
                          <Item size="sm">
                            <ItemMedia>
                              <UsersIcon className="size-4" />
                            </ItemMedia>
                            <ItemContent>
                              <ItemTitle>
                                <div className="flex gap-2">
                                  {item.audiences?.map((audience) => (
                                    <Badge key={audience} variant="outline">
                                      {audience}
                                    </Badge>
                                  ))}
                                </div>
                              </ItemTitle>
                            </ItemContent>
                          </Item>
                          <Item size="sm">
                            <ItemMedia>
                              <CalendarClockIcon className="size-4" />
                            </ItemMedia>
                            <ItemContent>
                              <ItemTitle>
                                {startsAt.toLocaleString()} - {endsAt.toLocaleString()}
                              </ItemTitle>
                            </ItemContent>
                          </Item>
                          <Item size="sm">
                            <ItemMedia>
                              <MapPinIcon className="size-4" />
                            </ItemMedia>
                            <ItemContent>
                              <ItemTitle>{item.location}</ItemTitle>
                              {item.locationDescription && (
                                <ItemDescription>{item.locationDescription}</ItemDescription>
                              )}
                            </ItemContent>
                          </Item>
                        </ItemGroup>
                      </ItemFooter>
                    </a>
                  </Item>
                );
              })}
            </ItemGroup>
          )}
        </PageSectionContainer>
      </SecondaryPageSection>
    </PageContent>
  );
}
