// Libraries
require('../postcss.config')

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BeautifyHtmlWebpackPlugin = require("beautify-html-webpack-plugin")
const WebpackNotifierPlugin = require('webpack-notifier')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const ASSET_PATH = process.env.ASSET_PATH

// Files
const utils = require('./utils')

// Configuration
module.exports = (env) => {

  // Get default mode from env
  const MODE = env.mode || 'production';

  return {
    mode: MODE,
    target: "web",
    devtool: "eval-source-map",
    context: path.join(__dirname, "../src"),
    entry: {
      app: path.join(__dirname, "../src/app.js"),
    },
    output: {
      publicPath: ASSET_PATH,
      path: path.join(__dirname, "../dist"),
      filename: "assets/js/[name].[contenthash:7].bundle.js",
      clean: true,
    },
    devServer: {
      contentBase: path.join(__dirname, "../src"),
      compress: true,
      open: true,
    },
    resolve: {
      extensions: [".js"],
      alias: {
        source: path.join(__dirname, "../src"), // Relative path of src
        images: path.join(__dirname, "../src/assets/imgs"), // Relative path of images
        fonts: path.join(__dirname, "../src/assets/fonts"), // Relative path of fonts
      },
    },
    module: {
      rules: [
        //Babel loader
        {
          test: /\.m?js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader",
              options: { presets: ["@babel/preset-env"] },
            },
          ],
        },
        //css loader
        {
          test: /\.css$/,
          use: [
            utils.isDevMode(MODE)
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                sourceMap: true,
              },
            },
          ],
        },
        //Sass loader
        {
          test: /\.scss$/,
          use: [
            utils.isDevMode(MODE)
              ? "style-loader"
              : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
            {
              loader: "css-loader",
              options: { importLoaders: 1, sourceMap: true },
            }, // translates CSS into CommonJS
            "postcss-loader",
            "sass-loader", // compiles Sass to CSS
          ],
        },
        //Pug loader
        {
          test: /\.pug$/,
          use: [
            {
              loader: "pug-loader",
            },
          ],
        },
        //image loader
        {
          test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                publicPath: "../../",
              },
            },
          ],
        },
        // fonts loader
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: "url-loader",
            },
          ],
        },
      ],
    },
    experiments: {
      topLevelAwait: true,
    },
    optimization: {
      minimize: false,
      minimizer: [
        new TerserPlugin({
          parallel: false,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
      splitChunks: {
        chunks: "all",
      },
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: "../manifest.json", to: "manifest.json" },
          { from: "../browserconfig.xml", to: "browserconfig.xml" },
          //css vendors
          // {
          //   from: "assets/css/vendors",
          //   to: "assets/css/vendors",
          // },
          //JS Vendors
          {
            from: "assets/js",
            to: "assets/js",
          },
          //images
          {
            from: "assets/imgs",
            to: "assets/imgs",
          },
          //fonts
          {
            from: "assets/fonts",
            to: "assets/fonts",
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: "assets/css/[name].[chunkhash:7].bundle.css",
        // filename: "assets/css/[name].bundle.css",
        chunkFilename: "[id].css",
      }),
      new HtmlWebpackPlugin({
        minify: !utils.isDevMode(MODE),
        filename: "index.html",
        template: "views/index.pug",
        inject: "body",
      }),
      // Other pages
      ...utils.pages(MODE), // mode
      ...utils.pages(MODE, "blog"), // mode, folder name under pages

      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.$": "jquery",
        "window.jQuery": "jquery",
      }),
      new WebpackNotifierPlugin({
        title: "Your project",
      }),
      new BeautifyHtmlWebpackPlugin({
        indent_size: 2,
        indent_char: " ",
        indent_with_tabs: false,
        editorconfig: false,
        eol: "\n",
        end_with_newline: false,
        indent_level: 0,
        preserve_newlines: true,
        max_preserve_newlines: 2,
        space_in_paren: false,
        space_in_empty_paren: false,
        jslint_happy: false,
        space_after_anon_function: false,
        space_after_named_function: false,
        brace_style: "collapse",
        unindent_chained_methods: false,
        break_chained_methods: false,
        keep_array_indentation: false,
        unescape_strings: false,
        wrap_line_length: 0,
        e4x: false,
        comma_first: false,
        operator_position: "before-newline",
        indent_empty_lines: false,
        templating: ["auto"],
      }),
    ],
  };
}
