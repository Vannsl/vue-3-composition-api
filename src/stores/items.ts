import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
  state: () => {
    return {
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
    }
  },
  actions: {
    deleteItem(id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    },
  },
})
