// next.config.common.js

const withFonts = require('next-fonts');

const nextConfig = {
  output: 'export',
  // Otras configuraciones específicas de Next.js

  webpack(config, options) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|otf)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'fonts/[name].[ext]',
        },
      },
    });

    return config;
  },
};

module.exports = withFonts(nextConfig);
