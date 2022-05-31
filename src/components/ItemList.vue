<script setup lang="ts">
  import { useItems } from '../composables/useItems'
  import BaseButton from './BaseButton.vue'

  const { items, deleteItem } = useItems()
</script>

<template>
  <ul name="list" tag="ul">
    <li
      v-for="item in items"
      :key="item.id"
      class="flex items-center justify-between py-2 last:mb-0 p-2"
    >
      <div>
        {{ item.count }}x <strong>{{ item.name }}</strong>
      </div>
      <BaseButton @click="deleteItem(item.id)"> ✓ </BaseButton>
    </li>
  </ul>
</template>
