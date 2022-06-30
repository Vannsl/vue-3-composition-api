import { readonly, ref } from 'vue'
import dataItems from '../data/items'

const items = ref(dataItems)

export function useItems() {
  function deleteItem(id: number) {
    items.value = items.value.filter((item) => item.id !== id)
  }

  return { items: readonly(items), deleteItem }
}
