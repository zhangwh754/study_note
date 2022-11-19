<template>
  <a-button @click="$emit('submit', {})">验证不通过</a-button>
  <a-button @click="$emit('submit', { email, password })">验证通过</a-button>
</template>

<script setup>
import { ref } from 'vue'

defineEmits({
  // 没有校验
  click: null,
  // 校验 submit 事件
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
})

const email = ref('djdg626@sina.com')
const password = ref('111111')

// function submitForm(email, password) {
//   emit('submit', { email, password })
// }
</script>

<style scoped lang="scss"></style>
