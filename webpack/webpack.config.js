const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    eslint: {
        configFile: path.resolve(__dirname, 'eslint.config.json')
    },
    entry: [
        './js/main',
        './js/Controllers/LoginController'
    ],
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
        ],
        loaders: [

            // JS:
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2017']
                }
            },

            // Fonts:
            // TODO : Figure out how to not build fonts to js dir...
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: 'file'
            },

            // SCSS:
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', // The backup style loader
                    'css?sourceMap!sass?sourceMap'
                )
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
        new LiveReloadPlugin(),
        new ExtractTextPlugin('../css/bundle.css')
    ],
    devtool: 'source-map',
    watch: true
};
