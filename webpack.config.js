const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/jquery.ui.customSlider.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'./dist/plugin')
  },
  module: {
    rules: 
    [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ],
          }
        } 
      },
      { 
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ],
          }
        } 
      },
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
  ]
}