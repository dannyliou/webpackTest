var path = require('path')
var webpack = require('webpack')
const fs = require('fs');

var componentEntries = {};
var componentSrcRoot = './src/components/';
// fs.readdir(componentSrcRoot, (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     data.forEach(function(item) {
//         componentEntries[item] = componentSrcRoot + item + '/index.js';
//     });
//     console.log(componentEntries);
// });
fs.readdirSync(componentSrcRoot).forEach(function (item) {
    componentEntries[item] = componentSrcRoot + item + '/index.js';
});
var entryObj = Object.assign({}, {
    bundle: ['webpack-hot-middleware/client', './src/entry.js']
}, componentEntries);
console.log('--------------entryObj');
console.dir(entryObj);
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: entryObj,
    output: {
        path: path.join(__dirname, 'dist/components/'),
        filename: '[name]/index.js',
        publicPath: '/static/'
    },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
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
