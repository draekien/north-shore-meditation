import { ExternalLinkIcon, UsersIcon, CalendarClockIcon, MapPinIcon } from 'lucide-react';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '../ui/item';
import { Badge } from '../ui/badge';
import { EventItemCollection } from '@/lib/contentful-api';

type EventItemProps = {
  lang: string;
} & EventItemCollection[number];

export function EventItem({ lang, ...item }: EventItemProps) {
  const startsAt = new Date(item.startsAt);
  const endsAt = new Date(item.endsAt);

  return (
    <Item variant="outline" asChild>
      <a href={item.bookingUrl!} target="_blank" rel="noopener noreferrer">
        <ItemMedia>
          <Badge>{item.type}</Badge>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="capitalize">{item.name}</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ExternalLinkIcon />
        </ItemActions>
        {item.description && <ItemDescription className="text-wrap wrap-anywhere">{item.description}</ItemDescription>}
        <ItemFooter>
          <ItemGroup className="w-full">
            <ItemGroup className="md:grid md:grid-cols-2 md:gap-4">
              <Item size="sm">
                <ItemMedia>
                  <CalendarClockIcon className="size-4" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    Starts at{' '}
                    {startsAt.toLocaleString(lang, {
                      timeZone: 'Australia/Sydney',
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </ItemTitle>
                </ItemContent>
              </Item>
              <Item size="sm">
                <ItemMedia>
                  <CalendarClockIcon className="size-4" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    Ends at{' '}
                    {endsAt.toLocaleString(lang, {
                      timeZone: 'Australia/Sydney',
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </ItemTitle>
                </ItemContent>
              </Item>
            </ItemGroup>
            <Item size="sm">
              <ItemMedia>
                <UsersIcon className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>
                  <div className="flex flex-wrap gap-2">
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
                <MapPinIcon className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="capitalize">{item.location}</ItemTitle>
                {item.locationDescription && <ItemDescription>{item.locationDescription}</ItemDescription>}
              </ItemContent>
            </Item>
          </ItemGroup>
        </ItemFooter>
      </a>
    </Item>
  );
}
