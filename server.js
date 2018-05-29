const express = require('express')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
// const webpackConfig = require('./build/webpack.base')
// const config = webpackMerge(webpackConfig , {
//   devtool: 'inline-source-map',
//   plugins: [
//     new webpack.optimize.OccurrenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin()
//   ]
// })

const config = require('./build/webpack.express')
const compiler = webpack(config)

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet: true //向控制台显示任何内容
}))
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}))

// app.get('*' , async(req , res) => {

// })

// Serve the files on port 3000.
app.listen(9001, function () {
  console.log('Vue server app listening on port 9001!\n');
});