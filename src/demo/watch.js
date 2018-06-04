import Vue from 'vue'

let vm = new Vue({
  data: {
    keyword: '',
    searchResult : ''
  },
  watch: {
    keyword: function(val) {
      console.log('search keyword:' + val)
      this.searchByKeyword()
    }
  },
  methods: {
    searchByKeyword: function() {
      let keyword = this.keyword
      console.log('searchByKeyword keyword:' + keyword)
      // 本来想写个ajax的，但是就这样吧，假装一下，😀
      this.searchResult = '搜索结果：' + keyword
    }
  },
  template : `<div>
    <h2>侦听器示例:简单搜索</h2>
    <p><input type="search" v-model="keyword" ></p>
    <p>{{ searchResult }}</p>
  </div>`
})

export default function () { 
  return vm
}