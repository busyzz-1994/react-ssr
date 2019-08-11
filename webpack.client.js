const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const clientConfig = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              // localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
};
module.exports = webpackMerge(baseConfig, clientConfig);
