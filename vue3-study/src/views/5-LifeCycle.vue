<template>
  <h2>{{ count }}</h2>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue'

onMounted(() => {
  console.log('onMounted')
})

onUpdated(() => {
  console.log('onUpdated')
})

const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)
</script>

<style scoped lang="scss"></style>
