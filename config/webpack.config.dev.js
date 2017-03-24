const path = require(`path`);
const webpack = require(`webpack`);
const { PATHS } = require(`./util.js`);

module.exports = {
  entry: path.resolve(__dirname, `..`, `playground.js`),
  output: {
    path: PATHS.playgroundBuild,
    filename: `bundle.js`
  },
  devServer: {
    contentBase: PATHS.playgroundBuild,
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: `errors-only`,
    host: `0.0.0.0`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: `eval-source-map`
};
