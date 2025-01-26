import {
  useArticlesBySlugQuery,
  useArticlesQuery,
  type ArticlesBySlugQuery,
  type ArticlesBySlugQueryVariables,
  type ArticlesQuery,
  type ArticlesQueryVariables,
} from '@/graphql/generated/gql.g';
import { queryClient } from './query-client';

export async function getArticles(variables: ArticlesQueryVariables) {
  const response = await queryClient.fetchQuery<ArticlesQuery>({
    queryKey: useArticlesQuery.getKey(),
    queryFn: useArticlesQuery.fetcher(variables),
  });

  return {
    items: response.blogPostCollection?.items.filter((x) => !!x) ?? [],
    total: response.blogPostCollection?.total,
    skip: response.blogPostCollection?.skip,
  };
}

export async function getArticlesBySlug(variables: ArticlesBySlugQueryVariables) {
  const response = await queryClient.fetchQuery<ArticlesBySlugQuery>({
    queryKey: useArticlesBySlugQuery.getKey(),
    queryFn: useArticlesBySlugQuery.fetcher(variables),
  });

  return response.blogPostCollection?.items.at(0);
}
