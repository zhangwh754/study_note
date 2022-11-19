<template>
  <h2>{{ count }}</h2>
</template>

<script setup>
import { inject } from 'vue'

const count = inject('count', 114514)
</script>

<style scoped lang="scss"></style>
