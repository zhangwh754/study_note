<script setup>
import { RouterView, RouterLink, useRoute } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/" v-if="useRoute().path === '/about'">
      <a-button type="primary">go home</a-button>
    </RouterLink>
    <RouterLink to="/about" v-else>
      <a-button type="primary">go about</a-button>
    </RouterLink>
  </div>
  <RouterView />
</template>

<style scoped></style>
