/**
 * webpack开发环境配置
 */
process.env.NODE_ENV = 'dev'

const path= require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./webpack.base')

module.exports = merge(config, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname , './../dist'),
    compress: true,
    port: 9000,
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})