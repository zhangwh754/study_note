<template>
  <Child @submit="submit" />
</template>

<script setup>
import Child from '@/components/10-child-events-validation.vue'

const submit = ({ email, password }) => {
  console.log(email, password)
}
</script>

<style scoped lang="scss"></style>
