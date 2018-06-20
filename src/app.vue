<template>

  <div>
    <url-button url="http://baidu.com" type="danger" text="btn-danger" ></url-button>
    <url-button url="http://baidu.com" type="success" text="btn-success" ></url-button>

    <my-post v-bind="post"></my-post>

    <div>
      <p>{{ total }} </p>
      <emit-button v-on:count-plus="myclick"></emit-button>
    </div>
    
  </div>

  
</template>

<script>
  export default {
    data () {
      return {
        message :'Hello Vue!!',
        post: {
          id: 1,
          title: 'a new post',
          description: 'a short cut'
        },
        total: 0
      }
    },
    methods : {
      myclick: function(num) {
        this.total += 1
        alert(num)
      }
    }
  }
</script>
