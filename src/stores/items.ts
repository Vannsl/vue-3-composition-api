import { defineStore } from 'pinia'
import dataItems from '../data/items'

export const useItemsStore = defineStore('items', {
  state: () => {
    return {
      items: dataItems,
    }
  },
  actions: {
    deleteItem(id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    },
  },
})