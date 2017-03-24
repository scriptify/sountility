const webpack = require(`webpack`);
const { packagesToAliases, getPackages, commandObject, PATHS } = require(`./util.js`);

const packages = getPackages(PATHS.packages);

module.exports = {
  resolve: {
    extensions: [`.js`, `.jsx`], // Resolve these extensions
    alias: packagesToAliases(packages, PATHS.packages)
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: `babel-loader`,
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: `eslint-loader`
          }
        ],
        include: PATHS.packages,
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: `file-loader`,
            options: {
              hash: `sha512`,
              digest: `hex`,
              name: `[hash].[ext]`
            }
          },
          {
            loader: `image-webpack-loader`,
            options: {
              bypassOnDebug: true
            }
          }
        ],
        include: PATHS.packages,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify(commandObject.cmd === `dev` ? `development` : `production`)
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      options: {
        imageWebpackLoader: {
          gifsicle: {
            interlaced: false
          },
          optipng: {
            optimizationLevel: 7
          }
        }
      }
    })
  ]
};
