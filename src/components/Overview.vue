<template>
  <section>
    <BaseHeading>
      {{ greeting }} {{ fullName }}!
    </BaseHeading>
    <p class="mb-8">These are your items:</p>
    <TransitionGroup v-if="items.length" name="list" tag="ul" class="border rounded-lg overflow-hidden">
      <li
        v-for="item in items"
        :key="item.id"
        class="flex items-center justify-between py-2 last:mb-0 p-2 odd:bg-white"
      >
        <div>
          {{ item.count }}x <strong>{{ item.name }}</strong>
        </div>
        <BaseButton @click="deleteItem(item.id)"> ✓ Bought </BaseButton>
      </li>
    </TransitionGroup>
    <p v-else>All done 🎉</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "./BaseButton.vue";
import BaseHeading from "./BaseHeading.vue";

export default defineComponent({
  name: "Overview",
  components: {
    BaseButton,
    BaseHeading,
  },
  data: () => {
    return {
      greeting: "Hello",
      items: <Item[]>[
        {
          id: 0,
          name: "Eggs",
          count: 10,
        },
        {
          id: 1,
          name: "Fresh Milk",
          count: 1,
        },
        {
          id: 2,
          name: "Bread",
          count: 1,
        },
      ],
    };
  },
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  computed: {
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  methods: {
    deleteItem: function (id: number) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});
</script>

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
