// entry
const path = require('path')

const entryApp = path.join(__dirname, './../src/index.js')
const entryBase = path.join(__dirname, './../src/demo/base/index.js')

const entryDemoTemplate = path.join(__dirname, './../src/demo/base/template.js') // 模板插值
const entryDemoComputed = path.join(__dirname, './../src/demo/base/computed.js') // 计算属性
const entryDemoWatch = path.join(__dirname, './../src/demo/base/watch.js') // 侦听器
const entryDemoClass = path.join(__dirname, './../src/demo/base/class_style.js') // 样式绑定
const entryDemoRender = path.join(__dirname, './../src/demo/base/render.js') // 模板渲染
const entryDemoEvent = path.join(__dirname, './../src/demo/base/event.js') // 事件处理
const entryDemoForm = path.join(__dirname , './../src/demo/base/form.js') // 表单输入

let entry = {
  app: entryApp,
  demoBase: entryBase,
  demoTemplate: entryDemoTemplate,
  demoComputed: entryDemoComputed,
  demoWatch: entryDemoWatch,
  demoClass: entryDemoClass,
  demoRender: entryDemoRender,
  demoEvent: entryDemoEvent,
  demoForm: entryDemoForm
}

const HtmlWebpackPlugin = require('html-webpack-plugin')
let htmlPlugins = [
  new HtmlWebpackPlugin({
    title:'',
    filename: 'index.html',
    template: "src/index.html",
    chunks: ['commons', 'app']
  }),
  new HtmlWebpackPlugin({
    title: 'index',
    filename: 'demo/index.html',
    template: "src/template/demo.html",
    chunks: ['commons', 'demoBase']
  }),

  new HtmlWebpackPlugin({
    title: '模板插值',
    filename: 'demo/template.html',
    template: "src/template/demo.html",
    chunks: ['commons', 'demoTemplate']
  }),

  new HtmlWebpackPlugin({
    title: '计算属性',
    filename: 'demo/computed.html',
    template: "src/template/demo.html",
    chunks: ['commons', 'demoComputed']
  }),

  new HtmlWebpackPlugin({
    title: '侦听器',
    filename: 'demo/watch.html',
    template: "src/template/demo.html",
    chunks: ['commons', 'demoWatch']
  }),

  new HtmlWebpackPlugin({
    title: '样式绑定',
    filename: 'demo/class.html',
    template: "src/template/demo.html",
    chunks: ['commons', 'demoClass']
  }),

  new HtmlWebpackPlugin({
    title: '模板渲染',
    filename: 'demo/render.html',
    template: "src/template/demo.html",
    chunks: ['commons', 'demoRender']
  }),

  new HtmlWebpackPlugin({
    title: '事件处理',
    filename: 'demo/event.html',
    template: "src/template/demo.html",
    chunks: ['commons', 'demoEvent']
  }),

  new HtmlWebpackPlugin({
    title: '表单输入',
    filename: 'demo/form.html',
    template: "src/template/demo.html",
    chunks: ['commons', 'demoForm']
  }),
]

module.exports = [entry, htmlPlugins]