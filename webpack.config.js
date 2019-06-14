const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', 

  entry: {
    index: './index.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "lib"),
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=env&presets[]=es2015&presets[]=react&presets[]=stage-1' 
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['lib'])
  ]
}