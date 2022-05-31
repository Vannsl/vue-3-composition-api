import { readonly, ref } from 'vue'

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

export function useItems() {
  function deleteItem(id: number) {
    items.value = items.value.filter((item) => item.id !== id)
  }

  return { items: readonly(items), deleteItem }
}
