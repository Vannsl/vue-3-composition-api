<script setup lang="ts">
  import { ref } from 'vue'
  import BaseButton from './BaseButton.vue'

  const items = ref([
    {
      id: 0,
      name: 'Eggs',
      count: 10,
    },
    {
      id: 1,
      name: 'Fresh Milk',
      count: 1,
    },
    {
      id: 2,
      name: 'Bread',
      count: 1,
    },
  ])

  function deleteItem(id: number) {
    items.value = items.value.filter((item) => item.id !== id)
  }
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
