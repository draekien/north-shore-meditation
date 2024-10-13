'use client';

import Error from 'next/error';

export default function BlockedPage() {
  return <Error statusCode={429} title="Too many requests." />;
}
