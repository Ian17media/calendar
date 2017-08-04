const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      // filename: 'index.html',
      template: './src/index.ejs',  // Generates default index.html
      googleAnalytics: {
        trackingId: 'UA-XXXX-XX',
        pageViewOnLoad: true
      },
      title: 'Output Management',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    // chunkFilename: '[name].[chunkhash].js',
    // publicPath: publicPath,
    sourceMapFilename: '[name].map'
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};