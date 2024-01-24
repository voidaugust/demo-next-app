/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/demo-next-app' : '',
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://voidaugust.github.io/demo-next-app' : undefined,
};

export default nextConfig