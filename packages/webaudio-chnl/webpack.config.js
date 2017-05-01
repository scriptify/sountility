
const path = require('path'),
webpack = require('webpack'), // Da bundling modules!
NpmInstallPlugin = require('npm-install-webpack-plugin'), // Install client dependencies automatically!
merge = require('webpack-merge'), // Merge together configurations!
HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin'),
HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

const moduleName = 'chnl';

const TARGET = process.env.npm_lifecycle_event;

const COMMON_CONFIGURATION = {
  entry: {
    [moduleName]: path.join(PATHS.src, 'index.js'),
    [moduleName + '.min']: path.join(PATHS.src, 'index.js')
  },
  resolve: {
    extensions: ['.js'], // Resolve these extensions
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: moduleName,
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: PATHS.src,
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|wav|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[hash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ],
        include: PATHS.src
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify(TARGET === 'start:dev' ? 'development' : 'production')
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
    }),
    new HtmlWebpackPlugin({
      excludeAssets: [/\.min\.js$/],
      title: moduleName
    }),
    new HtmlWebpackExcludeAssetsPlugin()
  ]
};

switch(TARGET) {
  case 'start:dev': {
    module.exports = merge(COMMON_CONFIGURATION, {
      devServer: {
        contentBase: PATHS.build,
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'errors-only'
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
      devtool: 'eval-source-map'
    });
  }
  break;
  case 'start:prod': {
    module.exports = merge(COMMON_CONFIGURATION, {
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          include: /\.min\.js$/
        })
      ]
    });
  }
}
