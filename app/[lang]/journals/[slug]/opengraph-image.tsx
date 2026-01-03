import { getArticlesBySlug } from '@/lib/contentful-api';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Article preview';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const getJournal = async (slug: string) => {
  const article = await getArticlesBySlug({ slug });

  return (
    article || {
      title: 'Journal not found',
      summary: 'Journal not found.',
    }
  );
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const journal = await getJournal(slug);

  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(to right, #86efac, #e9d5ff)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px',
      }}
    >
      <h1
        style={{
          fontSize: '80px',
          fontWeight: '500', // Medium weight
          color: '#059669',
          margin: '0',
          lineHeight: 1.1,
        }}
      >
        {journal.title}
      </h1>
      <p
        style={{
          fontSize: '32px',
          fontWeight: '400', // Regular weight
          color: '#1f2937',
          marginTop: '20px',
          lineHeight: 1.4,
          maxWidth: '800px',
        }}
      >
        {journal.summary}
      </p>
    </div>,
    {
      ...size,
    }
  );
}
