/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['robohash.org']
    }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)