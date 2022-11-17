<template>
  <div class="reactivity">
    <div class="reactive">
      <h2 :[propertyName]="style" @[eventName]="btnClick">{{ style }}</h2>
      <!-- <div>{{ data }}</div>
      <div>{{ count }}</div> -->
      <!-- <a-button type="primary" @click="btnClick">handle</a-button> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const propertyName = ref('style')

const style = ref('color: red;')

const eventName = ref('click')

const btnClick = () => console.log('@@@@')
</script>

<style>
.reactivity {
  font-size: 30px;
  font-weight: bold;
  color: blue;
}
</style>
