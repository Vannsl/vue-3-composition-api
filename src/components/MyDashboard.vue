<script setup lang="ts">
  import { computed, inject } from 'vue'
  import { RootStore } from '../store'
  import BaseButton from './BaseButton.vue'
  import BaseHeading from './BaseHeading.vue'

  const props = defineProps<{
    firstName: string
    lastName: string
  }>()

  const greeting = 'Hello'
  const fullName = computed(() => props.firstName + ' ' + props.lastName)
  const store = inject('store') as RootStore
</script>

<template>
  <section>
    <BaseHeading> {{ greeting }} {{ fullName }}! </BaseHeading>
    <p class="mb-8">These are your items:</p>
    <TransitionGroup
      v-if="store.state.value.items.length"
      name="list"
      tag="ul"
      class="border rounded-lg overflow-hidden"
    >
      <li
        v-for="item in store.state.value.items"
        :key="item.id"
        class="flex items-center justify-between py-2 last:mb-0 p-2 odd:bg-white"
      >
        <div>
          {{ item.count }}x <strong>{{ item.name }}</strong>
        </div>
        <BaseButton @click="store.deleteItem(item.id)"> ✓ Bought </BaseButton>
      </li>
    </TransitionGroup>
    <p v-else>All done 🎉</p>
  </section>
</template>

<style scoped>
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
