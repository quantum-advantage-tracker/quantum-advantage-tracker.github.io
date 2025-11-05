import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: process.env.PAGES_BASE_PATH,

  typedRoutes: true,
};

export default nextConfig;
