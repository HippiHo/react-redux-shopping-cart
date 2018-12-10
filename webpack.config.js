const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

var config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React shopping cart',
      minify: {
        collapseWhitespace: true
      },
      template: '!!pug-loader!src/index.pug',
    }),
  ]
}
module.exports = config;
