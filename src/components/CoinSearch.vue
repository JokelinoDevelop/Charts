<template>
  <div class="px-4 flex items-center justify-between text-white hover:bg-lightPurple transition-all duration-400">

    <div class="flex items-center gap-6">
      <img :src="icon" alt="" class="max-w-[2rem]">

      <div>
        <p class="w-[12ch] text-lg font-[700]">{{ name }}</p>
        <p class="text-sm">{{ symbol }}</p>
      </div>
    </div>

    <p class="font-[700]">$ {{ formatPrice(price) }}</p>

  </div>
</template>

<script setup>
import { formatPrice } from '@/services/utilityFunctions.js'

defineProps({
  name: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: String
  },
  symbol: {
    required: true,
    type: String
  },
  icon: {
    required: true,
    type: String
  }
})
</script>
