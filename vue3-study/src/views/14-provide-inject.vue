<template>
  <Child></Child>
  <a-button @click="count += 1">add</a-button>
</template>

<script setup>
import { provide, ref } from 'vue'

import Child from '../components/14-子-依赖注入.vue'

const count = ref(0)

// provide('count', count)
</script>

<style scoped lang="scss"></style>
