const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
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
            filename: 'style/[name].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.json$/,
                type: 'asset/resource',
                generator: {
                    filename: 'data/[name][ext]',
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
};
