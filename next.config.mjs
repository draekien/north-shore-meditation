import VercelToolbar from '@vercel/toolbar/plugins/next';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withVercelToolbar = VercelToolbar();

export default withVercelToolbar(nextConfig);
