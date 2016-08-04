var commonConfig = require('./webpack.common.config.js'),
    webpackMerge = require('webpack-merge'),
    webpack = require('webpack'),
    helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],


    devServer: {
        inline: true,
        hot: true,
        noInfo: false,
        stats: 'minimal',
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000/api',
                ignorePath: true,
                changeOrigin: true,
                secure: false
            }
        }
    },


// support source maps
    devtool: "#inline-source-map"
});

