import Vue from 'vue'

// 定义一个组件
Vue.component('my-button' , {
  data: function(){
    return {
      count: 0
    }
  },
  methods:{
    myBtnClick: function () {  
      alert('hello ' + this.count)
      this.count++
    }
  },
  template: `<button @click="myBtnClick">点我</button>`
})

// 挂载到#app
let vm = new Vue({
  el: '#app',
  template: `<div>
    <my-button></my-button>
    <my-button></my-button>
  </div>`
})