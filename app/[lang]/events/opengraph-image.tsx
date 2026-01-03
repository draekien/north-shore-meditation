import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Events Preview';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
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
          fontWeight: 'bold',
          color: '#059669',
          margin: '0',
          lineHeight: 1.1,
        }}
      >
        Upcoming Events
      </h1>
      <p
        style={{
          fontSize: '32px',
          color: '#1f2937',
          marginTop: '20px',
          lineHeight: 1.4,
          maxWidth: '800px',
        }}
      >
        Our events are designed to meet you where you are. Whether you’re attending an intro session, committing to a
        course, or stepping into a retreat, each event supports effortless meditation and lasting change.
      </p>
    </div>,
    {
      ...size,
    }
  );
}
