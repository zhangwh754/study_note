<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div id="layout">
    <div id="router">
      <RouterLink to="/">
        <a-button type="primary">go home</a-button>
      </RouterLink>
      <RouterLink to="/reactivity">
        <a-button type="primary">响应式基础</a-button>
      </RouterLink>
      <RouterLink to="/computed">
        <a-button type="primary">计算属性</a-button>
      </RouterLink>
      <RouterLink to="/bindClass">
        <a-button type="primary">动态class和style</a-button>
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
#layout {
  margin: 20px;
  #router {
    margin-bottom: 20px;
    a + a {
      margin-left: 20px;
    }
  }
}
</style>
