<template>
    <button v-on:click="countPlus" >{{ count }}</button>
</template>

<script>
export default {
  data: function(){
    return {
      count: 0
    }
  },
  methods: {
    countPlus: function(){
      this.count += 2
      this.$emit('count-plus' , this.count)
    }
  }
}
</script>

