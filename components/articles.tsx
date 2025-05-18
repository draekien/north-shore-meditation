import type { Locale } from '@/lib/constants';
import type { getArticles } from '@/lib/contentful-api';
import { cn } from '@/lib/utils';
import type { ClassValue } from 'clsx';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ButtonLink from './ui/button-link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

type Article = Awaited<ReturnType<typeof getArticles>>['items'][0] & { lang: Locale };

function ArticleCard({ title, summary, slug, image, author, sys, lang }: Article) {
  return (
    <article className="w-full md:max-w-80">
      <Card className="overflow-clip bg-card/70 backdrop-blur">
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
          <ButtonLink href={`/${lang}/journals/${slug}`} variant="link" className="ml-auto">
            Read More <ArrowRight size={14} />
          </ButtonLink>
        </CardFooter>
      </Card>
    </article>
  );
}

type ArticlesProps = {
  articles: Awaited<ReturnType<typeof getArticles>>['items'];
  className?: ClassValue;
  id?: string;
  lang: Locale;
};

export function Articles({ id, articles, className, lang }: ArticlesProps) {
  return (
    <div id={id} className={cn('flex flex-wrap items-center justify-around gap-4 md:gap-8 lg:gap-16', className)}>
      {articles.map((article) => (
        <ArticleCard key={article.sys.id} {...article} lang={lang} />
      ))}
    </div>
  );
}
