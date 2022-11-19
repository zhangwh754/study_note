<template>
  <input type="number" :value="count" @input="$emit('update:count', $event.target.value)" />
</template>

<script setup>
defineProps(['count'])
defineEmits(['update:count'])
</script>

<style scoped lang="scss"></style>
