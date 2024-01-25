module.exports = {
    images: {
        domains: ['robohash.org']
    },
    webpack: (cfg) => {
        cfg.module.rules.push({
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
        });
        return cfg;
    },
};

/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['robohash.org']
//     }
// }

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer(nextConfig)