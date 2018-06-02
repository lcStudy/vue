
import Vue from 'vue'
import App from './app.vue'

let createApp = (Obj ,context = {}) =>{
  let app =  new Vue({
    data: context,
    render: h => h(Obj)
  })

  return app
}

let app = createApp(App)

app.$mount('#app')

// 插值

import Template from './demo/template.vue'
let tempalte = createApp(Template)
tempalte.$mount('#template')

// 计算属性
import Computed from './demo/computed'
let computed = Computed()
computed.$mount('#computed')

setTimeout(() => {
  computed.fullname = 'C@L'
}, 1000)

// 侦听器
import Watch from './demo/watch'
let watch = Watch()
watch.$mount('#watch')

