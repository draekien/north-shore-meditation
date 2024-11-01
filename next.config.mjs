import VercelToolbar from '@vercel/toolbar/plugins/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
};

const withVercelToolbar = VercelToolbar();

export default withVercelToolbar(nextConfig);
