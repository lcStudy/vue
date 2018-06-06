import Vue from 'vue'

let vm = new Vue({
  el:'#app',
  data: {
    count:0,
    msg: 'hello world',
    inputVal: '按下enter'
  },
  methods: {
    helloWord: function () {
      alert(this.msg)
    },
    hello: function (who) {
      alert(this.msg + who)
    },
    helloE: function (who, event) {
      if (event) event.preventDefault()
      alert(this.msg + who)
    },
    clickMe: function(){
      alert(this.msg)
    }
  },
  template: `<div>
    <h2>事件处理</h2>
    <div>
      <button v-on:click="count += 1">count+1</button>
      <p>count:{{ count }}</p>
    </div>
    <h2>事件处理方法</h2>
    <div>
      <button v-on:click="helloWord">hello world</button>
    </div>
    <h3>传递参数</h3>
    <div>
      <button v-on:click="hello('小明')">hello 小明</button>
      <button v-on:click="hello('小方')">hello 小方</button>
    </div>
    <h3>参数中传递原始DOM事件</h3>
    <div>
      <button v-on:click="helloE('小明' , event)">hello <button>event</button></button>
    </div>
    <h3>事件修饰符</h3>
    <div>
      <button v-on:click.once="helloWord">hello world once</button>
    </div>
    <h3>按键修饰符</h3>
    <div>
      <input v-on:keyup.enter="clickMe" v-model="inputVal">
    </div>
  </div>`

})

export default function () {
  return vm
}