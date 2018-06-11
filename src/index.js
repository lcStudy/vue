import './less/index.less'

import { componentRegister , createApp } from './app.js'

componentRegister()

import App from './app.vue'

createApp('#app' , {} , App)
