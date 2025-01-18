import type { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const blogPostGraphQlFields = `
  sys {
    id
    publishedAt
  }
  title
  slug
  summary
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  author
  image {
    url
  }
`;

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ['blogs'] },
    }
  ).then((response) => response.json());
}

type BlogPost = {
  sys: {
    id: string;
    publishedAt: Date;
  };
  title: string;
  slug: string;
  summary: string;
  content: {
    json: Parameters<typeof documentToReactComponents>[0];
    links: {
      assets: {
        block: {
          sys: {
            id: string;
          };
          url: string;
          description: string;
        }[];
      };
    };
  };
  author: string;
  seo: string[];
  image: {
    title: string;
    url: string;
  };
};

function extractBlogPostEntries(fetchResponse: { data?: { blogPostCollection?: { items: BlogPost[] } } }) {
  return fetchResponse?.data?.blogPostCollection?.items ?? [];
}

export async function getAllBlogPosts(
  // For this demo set the default limit to always return 3 articles.
  limit = 3,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const articles = await fetchGraphQL(
    `query {
        blogPostCollection(where:{slug_exists: true}, order: sys_publishedAt_DESC, limit: ${limit}, preview: ${
          isDraftMode ? 'true' : 'false'
        }) {
          items {
            ${blogPostGraphQlFields}
          }
        }
      }`,
    isDraftMode
  );
  return extractBlogPostEntries(articles);
}

export async function getBlogPost(slug: string, isDraftMode = false) {
  const article = await fetchGraphQL(
    `query {
        blogPostCollection(where:{slug: "${slug}"}, limit: 1, preview: ${isDraftMode ? 'true' : 'false'}) {
          items {
            ${blogPostGraphQlFields}
          }
        }
      }`,
    isDraftMode
  );
  return extractBlogPostEntries(article)?.at(0);
}
