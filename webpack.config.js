const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    entry: {
        index: path.resolve(__dirname, 'src', 'index.js'),
        cardList: path.resolve(__dirname, 'src', 'assets', 'js', 'cardList.js'),
        detail: path.resolve(__dirname, 'src', 'assets', 'js', 'detail.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'js/[name].[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]',
        assetModuleFilename: 'images/[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            chunks: ['index', 'cardList'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'pages', 'details', 'product-details.html'),
            filename: 'pages/details/product-details.html',
            chunks: ['index', 'detail'],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                    }
                ],
            },
            {
                test: /\.woff2?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
        ],
    },
};
