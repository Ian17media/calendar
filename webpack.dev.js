const path = require('path');
const Merge = require('webpack-merge');
const webpack = require('webpack');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig,  {
  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8888,
    host: 'localhost',
    hot: true,
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    // publicPath: "/assets/"
    proxy: {
      "/api": "http://localhost:3000"
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})