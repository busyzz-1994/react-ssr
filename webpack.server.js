const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const serverConfig = {
  target: 'node',
  entry: './src/server/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              // localdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
};
module.exports = webpackMerge(baseConfig, serverConfig);
