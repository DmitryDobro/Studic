const path = require('path')
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin'); 




module.exports = {

    entry: {
                app: './src/index.js'
              },
        
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        assetModuleFilename: "assets/[hash][ext][query]",

              },
       plugins: [
        new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: './src/index.html', 
          filename: 'index.html', 
      }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            }), 
        ],
    module:{
        rules:[
          {
            test: /\.html$/i,
            loader: "html-loader",
            },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
        
        {
          test: /\.(?:gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
      },
            {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: { sourceMap: true }
                }, 
                {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, postcssOptions:{config: resolve( 'src/postcss.config.js')}  }
                  },
                {
                  loader: 'sass-loader',
                  options: { sourceMap: true }
                }
              ]
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: { sourceMap: true }
                }, {
                  loader: 'postcss-loader',
                  options: { sourceMap: true,postcssOptions:{config: resolve( 'src/postcss.config.js')}}
                }
              ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
      },

        ],

    },
      devServer: {
        client: {overlay: true},
        static:  'src'
      },
}