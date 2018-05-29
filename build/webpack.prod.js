/**
 * 生产环境
 */
process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// 删除前一次编译的文件
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '../')
    })
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js'
    }
  }
})