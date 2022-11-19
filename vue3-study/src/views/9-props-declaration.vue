<template>
  <Child name="123" :count="count" @add="num => (count += num)" />
  <!-- <Child isZwh="zwh11" /> -->
  <!-- <Child :count="100" /> -->
</template>

<script setup>
import { ref } from 'vue'
import Child from '@/components/9-child-components.vue'
const count = ref(0)
</script>

<style scoped lang="scss"></style>
