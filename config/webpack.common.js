var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = function (envOptions) {
  envOptions = envOptions || {};

  const config = {
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
      modules: ['node_modules'],
      extensions: ['.ts', '.js','.html','.scss','.css']

    },

    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file-loader?name=assets/[path][name].[ext]&context=node_modules'
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
  if (envOptions.MODE === 'prod') {
    config.module.rules.push(
      {test: /\.ts$/, loaders: ['@ngtools/webpack']}
    );
    config.plugins.push( new AotPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: helpers.root('src/app/app.module#AppModule')
    }));
  } else {
    config.module.rules.push(
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] }
    );
  }

  return config;

};
