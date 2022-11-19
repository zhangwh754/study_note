<template>
  <h2>父组件：{{ msg }}</h2>
  <Child v-model:msg.capitalize="msg" />
</template>

<script setup>
import { ref } from 'vue'

import Child from '@/components/12-子-修饰符组件双向绑定.vue'

const msg = ref('')
</script>

<style scoped lang="scss"></style>
