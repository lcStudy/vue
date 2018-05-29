import Vue from 'vue'
import App from './app.vue'

export function createApp(context = {}) {

  const app = new Vue({
    data: context,
    render: h => h(App)
  })

  return { app }
}