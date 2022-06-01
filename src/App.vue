<script setup lang="ts">
<<<<<<< Updated upstream
  import { provide } from 'vue'
=======
>>>>>>> Stashed changes
  import store from './store'
  import MyDashboard from './components/MyDashboard.vue'
  import ItemList from './components/ItemList.vue'
  import TheNavbar from './components/TheNavbar.vue'
<<<<<<< Updated upstream
=======
  import { provide } from 'vue'
>>>>>>> Stashed changes

  provide('store', store)
</script>

<template>
  <header>
    <TheNavbar>
      <ItemList />
    </TheNavbar>
  </header>
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
