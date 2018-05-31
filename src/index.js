
import Vue from 'vue'
import App from './app.vue'

let createApp = (Obj ,context = {}) =>{
  return new Vue({
    data: context,
    render: h => h(Obj)
  })
}

let app = createApp(App)

app.$mount('#app')

// 插值

import Template from './demo/template.vue'
let tempalte = createApp(Template)
tempalte.$mount('#template')