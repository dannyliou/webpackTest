var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        bundle: ['webpack-hot-middleware/client', './src/entry.js']
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.json$/,
            loaders: ['json'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.css?$/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpg|gif|eot|woff|ttf|svg)$/,
            loader: 'url-loader?limit=1'
        }, {
            test: /\.html$/,
            loader: "html"
        }]
    },
    externals: {
        'zepto': 'Zepto',
    }
}
