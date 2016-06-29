var webpack = require('webpack');
var WebpackNotifier = require('webpack-notifier');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ["es2015", "react", "react-hmre"]
            }
        }]
    },
    plugins: [
        new WebpackNotifier(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
