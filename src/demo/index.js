import './../less/index.less'

// 插值
import Template from './template.vue'
let tempalte = createApp(Template)
tempalte.$mount('#template')

// 计算属性
import Computed from './computed'
let computed = Computed()
computed.$mount('#computed')

setTimeout(() => {
  computed.fullname = 'C@L'
}, 1000)

// 侦听器
import Watch from './watch'
let watch = Watch()
watch.$mount('#watch')

// class，style绑定
import ClassStyle from './class_style'
let cs = new ClassStyle()
