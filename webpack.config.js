const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?/http://localhost:8080',
        'webpack/hot/only-dev-server',
        './js/ClientApp.js',
    ],
    devtool: 'cheap-eval-source-map',
    // devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
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
        new webpack.HotModuleReplacementPlugin(), 
        new webpack.NamedModulesPlugin(),
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