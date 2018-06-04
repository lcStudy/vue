import './less/index.less'

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

