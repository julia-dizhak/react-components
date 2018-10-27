const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './js/ClientApp.js',
    devtool: 'cheap-eval-source-map',
    // devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/public/',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ options: {} })
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            }
        ]
    }
}