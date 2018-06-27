import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import routes from './routes'

export function componentRegister() {
  // 组件的全局注册
  const requireComponent = require.context(
    // 其组件目录的相对路径
    './components',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /[A-Z]\w+\.(vue|js)$/
  )
  console.log(requireComponent)
  requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)

    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
      camelCase(
        // 剥去文件名开头的 `'./` 和结尾的扩展名
        fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
      )
    )

    console.log(componentName)
    // 全局注册组件
    Vue.component(
      componentName,
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default || componentConfig
    )
  })
}

// 创建Vue实例
// export function createApp(el = '#app', context = {} , App = null) {

  // const app = new Vue({
  //   data: context,
  //   render : h => h(App)
  // })

  // app.$mount(el)

  // return app

export function createApp() {

  let app = new Vue({
    el:'#app',
    data: {
      currentRoute: window.location.pathname
    },
    computed: {
      ViewComponent() {
        const matchingView = routes[this.currentRoute]
        console.log(matchingView)
        let ret = matchingView ?
          require('./pages/' + matchingView + '.vue').default :
          require('./pages/404.vue').default
        console.log(ret)
        return ret
      }
    },
    render: function(h){
      return h(this.ViewComponent)
    }
    // render(h) {
    //   return h(this.ViewComponent)
    // }
  })

  window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
  })

  return app
}