<template>
  <form id="form" @submit.prevent="checkForm">
    <!-- 单选框 -->
    <div>Picked: {{ picked }}</div>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />

    <!-- 复选框 -->
    <div>Checked names: {{ checkedNames }}</div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />

    <!-- 选择器 -->
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option :value="{ a: 1 }">A</option>
      <option :value="22">B</option>
      <option :value="33">C</option>
    </select>

    <br />
    <button type="submit">提交</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const picked = ref('Two')
const checkedNames = ref([])
const selected = ref('')

const checkForm = () => {
  console.log(picked.value)
  console.log(checkedNames.value)
  console.log(selected.value)
}
</script>

<style scoped lang="scss"></style>
