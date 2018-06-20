<template>
  <div :id="id">
    <h1 > {{ title }} </h1>
    <div>
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["id" , "title" , "description"]
};
</script>
