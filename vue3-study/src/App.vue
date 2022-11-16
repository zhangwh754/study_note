<script setup>
import { RouterView, RouterLink, useRoute } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/" v-if="useRoute().path === '/about'">
      <button>go home</button>
    </RouterLink>
    <RouterLink to="/about" v-else>
      <button>go about</button>
    </RouterLink>
  </div>
  <RouterView />
</template>

<style scoped></style>
