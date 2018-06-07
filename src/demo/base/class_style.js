// import './../../less/index.less'
import Vue from 'vue'

let vm = new Vue({
  el:'#app',
  data :{
    isActive : true,
    isDisabled : true,
    textDanger : true,
    activeClass: 'active',
    textDangerClass: 'text-danger',
    styleObjOne: {
      color:'red',
      fontSize:'12px'
    },
    styleObjTwo: {
      'font-weight':'bolder',
      color:'blue'
    }
  },
  template : `<div class="demo-class-style-bind">
    <h2>class，style绑定</h2>
    <h3>class对象语法</h3>
    <p><a href="javascript:;" class="demo-class-style" :class="{active : isActive}" @click="toggleClass">点击切换class.text-danger</a></p>
    <p><a href="javascript:;"  :class="getClassObj">使用返回对象的计算属性绑定</a></p>
    <h3>class数组书法</h3>
    <p><a href="javascript:;" class="demo-class-style" :class="[activeClass , textDangerClass]" >数组绑定</a></p>
    <h3>style对象语法</h3>
    <p><a href="javascript:;" :style="{color:'red',fontSize:'12px'}" >style对象绑定</a></p>
    <h3>style数组语法</h3>
    <p><a href="javascript:;" :style="[styleObjOne,styleObjTwo]" >style数组绑定</a></p>
  </div>`,
  methods: {
    toggleClass: function () {
      let textDanger = this.textDanger
      console.log(textDanger)
      this.textDanger = textDanger ? false : true
    }
  },
  computed: {
    getClassObj: function () {  
      return {
        active : this.isActive,
        disabled :this.isDisabled,
        'text-danger': this.textDanger
      }
    }
  }
  
})

export default function () {
  return vm
}