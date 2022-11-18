<template>
  <div>
    <h2 ref="title">title</h2>
    <ul>
      <li v-for="(item, index) in 10" :key="index" ref="list">{{ item }}</li>
    </ul>
    <input type="text" v-model="value" :ref="render" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const title = ref(null)
const list = ref(null)
const value = ref('')

const render = e => {
  if (value.value.length > 5) {
    e.style.color = 'red'
  }
}

onMounted(() => {
  console.log(title.value)
  list.value.forEach(item => console.log(item))
})
</script>

<style scoped lang="scss"></style>
