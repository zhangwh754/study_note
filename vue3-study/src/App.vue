<script setup>
import { reactive } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { autoRoutes } from './utils/routes'

const titles = reactive([
  '响应式基础',
  '计算属性',
  '动态class和style',
  '表单输入绑定',
  '生命周期',
  '侦听器',
  'ref获取元素',
  '组件基础',
  '组件进阶',
  '事件进阶',
  '组件v-model',
  '有修饰符的组件双向绑定',
  '插槽',
  '依赖注入'
])
</script>

<template>
  <div id="layout">
    <div id="router">
      <template v-for="(item, index) in autoRoutes" :key="item">
        <RouterLink :to="{ name: item.name }">
          <a-button type="primary">{{ titles[index] || '空值' }}</a-button>
        </RouterLink>
      </template>
    </div>
    <div class="hr-dashed"></div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
#layout {
  margin: 20px;
  #router {
    display: flex;
    row-gap: 10px;
    column-gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .hr-dashed {
    border: 0;
    border-top: 2px dashed #a2a9b6;
    margin-bottom: 20px;
  }
}
</style>
