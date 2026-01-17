'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { useCallback } from 'react';
import { eventFiltersSchema } from '@/app/[lang]/events/schemas';
import { Item, ItemGroup, ItemContent, ItemDescription } from '../ui/item';
import { GlobalPageProps } from '@/lib/types';

type EventFiltersProps = {
  searchParams: NonNullable<Awaited<GlobalPageProps['searchParams']>>;
};

export function EventFilters({ searchParams }: EventFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const readonlySearchParams = useSearchParams();

  const parsedParams = eventFiltersSchema.parse(searchParams);

  const audiences = parsedParams.audiences
    ? Array.isArray(parsedParams.audiences)
      ? parsedParams.audiences
      : [parsedParams.audiences]
    : [];
  const type = parsedParams.type;

  const replaceParams = useCallback(
    (name: string, values: string[]) => {
      const params = new URLSearchParams(readonlySearchParams.toString());
      params.delete(name);

      values.forEach((value) => params.append(name, value));

      return params.toString();
    },
    [readonlySearchParams]
  );

  const replaceParam = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(readonlySearchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [readonlySearchParams]
  );

  return (
    <ItemGroup className="grid grid-cols-1 md:grid-cols-2">
      <Item className="p-0">
        <ItemContent>
          <ItemDescription>Filter by program</ItemDescription>
          <ToggleGroup
            className="justify-start"
            variant="outline"
            size="sm"
            type="multiple"
            defaultValue={audiences}
            onValueChange={(selected) => {
              router.push(`${pathname}?${replaceParams('audiences', selected)}`, {
                scroll: false,
              });
            }}
          >
            <ToggleGroupItem value="Individual">Individual</ToggleGroupItem>
            <ToggleGroupItem value="Corporate">Corporate</ToggleGroupItem>
            <ToggleGroupItem value="TM for Women">TM for Women</ToggleGroupItem>
          </ToggleGroup>
        </ItemContent>
      </Item>
      <Item className="p-0">
        <ItemContent>
          <ItemDescription>Filter by type</ItemDescription>
          <ToggleGroup
            className="justify-start"
            variant="outline"
            size="sm"
            type="single"
            defaultValue={type}
            onValueChange={(selected) => {
              router.push(`${pathname}?${replaceParam('type', selected)}`, {
                scroll: false,
              });
            }}
          >
            <ToggleGroupItem value="Course">Course</ToggleGroupItem>
            <ToggleGroupItem value="Intro">Intro</ToggleGroupItem>
            <ToggleGroupItem value="Retreat">Retreat</ToggleGroupItem>
            <ToggleGroupItem value="Reset">Reset Studio</ToggleGroupItem>
          </ToggleGroup>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
}
