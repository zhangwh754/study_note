<template>
  <input :value="msg" @input="updateMsgValue" />
</template>

<script setup>
const props = defineProps({
  msg: String,
  msgModifiers: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['update:msg'])

console.log(props.msgModifiers) // {capitalize: true}
const updateMsgValue = e => {
  let value = e.target.value
  if (props.msgModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:msg', value)
}
</script>

<style scoped lang="scss"></style>
