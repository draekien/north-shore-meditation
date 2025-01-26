import type { getBlogPosts } from '@/lib/contentful-api';
import { cn } from '@/lib/utils';
import type { ClassValue } from 'clsx';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ButtonLink from './ui/button-link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

type Article = Awaited<ReturnType<typeof getBlogPosts>>[0];

function ArticleCard({ title, summary, slug, image, author, sys }: Article) {
  return (
    <article className="w-full sm:max-w-80">
      <Card className="overflow-clip">
        {image?.url && (
          <Image
            src={image.url}
            alt={image.title ?? `Image for ${title}`}
            height={image.height ?? '263'}
            width={image.width ?? '350'}
            className="w-full object-cover"
          />
        )}
        <CardHeader>
          <CardTitle className="text-primary">{title}</CardTitle>
          <CardDescription className="space-x-1">
            {author} | {new Date(sys.publishedAt).toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent>{summary}</CardContent>
        <CardFooter>
          <ButtonLink href={`/articles/${slug}`} variant="link" className="ml-auto">
            Read More <ArrowRight size={14} />
          </ButtonLink>
        </CardFooter>
      </Card>
    </article>
  );
}

type ArticlesProps = {
  articles: Awaited<ReturnType<typeof getBlogPosts>>;
  className?: ClassValue;
};

export function Articles({ articles, className }: ArticlesProps) {
  return (
    <div className={cn('flex flex-wrap items-center justify-around gap-4 md:gap-8 lg:gap-16', className)}>
      {articles.map((article) => (
        <ArticleCard key={article.sys.id} {...article} />
      ))}
    </div>
  );
}
