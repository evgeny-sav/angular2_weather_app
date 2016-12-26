var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');


module.exports = {
  devtool: 'source-map',
  entry: {
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[path][name].[ext]&context=node_modules'
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      }

    ]
  },


  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin(
      [{
        from: 'src/mock-data.json'
      },
      {
       from: 'src/favicon.ico'
      }]
    )
  ]
};
