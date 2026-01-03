import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'TM Reset Studio Preview';
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
        TM Reset Studio
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
        A half-day TM immersion to restore the ease, the confidence, and the quiet edge of regular practice
      </p>
    </div>,
    {
      ...size,
    }
  );
}
