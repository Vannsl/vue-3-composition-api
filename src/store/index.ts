import { readonly, Ref, ref } from 'vue'
import dataItems from '../data/items'

export type RootStore = {
  state: Ref<{ items: Item[] }>
  deleteItem: (id: number) => void
}

const state = ref({
  items: dataItems,
})

// Actions
function deleteItem(id: number) {
  state.value.items = state.value.items.filter((item) => item.id !== id)
}

export default {
  state: readonly(state),
  deleteItem,
}
