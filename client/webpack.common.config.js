var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    helpers = require('./helpers');

module.exports = {

    entry: {
        polyfills: helpers.src('polyfills.ts'),
        vendor: helpers.src('vendor.ts'),
        main: helpers.src('main.ts')
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            }
        ]
    },

    plugins : [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: helpers.src('index.html')
        })
    ]
};