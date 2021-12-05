const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    slider: './src/gobySlider.ts',
    index: './src/pages/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist/index.html'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HTMLWebpackPlugin({
      template: './src/pages/index.html',
      filename: 'index.html',
    }),
    new webpack.ProvidePlugin({
      autoBind: 'auto-bind',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': "jquery'",
      'window.$': 'jquery',
      'window.autobind': 'autobind-decorator',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};
