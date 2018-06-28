/**
 * express服务
 */
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()

app.get('/foo', async (req, res) => {
  return res.send('bar')
})

var history = require('connect-history-api-fallback');
app.use(history({
  index: '/index.html'
}))

const config = require('./build/webpack.express')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet: true //向控制台显示任何内容
}))
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}))


// Serve start 
const port = 9001
app.listen(port, function () {
  console.log(`Vue server app listening on port ${port}!\n`);
})