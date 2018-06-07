import Vue from 'vue'
import Mock from 'mockjs'

let Random = Mock.Random
let name = Random.name()
let age = Random.natural(1,40)
let sex = Random.natural(0,2)

let data = Mock.mock({
  'list|1-10':[{
    'id|+1': 1,
    'name': '@cname',
    'age|1-40': 0,
    'sex|0-2': 0
  }]
})

// console.log(data)

let vm = new Vue({
  el: '#app',
  data: {
    person : {
      name : name,
      age: age,
      sex: sex
    },
    persons : data.list
  },
  computed: {
    personsFilterSex: function() {
      return this.persons.filter((person) => {
        return person.sex == 1
      })
    }
  },
  methods: {
    personsFilterBySex: function (sex = 1) {
      return this.persons.filter((person) => {
        return person.sex == sex
      })
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
    <div>
      <ul>
        <li v-for="person in persons">
          {{ person.name }},Age: {{ person.age }},sex: {{ person.sex }}
        </li>
      </ul>
    </div>
    <h3>v-for对象</h3>
    <div>
      <p v-for="(value ,key , index) in person">
        {{ key }}:{{ value}}
      </p>
    </div>
    <h2>深入使用</h2>
    <h3>v-for和v-if一起使用</h3>
    <div>
      <ul>
        <li v-for="person in persons" v-if="person.sex == 1">
          {{ person.name }},Age: {{ person.age }}
        </li>
      </ul>
    </div>
    <h3>v-for绑定key</h3>
    <div>
      <ul>
        <li v-for="person in persons" :key="person.id">
          Id:{{ person.id }} {{ person.name }},Age: {{ person.age }}
        </li>
      </ul>
    </div>
    <h3>v-for使用计算属性</h3>
    <div>
      <ul>
        <li v-for="person in personsFilterSex">
          Id:{{ person.id }} {{ person.name }},Age: {{ person.age }}
        </li>
      </ul>
    </div>
    <h3>v-for使用方法</h3>
    <div>
      <ul>
        <li v-for="person in personsFilterBySex(2)">
          Id:{{ person.id }} {{ person.name }},Age: {{ person.age }}
        </li>
      </ul>
    </div>
    <h3>一段取值范围</h3>
    <div>
      <span v-for="n in 10">{{ n }} </span>
    </div>
  </div>`
  
})

vm.persons.push({
  id: 11,
  name: Random.name(),
  age : Random.natural(1, 40),
  sex : Random.natural(0, 2)
})

vm.persons1 = vm.persons.filter((person) =>{
  return person.sex == 1
})

console.log('old' , vm.persons)
console.log('new' , vm.persons1)

// 

let newPerson = {
  id: 12,
  name: Random.name(),
  age: Random.natural(1, 40),
  sex: Random.natural(0, 2)
}

// Vue.set(vm.persons , 1 , newPerson)
// vm.persons.splice(1, 1, newPerson)
vm.$set(vm.persons, 1, newPerson)

// vm.persons.splice(1)
vm.$set(vm.person , 'age' , 41)

export default function () {
  return vm
}