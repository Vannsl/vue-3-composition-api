<script setup lang="ts">
  import { useItemsStore } from '../stores/items'
  import BaseButton from './BaseButton.vue'

  const store = useItemsStore()
</script>

<template>
  <ul name="list" tag="ul">
    <li
      v-for="item in store.items"
      :key="item.id"
      class="flex items-center justify-between py-2 last:mb-0 p-2"
    >
      <div>
        {{ item.count }}x <strong>{{ item.name }}</strong>
      </div>
      <BaseButton @click="store.deleteItem(item.id)"> ✓ </BaseButton>
    </li>
  </ul>
</template>
