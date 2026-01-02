import {
  EventsQuery,
  EventsQueryVariables,
  useArticlesBySlugQuery,
  useArticlesQuery,
  useEventsQuery,
  useInfiniteArticlesQuery,
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
  const response = await queryClient.fetchInfiniteQuery({
    queryKey: useInfiniteArticlesQuery.getKey(),
    queryFn: (metaData) => useArticlesQuery.fetcher({ skip: metaData.pageParam })(),
    initialPageParam: 0,
    getNextPageParam: (lastPage: ArticlesQuery) => {
      if (!lastPage.blogPostCollection) return;
      if (lastPage.blogPostCollection.total <= lastPage.blogPostCollection.skip) return;
      return lastPage.blogPostCollection.limit + lastPage.blogPostCollection.skip;
    },
  });

  return {
    items: response.pages.flatMap((x) => x.blogPostCollection?.items).filter(Boolean),
  };
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
