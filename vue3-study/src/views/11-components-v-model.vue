<template>
  <h2>父组件：{{ count }}</h2>
  <Child v-model:count="count" />
</template>

<script setup>
import { ref } from 'vue'

import Child from '@/components/11-child-components-v-model.vue'

const count = ref(1)
</script>

<style scoped lang="scss"></style>
