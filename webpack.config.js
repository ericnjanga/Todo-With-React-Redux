const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * NOTE:
 * -----
 * server is started with https://github.com/webpack/webpack-dev-server
 */

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        // For every JavaScript file
        test: /\.js$/,
        exclude: /(node_modules)/,  // except the one in "node_modules"
        use: {
          loader: 'babel-loader', // use the following loaders
          options: { // Activate the following options
            presets: [
              '@babel/preset-env', // babel environment
              // 'stage-0', // stage 0 babel functionalities
              '@babel/preset-react' // react conversion (JSX, ...)
            ]
          }
        }
      }
    ]
  }, // module
  plugins: [
    new HtmlWebpackPlugin({
      title: '---My App',
      filename: 'index.html',
      template: './src/index.html'
    })]
}