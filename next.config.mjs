/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cloudflare.steamstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'steamcdn-a.akamaihd.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.steamstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.cloudflare.steamstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.fastly.steamstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.akamai.steamstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.steamusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'steamusercontent-a.akamaihd.net',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '**.steamusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.steamusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
