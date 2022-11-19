<template>
  <Child>
    <template #content="slotProps">
      <h2>年龄是{{ slotProps.age }}</h2>
    </template>
  </Child>
</template>

<script setup>
import Child from '@/components/13-Slot.vue'
</script>

<style scoped lang="scss"></style>
