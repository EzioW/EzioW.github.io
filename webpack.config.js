const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js'),
    ],
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
            },
          },
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[path][name].[hash].[ext]',
          //   },
          // },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      sourceMap: true,
      minimize: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        collapse_vars: true,
        reduce_vars: true,
      },
      sourceMap: true,
    }),

    new HtmlWebpackPlugin({
      title: 'Personal Website',
      template: './index.html',
      inject: 'body',
    }),

    new webpack.optimize.CommonsChunkPlugin({ // 抽离js中公共的部分并合并到一个文件里
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        );
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({ // 每次打包但是公共js部分没变的情况下不触发更新这个公共js文件
      name: 'manifest',
      chunks: ['vendor'],
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true, // 不跳转
    hot: true, // 配置HMR之后可以选择开启
    inline: true, // 实时刷新
  },

};
module.exports = config;
