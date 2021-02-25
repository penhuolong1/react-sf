const path = require('path')
const {
  override,
  addPostcssPlugins,
  addWebpackAlias,
  adjustStyleLoaders,
  fixBabelImports,
  overrideDevServer
} = require('customize-cra');

const ENV = {
  DEV: 'https://sftest.olcourt.cn',
  PROD: 'https://sftest.olcourt.cn'
};
const devServerConfig = () => config => {
  return {
    ...config,
    proxy: {
      '/api': {
        target: ENV.DEV,
        changeOrigin: true,
        secure: false
      }
    }
  };
};

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

/* config-overrides.js */
module.exports = {
  webpack: override(
    // ...其他配置...
    adjustStyleLoaders(rule => {
      if (rule.test.toString().includes('scss')) {
        rule.use.push({
          loader: require.resolve('sass-resources-loader'),
          options: {
            resources: './src/styles/variables.scss'
          }
        });
      }
    }),
    addWebpackAlias({
      "@": path.resolve(__dirname, "src")
    })
  ),
  devServer: overrideDevServer(devServerConfig())
};
