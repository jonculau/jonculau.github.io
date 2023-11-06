<script setup lang="ts">
import { RouterView } from 'vue-router'
import navComponent from './components/navComponent.vue'
import footerComponent from './components/footerComponent.vue'
</script>

<template>
  <header>
    <navComponent/>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <footerComponent/>
  </footer>
</template>
