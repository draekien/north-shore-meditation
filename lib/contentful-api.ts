import {
  EventsQuery,
  EventsQueryVariables,
  useArticlesBySlugQuery,
  useArticlesQuery,
  useEventsQuery,
  type ArticlesBySlugQuery,
  type ArticlesBySlugQueryVariables,
  type ArticlesQuery,
  type ArticlesQueryVariables,
} from '@/graphql/generated/gql.g';
import { cache } from 'react';
import { queryClient } from './query-client';

export const getArticles = cache(async (variables: ArticlesQueryVariables) => {
  const response = await queryClient.fetchQuery<ArticlesQuery>({
    queryKey: useArticlesQuery.getKey(variables),
    queryFn: useArticlesQuery.fetcher(variables),
  });

  return {
    items: response.blogPostCollection?.items.filter((x) => !!x) ?? [],
    total: response.blogPostCollection?.total,
    skip: response.blogPostCollection?.skip,
  };
});

export const getAllArticles = cache(async () => {
  const limit = 100;
  let skip = 0;
  let total = Infinity;
  const items: Awaited<ReturnType<typeof getArticles>>['items'] = [];

  while (skip < total) {
    const page = await getArticles({ limit, skip });
    items.push(...page.items);
    total = page.total ?? 0;
    skip += limit;
  }

  return { items };
});

export const getArticlesBySlug = cache(async (variables: ArticlesBySlugQueryVariables) => {
  const response = await queryClient.fetchQuery<ArticlesBySlugQuery>({
    queryKey: useArticlesBySlugQuery.getKey(variables),
    queryFn: useArticlesBySlugQuery.fetcher(variables),
  });

  return response.blogPostCollection?.items.at(0);
});

export const getEvents = cache(async (variables: EventsQueryVariables) => {
  const response = await queryClient.fetchQuery<EventsQuery>({
    queryKey: useEventsQuery.getKey(variables),
    queryFn: useEventsQuery.fetcher(variables),
  });

  return {
    items: response.eventCollection?.items.filter((x) => !!x) ?? [],
    total: response.eventCollection?.total,
    skip: response.eventCollection?.skip,
  };
});

export type EventsResponse = Awaited<ReturnType<typeof getEvents>>;
export type EventItemCollection = EventsResponse['items'];
