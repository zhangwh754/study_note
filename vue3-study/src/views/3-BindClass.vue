<template>
  <h2 :style="{ backgroundColor: 'lightblue' }">内联样式</h2>
  <h2 :style="styleObj">内联样式</h2>
  <h2 :style="[styleObj, styleObj2]">内联样式</h2>
</template>

<script setup>
import { ref } from 'vue'

const styleObj = ref({
  backgroundColor: 'lightblue'
})
const styleObj2 = ref({
  color: 'red'
})
</script>

<style scoped lang="scss">
.blue {
  color: blue;
}
.red {
  color: red;
}
</style>
