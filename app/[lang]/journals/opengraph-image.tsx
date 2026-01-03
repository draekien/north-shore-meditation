import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Journals Preview';
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
        Notes from Stillness
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
        Take a deep dive into Transcendental Meditation® with the guidance of the teachers at North Shore Meditation
      </p>
    </div>,
    {
      ...size,
    }
  );
}
