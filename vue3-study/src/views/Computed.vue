<template>
  <div class="computed">
    <span>{{ fullName }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) {
    ;[firstName.value, lastName.value] = newValue.split(' ')
  }
})

setTimeout(() => {
  fullName.value = 'zhang san'
}, 3000);
</script>

<style>
.computed {
  font-size: 30px;
  font-weight: bold;
  color: blue;
}
</style>
