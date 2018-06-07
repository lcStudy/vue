import './../../less/index.less'

import Vue from 'vue'

let vm = new Vue({
  el: '#app',
  data : {
    urls: [
      {
        title: '模板插值',
        url: '/demo/template.html'
      }, {
        title: '计算属性',
        url: '/demo/computed.html'
      }, {
        title: '侦听器',
        url: '/demo/watch.html'
      }, {
        title: '样式绑定',
        url: '/demo/class.html'
      }, {
        title: '模板渲染',
        url: '/demo/render.html'
      }, {
        title: '事件处理',
        url: '/demo/event.html'
      }, {
        title: '表单输入',
        url: '/demo/form.html'
      },
    ]
  },
  template: `<div>
    <h2>基础部分</h2>
    <ul>
      <li v-for="item in urls">
        <a :href="item.url" >{{ item.title }}</a>
      </li>
    </ul>
  </div>
  `
})

export default function () {
  return vm
}