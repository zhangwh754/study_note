<template>
  <div>
    <h2>{{ count }}</h2>
    <a-button @click="add">add</a-button>
  </div>
</template>

<script setup>
const props = defineProps(['count'])
const emits = defineEmits(['add'])

const add = () => emits

console.log(props.count)
</script>

<style scoped lang="scss">
div {
  width: 200px;
  border: 1px solid lightblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
