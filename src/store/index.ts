import { readonly, Ref, ref } from 'vue'

export type RootStore = {
  state: Ref<{ items: Item[] }>
  deleteItem: (id: number) => void
}

const state = ref({
  items: [
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
  ],
})

// Actions
function deleteItem(id: number) {
  state.value.items = state.value.items.filter((item) => item.id !== id)
}

export default {
  state: readonly(state),
  deleteItem,
}
