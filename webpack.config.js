const path = require("path");
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
    })
  ],
};