import VercelToolbar from '@vercel/toolbar/plugins/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withVercelToolbar = VercelToolbar();

export default withVercelToolbar(nextConfig);
