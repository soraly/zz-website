const {
  override,
  disableEsLint,
  addWebpackPlugin,
  setWebpackPublicPath,
  overrideDevServer,
  watchAll
} = require("customize-cra");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const analyze = process.env.REACT_APP_ENV === "test" || process.env.REACT_APP_ENV === "production"


module.exports = {
  webpack: override(
    // usual webpack plugin
    process.env.REACT_APP_ENV === "production" ? setWebpackPublicPath("./") : setWebpackPublicPath("/office"),
    disableEsLint(),
    analyze ? addWebpackPlugin(
      new BundleAnalyzerPlugin({
        analyzerMode: "static"
      })
    ) : undefined
  ),
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      config.proxy = {
        '/': {
          target: process.env.REACT_APP_API,
          // target: process.env.REACT_APP_BASE,
          changeOrigin: true,
          secure: false
        },
      }

      return config;
    };
  }
};