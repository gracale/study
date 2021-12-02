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
        test: /\.css$/i,
        //use: ["style-loader", "css-loader"] 
        //写入html

        use: [MiniCssExtractPlugin.loader,"css-loader"],
        //抽出css 只能二选一
      },
    ],
  },
  devServer: {
    static: './dist',
  },
};
