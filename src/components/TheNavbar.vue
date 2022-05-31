<script setup lang="ts">
  import { Disclosure, Menu, MenuButton, MenuItems } from '@headlessui/vue'
  import { ShoppingBagIcon } from '@heroicons/vue/outline'
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16">
        <div class="flex items-center ml-auto">
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <span class="sr-only">Open cart</span>
                <ShoppingBagIcon class="h-6 w-6" aria-hidden="true" />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <slot />
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </Disclosure>
</template>
