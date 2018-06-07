import Vue from 'vue'

let vm = new Vue({
  el: '#app',
  data: {
    text: "hello world!",
    firstName : 'L',
    lastName : 'C'
  },
  computed: {
    reversedText: function() {
      // this指向的是当前vue实例
      return this.text.split("").reverse().join("");
    },
    fullname : {
      get : function() {
        return this.firstName + '@' + this.lastName
      },
      set : function(val) {
        console.log(val)
        var name = val.split('@')
        this.firstName = name[0]
        this.lastName = name[1] || ''
      }
    }
  },
  methods: {
    reversedTextMethod: function() {
      // this指向的是当前vue实例
      return this.text.split("").reverse().join("");
    }
  },
  template : `<div>
    <h2>计算属性</h2>
    <p>Text : {{ text }}</p>
    <p>Text reversed : {{ reversedText }}</p>
    <p>Text reversed byMethod : {{ reversedTextMethod() }}</p>

    <h3></h3>
    <p>My name is {{ fullname }} </p>
  </div>`
})

export default function () { 
  return vm
}