/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/_next/image/**',
            },
        ],
    }
}

module.exports = nextConfig
