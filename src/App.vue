<script setup lang="ts">
  import MyDashboard from './components/MyDashboard.vue'
</script>

<template>
  <main class="container mx-auto my-20 px-8 text-center max-w-[540px]">
    <MyDashboard first-name="Vanessa" last-name="Otto" />
  </main>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
