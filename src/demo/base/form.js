import Vue from 'vue'

let vm = new Vue({
  el: '#app',
  data: {
    message: '',
    checkedNames: [],
    picked: '',
    selected: '',
    selectedArr : [],
    pickedA:'',
    toggle: true,
    selectedV: 'a',
    toggleA : 'yes'
  },
  template: `<div>
    <h2>表单输入绑定</h2>
    <h3>input</h3>
    <div>
      <input v-model="message" placeholder="请输入...">
      <p>Message: {{ message }}</p>
    </div>
    <h3>textarea</h3>
    <div>
      <textarea v-model="message"></textarea>
      <p style="white-space: pre-line;">{{ message }}</p>
    </div>
    <h3>checkbox</h3>
    <div>
      <input type="checkbox" id="xiaoming" value="小明" v-model="checkedNames">
      <label for="xiaoming">小明</label>
      <input type="checkbox" id="xiaofang" value="小方" v-model="checkedNames">
      <label for="xiaofang">小方</label>
      <input type="checkbox" id="xiaohong" value="小红" v-model="checkedNames">
      <label for="xiaohong">小红</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <h3>radio</h3>
    <div id="radio-demo">
      <input type="radio" id="radio-1" value="小明" v-model="picked">
      <label for="radio-1">小明</label>
      <br>
      <input type="radio" id="radio-2" value="小红" v-model="picked">
      <label for="radio-2">小红</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <h3>select</h3>
    <h4>单选</h4>
    <div id="select">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <h4>多选</h4>
    <div>
      <select v-model="selectedArr" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selectedArr }}</span>
    </div>
    <h3>值绑定</h3>
    <div>

      <div>
        <input type="radio" name="pick-a" v-model="pickedA" value="a"> a
        <input type="radio" name="pick-a" v-model="pickedA" value="b"> b
        <p>{{ pickedA }}</p>
      </div>
      
      <div>
        <input type="checkbox" v-model="toggle"> {{ toggle }}
      </div>

      
      <div>
        <select v-model="selectedV">
          <option value="a">A</option>
          <option value="b">B</option>
        </select>
        {{ selectedV }}
      </div>
      
      <div>
        <input
          type="checkbox"
          v-model="toggleA"
          true-value="yes"
          false-value="no"
        >

        {{ toggleA }}
      </div>
      

    </div>
  </div>`
})