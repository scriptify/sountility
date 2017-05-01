const path = require(`path`);
const { PATHS } = require(`./util.js`);
const webpack = require(`webpack`);

module.exports = function createProductionConfiguration(packageName) {
  return {
    entry: {
      [packageName]: path.resolve(PATHS.packages, `${packageName}/src/index.js`),
      [`${packageName}.min`]: path.resolve(PATHS.packages, `${packageName}/src/index.js`)
    },
    output: {
      path: path.resolve(PATHS.packages, `${packageName}/dist`),
      filename: `[name].js`,
      libraryTarget: `umd`,
      library: packageName,
      umdNamedDefine: true
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(`production`)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/
      })
    ]
  };
};
