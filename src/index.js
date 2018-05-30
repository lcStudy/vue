
// import {createApp} from './app'

// const { app } = createApp({})

// app.$mount('#app')

import Vue from 'vue'
import App from './app.vue'

let createApp = (context = {}) =>{
  return new Vue({
    el : '#app',
    data: context,
    render: h => h(App)
  })
}

createApp()