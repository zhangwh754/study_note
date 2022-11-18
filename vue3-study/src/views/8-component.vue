<template>
  <h2>组件基础</h2>
  <Child :count="count" @add="count.push(1)">
    <h2>替换插槽11</h2>
  </Child>
</template>

<script setup>
import { ref } from 'vue'

import Child from '@/components/8-child-components.vue'

const count = ref([])
</script>

<style scoped lang="scss"></style>
