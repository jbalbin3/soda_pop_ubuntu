/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    }
};