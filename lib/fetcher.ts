// src/remote/fetcher.ts

import type { InputMaybe, Scalars } from '@/graphql/generated/gql.g';

type FetchOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

type RequestInit = {
  headers: (HeadersInit & FetchOptions) | FetchOptions;
};

type ContentfulQuery = {
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export const fetcher = <TData, TVariables extends ContentfulQuery>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
) => {
  return async (): Promise<TData> => {
    const { next, cache, ...restOptions } = options || {};
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${variables?.preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`,
          ...restOptions,
        },
        body: JSON.stringify({ query, variables }),
        next: {
          ...(next ?? {}),
          tags: ['articles'],
        },
        cache,
      }
    );

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
};
