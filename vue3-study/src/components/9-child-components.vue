<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ count }}</h2>
    <!-- <h2>{{ obj }}</h2>
    <h2>{{ validator }}</h2>
    <h2>{{ fn(1, 2) }}</h2> -->
    <a-button @click="$emit('add', 10)">add</a-button>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: [String, Number],
    required: true
  },
  count: {
    type: Number,
    default: 200
  },
  obj: {
    type: Object,
    default: () => ({ a: 1 })
  },
  validator: {
    // 自定义类型校验，未通过会控制台警告，相当于type进阶版
    validator: value => value === 'validator',
    default: () => 'validator'
  },
  fn: {
    type: Function,
    // 函数的默认default函数本身就会被当做默认值
    default(a, b) {
      return a + b
    }
  }
})

// const props = defineProps<{
//   count?: Number
// }>()

console.log(props.count)
</script>
