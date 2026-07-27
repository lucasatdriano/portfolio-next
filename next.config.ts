import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                pathname: '/gh/devicons/devicon/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                pathname: '/gh/lucasatdriano/**',
            },
        ],
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
};

export default nextConfig;
