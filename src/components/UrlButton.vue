<template>
  <a :href="url" class="btn" :class="{}"></a>
</template>

<script>
export default {
  data() {
    return {
      classObj: {
        'btn-default': true,
        'btn-success':false,
        'btn-danger': false,
      }
    }
    
  },
  props:[
    'type',
    'url'
  ],
  computed:{
    classObj: function() {
      
    }
  }
}
</script>

