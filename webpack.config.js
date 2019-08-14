var path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'index.js',
      libraryTarget: 'commonjs'
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        },
        {
            test: /\.(jpeg|png|gif|mp3)$/i,
            loaders: ['file-loader']
        }
      ]
    },
    externals: {
      'react': 'commonjs react'
    }
  }