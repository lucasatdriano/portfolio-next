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
        ],
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
};

export default nextConfig;
