import { useQuery, useSuspenseQuery, useInfiniteQuery, useSuspenseInfiniteQuery, UseQueryOptions, UseSuspenseQueryOptions, UseInfiniteQueryOptions, InfiniteData, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

type FetchOptions = {
cache?: RequestCache;
next?: NextFetchRequestConfig;
};

            type RequestInit = {
              headers: (HeadersInit & FetchOptions) | FetchOptions;
            };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Circle: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
  Rectangle: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  fileName: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  transform: InputMaybe<ImageTransformOptions>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars['String']['input']>;
  contentType_contains: InputMaybe<Scalars['String']['input']>;
  contentType_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains: InputMaybe<Scalars['String']['input']>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName: InputMaybe<Scalars['String']['input']>;
  fileName_contains: InputMaybe<Scalars['String']['input']>;
  fileName_exists: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains: InputMaybe<Scalars['String']['input']>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height: InputMaybe<Scalars['Int']['input']>;
  height_exists: InputMaybe<Scalars['Boolean']['input']>;
  height_gt: InputMaybe<Scalars['Int']['input']>;
  height_gte: InputMaybe<Scalars['Int']['input']>;
  height_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt: InputMaybe<Scalars['Int']['input']>;
  height_lte: InputMaybe<Scalars['Int']['input']>;
  height_not: InputMaybe<Scalars['Int']['input']>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size: InputMaybe<Scalars['Int']['input']>;
  size_exists: InputMaybe<Scalars['Boolean']['input']>;
  size_gt: InputMaybe<Scalars['Int']['input']>;
  size_gte: InputMaybe<Scalars['Int']['input']>;
  size_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt: InputMaybe<Scalars['Int']['input']>;
  size_lte: InputMaybe<Scalars['Int']['input']>;
  size_not: InputMaybe<Scalars['Int']['input']>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width: InputMaybe<Scalars['Int']['input']>;
  width_exists: InputMaybe<Scalars['Boolean']['input']>;
  width_gt: InputMaybe<Scalars['Int']['input']>;
  width_gte: InputMaybe<Scalars['Int']['input']>;
  width_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt: InputMaybe<Scalars['Int']['input']>;
  width_lte: InputMaybe<Scalars['Int']['input']>;
  width_not: InputMaybe<Scalars['Int']['input']>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  blogPostCollection: Maybe<BlogPostCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/blogPost) */
export type BlogPost = Entry & _Node & {
  __typename?: 'BlogPost';
  _id: Scalars['ID']['output'];
  author: Maybe<Scalars['String']['output']>;
  content: Maybe<BlogPostContent>;
  contentfulMetadata: ContentfulMetadata;
  image: Maybe<Asset>;
  linkedFrom: Maybe<BlogPostLinkingCollections>;
  relatedPostsCollection: Maybe<BlogPostRelatedPostsCollection>;
  seo: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  slug: Maybe<Scalars['String']['output']>;
  summary: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/blogPost) */
export type BlogPostAuthorArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/blogPost) */
export type BlogPostContentArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/blogPost) */
export type BlogPostImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/blogPost) */
export type BlogPostRelatedPostsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<BlogPostRelatedPostsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<BlogPostFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/blogPost) */
export type BlogPostSeoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/blogPost) */
export type BlogPostSummaryArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  items: Array<Maybe<BlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogPostContent = {
  __typename?: 'BlogPostContent';
  json: Scalars['JSON']['output'];
  links: BlogPostContentLinks;
};

export type BlogPostContentAssets = {
  __typename?: 'BlogPostContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogPostContentEntries = {
  __typename?: 'BlogPostContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogPostContentLinks = {
  __typename?: 'BlogPostContentLinks';
  assets: BlogPostContentAssets;
  entries: BlogPostContentEntries;
  resources: BlogPostContentResources;
};

