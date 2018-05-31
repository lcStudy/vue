<template>

  <div>
    <h2>插值示例</h2>
    <h3>文本插值:</h3>
    <p>文本插值: {{ text }}</p>
    <!--  通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新 -->
    <p v-once>文本插值(一次性): {{ textOnce }}</p>

    <h3>HTML插值</h3>
    <p>html文本: {{ html }}</p>
    <p>使用v-html指令 : <span v-html="html"></span></p>

    <h3>v-bind</h3>
    <!-- 错误用法 -->
    <p >{{ vBindError }}</p>
    <!-- 争取用法 -->
    <p v-bind:id="id"> {{ vBindSuccess }} </p>

    <h3>js表达式</h3>
    <p>数字计算 {{ num + 1 }}</p>
    <p>三元运算 {{ isTrue ? 'yes' : 'no'}}</p>
    <p>字符计算 {{ text.split('').reverse().join('') }} </p>
  </div>
  
</template>

<script>
export default {
  data (){
    return {
      id: 'demo1',
      text: 'text 文本插值',
      textOnce: '一次性插值不会改变',
      html: '<small style="color:red;">HTML插值示例</small>',
      vBindSuccess : '<p v-bind:id="id">正确用法</p>',
      vBindError: '<p id="{{ id }}">错误用法</p>',
      num : 10,
      isTrue : true
    }
  }
}
</script>

