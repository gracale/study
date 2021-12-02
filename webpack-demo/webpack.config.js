var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: '随便写写',
    template: 'src/assets/index.html'
  }),
  new MiniCssExtractPlugin({
    filename:'[name].css',
    chunkFilename:'[id].css',
    ignoreOrder:false,
  })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
        {
          loader:"sass-loader",
          options:
          {
            implementation:require("dart-sass")
          }
        },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    static: './dist',
  },
};