export type BlogPostContentResources = {
  __typename?: 'BlogPostContentResources';
  block: Array<BlogPostContentResourcesBlock>;
  hyperlink: Array<BlogPostContentResourcesHyperlink>;
  inline: Array<BlogPostContentResourcesInline>;
};

export type BlogPostContentResourcesBlock = ResourceLink & {
  __typename?: 'BlogPostContentResourcesBlock';
  sys: ResourceSys;
};

export type BlogPostContentResourcesHyperlink = ResourceLink & {
  __typename?: 'BlogPostContentResourcesHyperlink';
  sys: ResourceSys;
};

export type BlogPostContentResourcesInline = ResourceLink & {
  __typename?: 'BlogPostContentResourcesInline';
  sys: ResourceSys;
};

export type BlogPostFilter = {
  AND: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  author: InputMaybe<Scalars['String']['input']>;
  author_contains: InputMaybe<Scalars['String']['input']>;
  author_exists: InputMaybe<Scalars['Boolean']['input']>;
  author_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not: InputMaybe<Scalars['String']['input']>;
  author_not_contains: InputMaybe<Scalars['String']['input']>;
  author_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content_contains: InputMaybe<Scalars['String']['input']>;
  content_exists: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  relatedPosts: InputMaybe<CfBlogPostNestedFilter>;
  relatedPostsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  seo_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  summary: InputMaybe<Scalars['String']['input']>;
  summary_contains: InputMaybe<Scalars['String']['input']>;
  summary_exists: InputMaybe<Scalars['Boolean']['input']>;
  summary_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  summary_not: InputMaybe<Scalars['String']['input']>;
  summary_not_contains: InputMaybe<Scalars['String']['input']>;
  summary_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogPostLinkingCollections = {
  __typename?: 'BlogPostLinkingCollections';
  blogPostCollection: Maybe<BlogPostCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type BlogPostLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<BlogPostLinkingCollectionsBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum BlogPostLinkingCollectionsBlogPostCollectionOrder {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum BlogPostOrder {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type BlogPostRelatedPostsCollection = {
  __typename?: 'BlogPostRelatedPostsCollection';
  items: Array<Maybe<BlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum BlogPostRelatedPostsCollectionOrder {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists: InputMaybe<Scalars['Boolean']['input']>;
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** An event that you will be running. Requires an external link to the event booking page. [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/event) */
export type Event = Entry & _Node & {
  __typename?: 'Event';
  _id: Scalars['ID']['output'];
  audiences: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  bookingUrl: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  endsAt: Maybe<Scalars['DateTime']['output']>;
  linkedFrom: Maybe<EventLinkingCollections>;
  name: Maybe<Scalars['String']['output']>;
  physicalLocation: Maybe<Location>;
  startsAt: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  type: Maybe<Scalars['String']['output']>;
};


/** An event that you will be running. Requires an external link to the event booking page. [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/event) */
export type EventAudiencesArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** An event that you will be running. Requires an external link to the event booking page. [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/event) */
export type EventBookingUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** An event that you will be running. Requires an external link to the event booking page. [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/event) */
export type EventDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** An event that you will be running. Requires an external link to the event booking page. [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/event) */
export type EventEndsAtArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** An event that you will be running. Requires an external link to the event booking page. [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/event) */
export type EventLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** An event that you will be running. Requires an external link to the event booking page. [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/event) */
export type EventNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** An event that you will be running. Requires an external link to the event booking page. [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/event) */
export type EventPhysicalLocationArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** An event that you will be running. Requires an external link to the event booking page. [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/event) */
export type EventStartsAtArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


/** An event that you will be running. Requires an external link to the event booking page. [See type definition](https://app.contentful.com/spaces/esa8rw88wody/content_types/event) */
export type EventTypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventCollection = {
  __typename?: 'EventCollection';
  items: Array<Maybe<Event>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventFilter = {
  AND: InputMaybe<Array<InputMaybe<EventFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EventFilter>>>;
  audiences_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  audiences_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  audiences_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  audiences_exists: InputMaybe<Scalars['Boolean']['input']>;
  bookingUrl: InputMaybe<Scalars['String']['input']>;
  bookingUrl_contains: InputMaybe<Scalars['String']['input']>;
  bookingUrl_exists: InputMaybe<Scalars['Boolean']['input']>;
  bookingUrl_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bookingUrl_not: InputMaybe<Scalars['String']['input']>;
  bookingUrl_not_contains: InputMaybe<Scalars['String']['input']>;
  bookingUrl_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  endsAt: InputMaybe<Scalars['DateTime']['input']>;
  endsAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  endsAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  endsAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  endsAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endsAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  endsAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  endsAt_not: InputMaybe<Scalars['DateTime']['input']>;
  endsAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  name: InputMaybe<Scalars['String']['input']>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_exists: InputMaybe<Scalars['Boolean']['input']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not: InputMaybe<Scalars['String']['input']>;
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  physicalLocation_exists: InputMaybe<Scalars['Boolean']['input']>;
  physicalLocation_within_circle: InputMaybe<Scalars['Circle']['input']>;
  physicalLocation_within_rectangle: InputMaybe<Scalars['Rectangle']['input']>;
  startsAt: InputMaybe<Scalars['DateTime']['input']>;
  startsAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  startsAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  startsAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  startsAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  startsAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  startsAt_not: InputMaybe<Scalars['DateTime']['input']>;
  startsAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys: InputMaybe<SysFilter>;
  type: InputMaybe<Scalars['String']['input']>;
  type_contains: InputMaybe<Scalars['String']['input']>;
  type_exists: InputMaybe<Scalars['Boolean']['input']>;
  type_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not: InputMaybe<Scalars['String']['input']>;
  type_not_contains: InputMaybe<Scalars['String']['input']>;
  type_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EventLinkingCollections = {
  __typename?: 'EventLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type EventLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};

export enum EventOrder {
  BookingUrlAsc = 'bookingUrl_ASC',
  BookingUrlDesc = 'bookingUrl_DESC',
  EndsAtAsc = 'endsAt_ASC',
  EndsAtDesc = 'endsAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartsAtAsc = 'startsAt_ASC',
  StartsAtDesc = 'startsAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars['Dimension']['input']>;
};

export type Location = {
  __typename?: 'Location';
  lat: Maybe<Scalars['Float']['output']>;
  lon: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _node: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  blogPost: Maybe<BlogPost>;
  blogPostCollection: Maybe<BlogPostCollection>;
  entryCollection: Maybe<EntryCollection>;
  event: Maybe<Event>;
  eventCollection: Maybe<EventCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<AssetFilter>;
};


export type QueryBlogPostArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<BlogPostFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<EntryFilter>;
};


export type QueryEventArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<EventOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<EventFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  publishedVersion: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id: InputMaybe<Scalars['String']['input']>;
  id_contains: InputMaybe<Scalars['String']['input']>;
  id_exists: InputMaybe<Scalars['Boolean']['input']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not: InputMaybe<Scalars['String']['input']>;
  id_not_contains: InputMaybe<Scalars['String']['input']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id: Maybe<Scalars['String']['output']>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte: InputMaybe<Scalars['DateTime']['input']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfBlogPostNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfBlogPostNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfBlogPostNestedFilter>>>;
  author: InputMaybe<Scalars['String']['input']>;
  author_contains: InputMaybe<Scalars['String']['input']>;
  author_exists: InputMaybe<Scalars['Boolean']['input']>;
  author_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not: InputMaybe<Scalars['String']['input']>;
  author_not_contains: InputMaybe<Scalars['String']['input']>;
  author_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content_contains: InputMaybe<Scalars['String']['input']>;
  content_exists: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  relatedPostsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  seo_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  summary: InputMaybe<Scalars['String']['input']>;
  summary_contains: InputMaybe<Scalars['String']['input']>;
  summary_exists: InputMaybe<Scalars['Boolean']['input']>;
  summary_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  summary_not: InputMaybe<Scalars['String']['input']>;
  summary_not_contains: InputMaybe<Scalars['String']['input']>;
  summary_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticlesBySlugQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ArticlesBySlugQuery = { __typename?: 'Query', blogPostCollection: { __typename?: 'BlogPostCollection', items: Array<{ __typename?: 'BlogPost', title: string | null, slug: string | null, summary: string | null, seo: Array<string | null> | null, author: string | null, sys: { __typename?: 'Sys', id: string, publishedAt: any | null }, content: { __typename?: 'BlogPostContent', json: any, links: { __typename?: 'BlogPostContentLinks', assets: { __typename?: 'BlogPostContentAssets', block: Array<{ __typename?: 'Asset', url: string | null, description: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, image: { __typename?: 'Asset', url: string | null } | null, relatedPostsCollection: { __typename?: 'BlogPostRelatedPostsCollection', items: Array<{ __typename?: 'BlogPost', title: string | null, slug: string | null, summary: string | null, author: string | null, sys: { __typename?: 'Sys', id: string, publishedAt: any | null }, image: { __typename?: 'Asset', title: string | null, description: string | null, url: string | null, width: number | null, height: number | null } | null } | null> } | null } | null> } | null };

export type ArticlesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ArticlesQuery = { __typename?: 'Query', blogPostCollection: { __typename?: 'BlogPostCollection', skip: number, limit: number, total: number, items: Array<{ __typename?: 'BlogPost', title: string | null, slug: string | null, summary: string | null, author: string | null, sys: { __typename?: 'Sys', id: string, publishedAt: any | null }, image: { __typename?: 'Asset', title: string | null, url: string | null, description: string | null, width: number | null, height: number | null } | null } | null> } | null };

export type EventsQueryVariables = Exact<{
  type: InputMaybe<Scalars['String']['input']>;
  audiences: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  startsAtGte: Scalars['DateTime']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type EventsQuery = { __typename?: 'Query', eventCollection: { __typename?: 'EventCollection', skip: number, limit: number, total: number, items: Array<{ __typename?: 'Event', name: string | null, description: string | null, type: string | null, audiences: Array<string | null> | null, bookingUrl: string | null, startsAt: any | null, endsAt: any | null, sys: { __typename?: 'Sys', id: string, publishedAt: any | null }, physicalLocation: { __typename?: 'Location', lat: number | null, lon: number | null } | null } | null> } | null };



export const ArticlesBySlugDocument = `
    query ArticlesBySlug($slug: String, $preview: Boolean = false) {
  blogPostCollection(where: {slug: $slug}, limit: 1, preview: $preview) {
    items {
      sys {
        id
        publishedAt
      }
      title
      slug
      summary
      seo
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
      relatedPostsCollection {
        items {
          title
          slug
          summary
          author
          sys {
            id
            publishedAt
          }
          image {
            title
            description
            url
            width
            height
          }
        }
      }
    }
  }
}
    `;

export const useArticlesBySlugQuery = <
      TData = ArticlesBySlugQuery,
      TError = unknown
    >(
      variables?: ArticlesBySlugQueryVariables,
      options?: Omit<UseQueryOptions<ArticlesBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ArticlesBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ArticlesBySlugQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['ArticlesBySlug'] : ['ArticlesBySlug', variables],
    queryFn: fetcher<ArticlesBySlugQuery, ArticlesBySlugQueryVariables>(ArticlesBySlugDocument, variables),
    ...options
  }
    )};

useArticlesBySlugQuery.getKey = (variables?: ArticlesBySlugQueryVariables) => variables === undefined ? ['ArticlesBySlug'] : ['ArticlesBySlug', variables];

export const useSuspenseArticlesBySlugQuery = <
      TData = ArticlesBySlugQuery,
      TError = unknown
    >(
      variables?: ArticlesBySlugQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<ArticlesBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<ArticlesBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<ArticlesBySlugQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['ArticlesBySlugSuspense'] : ['ArticlesBySlugSuspense', variables],
    queryFn: fetcher<ArticlesBySlugQuery, ArticlesBySlugQueryVariables>(ArticlesBySlugDocument, variables),
    ...options
  }
    )};

useSuspenseArticlesBySlugQuery.getKey = (variables?: ArticlesBySlugQueryVariables) => variables === undefined ? ['ArticlesBySlugSuspense'] : ['ArticlesBySlugSuspense', variables];

export const useInfiniteArticlesBySlugQuery = <
      TData = InfiniteData<ArticlesBySlugQuery>,
      TError = unknown
    >(
      variables: ArticlesBySlugQueryVariables,
      options: Omit<UseInfiniteQueryOptions<ArticlesBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<ArticlesBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<ArticlesBySlugQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['ArticlesBySlug.infinite'] : ['ArticlesBySlug.infinite', variables],
      queryFn: (metaData) => fetcher<ArticlesBySlugQuery, ArticlesBySlugQueryVariables>(ArticlesBySlugDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteArticlesBySlugQuery.getKey = (variables?: ArticlesBySlugQueryVariables) => variables === undefined ? ['ArticlesBySlug.infinite'] : ['ArticlesBySlug.infinite', variables];

export const useSuspenseInfiniteArticlesBySlugQuery = <
      TData = InfiniteData<ArticlesBySlugQuery>,
      TError = unknown
    >(
      variables: ArticlesBySlugQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<ArticlesBySlugQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<ArticlesBySlugQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<ArticlesBySlugQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['ArticlesBySlug.infiniteSuspense'] : ['ArticlesBySlug.infiniteSuspense', variables],
      queryFn: (metaData) => fetcher<ArticlesBySlugQuery, ArticlesBySlugQueryVariables>(ArticlesBySlugDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteArticlesBySlugQuery.getKey = (variables?: ArticlesBySlugQueryVariables) => variables === undefined ? ['ArticlesBySlug.infiniteSuspense'] : ['ArticlesBySlug.infiniteSuspense', variables];


useArticlesBySlugQuery.fetcher = (variables?: ArticlesBySlugQueryVariables, options?: RequestInit['headers']) => fetcher<ArticlesBySlugQuery, ArticlesBySlugQueryVariables>(ArticlesBySlugDocument, variables, options);

export const ArticlesDocument = `
    query Articles($limit: Int = 10, $skip: Int = 0, $preview: Boolean = false) {
  blogPostCollection(
    where: {slug_exists: true}
    order: sys_publishedAt_DESC
    limit: $limit
    skip: $skip
    preview: $preview
  ) {
    items {
      sys {
        id
        publishedAt
      }
      title
      slug
      summary
      author
      image {
        title
        url
        description
        width
        height
      }
    }
    skip
    limit
    total
  }
}
    `;

export const useArticlesQuery = <
      TData = ArticlesQuery,
      TError = unknown
    >(
      variables?: ArticlesQueryVariables,
      options?: Omit<UseQueryOptions<ArticlesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ArticlesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ArticlesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Articles'] : ['Articles', variables],
    queryFn: fetcher<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, variables),
    ...options
  }
    )};

useArticlesQuery.getKey = (variables?: ArticlesQueryVariables) => variables === undefined ? ['Articles'] : ['Articles', variables];

export const useSuspenseArticlesQuery = <
      TData = ArticlesQuery,
      TError = unknown
    >(
      variables?: ArticlesQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<ArticlesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<ArticlesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<ArticlesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['ArticlesSuspense'] : ['ArticlesSuspense', variables],
    queryFn: fetcher<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, variables),
    ...options
  }
    )};

useSuspenseArticlesQuery.getKey = (variables?: ArticlesQueryVariables) => variables === undefined ? ['ArticlesSuspense'] : ['ArticlesSuspense', variables];

export const useInfiniteArticlesQuery = <
      TData = InfiniteData<ArticlesQuery>,
      TError = unknown
    >(
      variables: ArticlesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<ArticlesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<ArticlesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<ArticlesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['Articles.infinite'] : ['Articles.infinite', variables],
      queryFn: (metaData) => fetcher<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteArticlesQuery.getKey = (variables?: ArticlesQueryVariables) => variables === undefined ? ['Articles.infinite'] : ['Articles.infinite', variables];

export const useSuspenseInfiniteArticlesQuery = <
      TData = InfiniteData<ArticlesQuery>,
      TError = unknown
    >(
      variables: ArticlesQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<ArticlesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<ArticlesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<ArticlesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['Articles.infiniteSuspense'] : ['Articles.infiniteSuspense', variables],
      queryFn: (metaData) => fetcher<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteArticlesQuery.getKey = (variables?: ArticlesQueryVariables) => variables === undefined ? ['Articles.infiniteSuspense'] : ['Articles.infiniteSuspense', variables];


useArticlesQuery.fetcher = (variables?: ArticlesQueryVariables, options?: RequestInit['headers']) => fetcher<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, variables, options);

export const EventsDocument = `
    query Events($type: String, $audiences: [String], $startsAtGte: DateTime!, $limit: Int = 10, $skip: Int = 0, $preview: Boolean = false) {
  eventCollection(
    where: {type: $type, audiences_contains_some: $audiences, startsAt_gte: $startsAtGte}
    order: startsAt_ASC
    limit: $limit
    skip: $skip
    preview: $preview
  ) {
    items {
      sys {
        id
        publishedAt
      }
      name
      description
      type
      audiences
      bookingUrl
      startsAt
      endsAt
      physicalLocation {
        lat
        lon
      }
    }
    skip
    limit
    total
  }
}
    `;

export const useEventsQuery = <
      TData = EventsQuery,
      TError = unknown
    >(
      variables: EventsQueryVariables,
      options?: Omit<UseQueryOptions<EventsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<EventsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<EventsQuery, TError, TData>(
      {
    queryKey: ['Events', variables],
    queryFn: fetcher<EventsQuery, EventsQueryVariables>(EventsDocument, variables),
    ...options
  }
    )};

useEventsQuery.getKey = (variables: EventsQueryVariables) => ['Events', variables];

export const useSuspenseEventsQuery = <
      TData = EventsQuery,
      TError = unknown
    >(
      variables: EventsQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<EventsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<EventsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<EventsQuery, TError, TData>(
      {
    queryKey: ['EventsSuspense', variables],
    queryFn: fetcher<EventsQuery, EventsQueryVariables>(EventsDocument, variables),
    ...options
  }
    )};

useSuspenseEventsQuery.getKey = (variables: EventsQueryVariables) => ['EventsSuspense', variables];

export const useInfiniteEventsQuery = <
      TData = InfiniteData<EventsQuery>,
      TError = unknown
    >(
      variables: EventsQueryVariables,
      options: Omit<UseInfiniteQueryOptions<EventsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<EventsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<EventsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Events.infinite', variables],
      queryFn: (metaData) => fetcher<EventsQuery, EventsQueryVariables>(EventsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteEventsQuery.getKey = (variables: EventsQueryVariables) => ['Events.infinite', variables];

export const useSuspenseInfiniteEventsQuery = <
      TData = InfiniteData<EventsQuery>,
      TError = unknown
    >(
      variables: EventsQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<EventsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<EventsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<EventsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Events.infiniteSuspense', variables],
      queryFn: (metaData) => fetcher<EventsQuery, EventsQueryVariables>(EventsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteEventsQuery.getKey = (variables: EventsQueryVariables) => ['Events.infiniteSuspense', variables];


useEventsQuery.fetcher = (variables: EventsQueryVariables, options?: RequestInit['headers']) => fetcher<EventsQuery, EventsQueryVariables>(EventsDocument, variables, options);
