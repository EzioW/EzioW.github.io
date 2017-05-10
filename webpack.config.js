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
    path: path.join(__dirname, '/dist/'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/',
    sourceMapFilename: '[name].map',
  },
  devtool: 'eval-source-map',
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
          {
            loader: 'less-loader',
          },
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
    // new webpack.NamedModulesPlugin(),
    //
    new webpack.optimize.UglifyJsPlugin({
      // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句
        // 还可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      },
    }),
    // 压缩JS

    new HtmlWebpackPlugin({
      title: 'Personal Website',
      template: './src/index.html',
      // hash: true,
      inject: 'body',
    }),
    // HTML模板
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
