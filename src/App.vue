<script setup lang="ts">
import HomeView from './views/HomeView.vue'
import navComponent from './components/navComponent.vue'
import footerComponent from './components/footerComponent.vue'
</script>

<template>
  <header>
    <navComponent/>
  </header>
  <main>
    <HomeView />
  </main>
  <footer>
    <footerComponent/>
  </footer>
</template>
