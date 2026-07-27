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
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '/lucasatdriano/portfolio-next/**',
            },
        ],
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
};

export default nextConfig;
