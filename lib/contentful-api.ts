import {
  BlogPostBySlugQuery,
  BlogPostsQuery,
  useBlogPostBySlugQuery,
  useBlogPostsQuery,
  type BlogPostBySlugQueryVariables,
  type BlogPostsQueryVariables,
} from '@/graphql/generated/gql.g';
import { queryClient } from './query-client';

export async function getBlogPosts(variables: BlogPostsQueryVariables) {
  const response = await queryClient.fetchQuery<BlogPostsQuery>({
    queryKey: useBlogPostsQuery.getKey(),
    queryFn: useBlogPostsQuery.fetcher(variables),
  });

  return {
    items: response.blogPostCollection?.items.filter((x) => !!x) ?? [],
    total: response.blogPostCollection?.total,
    skip: response.blogPostCollection?.skip,
  };
}

export async function getBlogPostBySlug(variables: BlogPostBySlugQueryVariables) {
  const response = await queryClient.fetchQuery<BlogPostBySlugQuery>({
    queryKey: useBlogPostBySlugQuery.getKey(),
    queryFn: useBlogPostBySlugQuery.fetcher(variables),
  });

  return response.blogPostCollection?.items.at(0);
}
