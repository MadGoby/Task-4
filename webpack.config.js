const path = require("path");
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/jquery.ui.customSlider.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'./dist/plugin')
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, './dist')
    },
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.ts$/,
        exclude: [ path.resolve(__dirname, "test") ],
        enforce: 'post',
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        }
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/jquery.ui.customSliderStyles.css'),
          to: path.resolve(__dirname, './dist/plugin')
        }
      ],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      autobind: 'autobind-decorator',
    })
  ],
};