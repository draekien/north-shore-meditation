import { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['graphql/**/*.graphql'],
  generates: {
    './graphql/generated/gql.g.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        {
          add: {
            content: `
type FetchOptions = {
cache?: RequestCache;
next?: NextFetchRequestConfig;
};

            type RequestInit = {
              headers: (HeadersInit & FetchOptions) | FetchOptions;
            };`,
          },
        },
      ],
      config: {
        avoidOptionals: true,
        reactQueryVersion: 5,
        legacyMode: false,
        exposeFetcher: true,
        exposeQueryKeys: true,
        addSuspenseQuery: true,
        addInfiniteQuery: true,
        fetcher: '@/lib/fetcher#fetcher',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
