<template>
  <a :href="url" class="btn" :class="classObj">{{ text }}</a>
</template>

<script>
export default {
  data() {
    return {
    }
    
  },
  props:[
    'type',
    'url',
    'text'
  ],
  computed:{
    classObj: function() {
      let btnType = 'btn-' + (this.type || 'default')
      let obj = {}
      obj[btnType] = true
      return obj
    }
  }
}
</script>

