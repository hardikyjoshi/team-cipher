//Include plugins here
var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var WebpackMessages = require('webpack-messages');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
    entry: {
        vendor: ["babel-polyfill"],
        vendor_angular: ["angular", "angular-ui-router", "angular-sanitize"],
        bundle: ['./src/index.js'],
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "public")
    },
    module: {
        rules: [ // Loader Objects go here
            // {
            //     enforce: "pre",
            //     test: /\.js$/,
            //     exclude: /(node_modules|bower_components|\.spec.js$|\npm\.js$)/,
            //     loader: "eslint-loader"
            // },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|\.spec.js$|\npm\.js$)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['es2015', 'stage-2']
                    }
                }
            }, {
                test: /\.css$/,
                // use: [
                //     "style-loader",
                //     "css-loader"
                // ]
                 use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] })
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!resolve-url-loader!sass-loader'
                })
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader?name=[path][name].[ext]'
                // use: [
                //     'file-loader?hash=sha512&digest=hex&name=[path][name].[ext]',
                //     {
                //         loader: 'image-webpack-loader',
                //         query: {
                //             progressive: true,
                //             optimizationLevel: 7,
                //             interlaced: false,
                //             pngquant: {
                //                 quality: '65-90',
                //                 speed: 4
                //             }
                //         }
                //     }
                // ]
            }, {
                test: /\.mp4$/,
                use: 'file-loader?name=[path][name].mp4'
            }, {
                test: /\.wav/,
                use: 'file-loader?name=[path][name].wav'
            }, {
                test: /\.(woff|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader?name=[path][name].[ext]'
            }, {
                test: /\.(woff2|otf)(\?.*$|$)/,
                use: 'file-loader'
            },{
                test: /\.html$/,
                use: 'file-loader?name=[path]/[name].[ext]',
                exclude: /index\.html$/
            }
            // }, {
            //     test: /\.pug$/,
            //     use: [
            //         'file-loader?name=[path]/[name].html',
            //         'pug-html-loader?'+{"pretty":true}
            //     ]
            // }
        ]
    },
    plugins: [ // Webpack Plugins go here
        new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|html|css)$/,
			threshold: 10240,
			minRatio: 0.8
		}),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'Website Starter',
            template: 'src/index.html',
            minify: {
                collapseWhitespace: false,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),
        new ExtractTextPlugin("main.css"),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardDuplicates: { removeAll: true }, discardComments: {removeAll: true } },
            canPrint: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: 2
        }),
        new CleanWebpackPlugin(['public'], {
            root: path.resolve(__dirname),
            verbose: true,
            dry: true
        }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery",
        //     "window.Tether": 'tether'
        // }),
        new CopyWebpackPlugin([{
            from: 'src/**/*.js',
            to: __dirname + '/public'
        }, {
            from: 'src/**/*.png',
            to: __dirname + '/public'
        },     {
            from: 'src/**/*.svg',
            to: __dirname + '/public'
        }, {
            from: 'src/**/*.json',
            to: __dirname + '/public'
        }, {
            from: 'src/**/*.jpg',
            to: __dirname + '/public'
        }, {
            from: 'src/**/*.mp4',
            to: __dirname + '/public'
        }, {
            from: 'src/**/*.gif',
            to: __dirname + '/public'
        }, {
            from: 'src/**/*.wav',
            to: __dirname + '/public'
        }, {
            from: 'src/**/*.pdf',
            to: __dirname + '/public'
        },{
            from: 'src/**/*.html',
            to: __dirname + '/public'
        },{
            from: 'src/**/*.otf',
            to: __dirname + '/public'
        }]),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new WebpackMessages({
            name: 'client',
            logger: str => console.log(`>> ${str}`)
        }),
        new webpack.HotModuleReplacementPlugin()
        //new SWPrecacheWebpackPlugin()
    ],
    devtool: 'source-map'
}