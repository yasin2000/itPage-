var HtmlWebpackPlugin = require('html-webpack-plugin');
var package = require('./package.json');
var webpack = require('webpack');
var path = require('path');
const entry = {
    app: './src/index.js'
};
if (package.dependencies)
    entry.vendor = Object.keys(package.dependencies);

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, './dist/'),
        filename: '[name].bundle.js'
    },
    watch: true,
    resolve: {extensions: ['.js', '.ts']},
    devServer: {
        contentBase: path.join(__dirname, './src/'),
        port: 9200
    },
    optimization: {
        splitChunks: {
            name: 'shared',
            minChunks: 2
        }
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: {chrome: 70}}]
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-react-jsx'
                        ]
                    }
                }
            }
        ],
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            chunks: ['vendor', 'shared', 'app'],
            path: path.join(__dirname, './dist/'),
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Settings',
            template: './src/index.html',
            chunks: ['vendor', 'shared', 'settings'],
            path: path.join(__dirname, './dist/'),
            filename: 'settings.html'
        })
    ]
};
