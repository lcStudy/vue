import Vue from 'vue'
import Mock from 'mockjs'

let Random = Mock.Random
let name = Random.name()
let age = Random.natural(1,40)
let sex = Random.natural(0,2)

let vm = new Vue({
  el: '#app',
  data: {
    person : {
      name : name,
      age: age,
      sex: sex
    }
  },
  template: `<div>
    <h2>条件渲染v-if</h2>
    <div> 
      <span>{{ person.name }}年龄:{{person.age}}</span>,
      <span v-if="person.age >= 18">成年了</span>
      <span v-else>未成年</span>
    </div>
    <h3>使用tempalte标签</h3>
    <div>
      <template v-if="person.age > 0" >
        <p>姓名: {{person.name}}</p>
        <p>年龄: {{person.age }}</p>
      </template>
    </div>
    <h3>v-else-if</h3>
    <div>
      <p v-if="person.sex == 1">{{person.name}}是男孩</p>
      <p v-else-if="person.sex == 2">{{person.name}}是女孩</p>
      <p v-else>{{person.name}}性别未知</p>
    </div>
    <h2>列表渲染v-for</h2>
    <div></div>
  </div>`
  
})

export default function () {
  return vm
}