var path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|stories|build)/,
                use: 'babel-loader'
            },{
                test: /\.(jpe?g|png|gif|mp3)$/i,
                // include: SRC,
                loaders: ['file-loader']
            }
        ]
    },
    resolve: {
      extensions: [ '.jsx', '.js' ]
    },
    externals: {
      'react': 'commonjs react'
    },
    optimization: {
      minimizer: [new TerserPlugin()]
    }
}