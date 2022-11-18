<template>
  <div>
    <h2>{{ data }}</h2>
    <h2>{{ num }}</h2>
    <a-button @click="add">add</a-button>
  </div>
</template>

<script setup>
import { reactive, ref, watchEffect } from 'vue'

const data = reactive({ count: 100 })
const num = ref(0)

watchEffect(() => {
  const foo = data.count
  num.value = foo
  console.log('watchEffect执行了')
})

const add = () => data.count++
</script>

<style scoped lang="scss"></style>
