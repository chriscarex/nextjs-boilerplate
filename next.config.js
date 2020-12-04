const bundleAnalyzer = require('@next/bundle-analyzer');
const DotEnv = require('dotenv');

DotEnv.config();

const {
  ANALYZE,
  ENVIRONMENT
} = process.env;

const withBundleAnalyzer = bundleAnalyzer({
  enabled: ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  target: 'serverless',
  assetPrefix: ENVIRONMENT,
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__test__\//));
    return config;
  },
});
