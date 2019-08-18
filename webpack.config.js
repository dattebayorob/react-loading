var path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    components: './src/components/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "./dist"),
    libraryTarget: 'commonjs'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/react'] }
        }]
      },
      {
        test:  /\.css$/,
        use: [{
          loader: 'css-loader',
          options: { modules: true }
        }]
      },
      {
        test: /\.(jpeg|png|gif|mp3)$/i,
        use: [{
          loader: "url-loader",
          options: { limit: 300 }
        }]
      }
    ]
  }
}