const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js'),
    ],
  },
  output: {
    path: path.join(__dirname, '/Seraph/'),
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
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      sourceMap: true,
      minimize: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
      title: 'Personal Website',
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true, // 不跳转
    hot: true, // 配置HMR之后可以选择开启
    inline: true, // 实时刷新
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, './src/component/'),
    },
  },

};
module.exports = config;
