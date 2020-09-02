const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer');

const development = process.env.NODE_ENV !== 'production';
const linkPrefix = '/Kindle.FrontEnd';

const config = {
  assetPrefix: '',
  env: {
    linkPrefix: '',
  },
  optionalCatchAll: true,
};

module.exports = withPlugins(
  [
    [
      withBundleAnalyzer,
      {
        enabled: process.env.ANALYZE === 'true',
      },
    ],
  ],
  config,
);
