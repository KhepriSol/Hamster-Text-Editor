"use strict";

var HtmlWebpackPlugin = require('html-webpack-plugin');

var WebpackPwaManifest = require('webpack-pwa-manifest');

var path = require('path');

var _require = require('workbox-webpack-plugin'),
    InjectManifest = _require.InjectManifest;

module.exports = function () {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      database: './src/js/database.js',
      editor: './src/js/editor.js',
      header: './src/js/header.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
      template: './index.html',
      title: 'hamster webpack plugin'
    }), new InjectManifest({
      swSrc: './src-sw.js',
      swDest: 'src-sw.js'
    }), new WebpackPwaManifest({
      fingerprints: false,
      inject: true,
      name: 'HAMSTER IS FOREVER',
      short_name: 'HAMS',
      description: 'Hamster Text Editor',
      background_color: '#225ca3',
      theme_color: '#225ca3',
      start_url: '/',
      publicPath: '/',
      icons: [{
        src: path.resolve('src/images/logo.png'),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join('assets', 'icons')
      }]
    })],
    module: {
      rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime']
          }
        }
      }]
    }
  };
};
//# sourceMappingURL=webpack.config.dev.js.map
