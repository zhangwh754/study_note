<template>
  <h2>组件基础</h2>
  <Child :count="0" />
  <Child :count="10" />
  <Child :count="100" />
  <Child :count="1000" />
</template>

<script setup>
import Child from '@/components/8-child-components.vue'
</script>

<style scoped lang="scss"></style>
