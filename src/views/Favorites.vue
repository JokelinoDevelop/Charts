<template>
  <div v-if="favorites.length == 0" class=" flex flex-col gap-3 justify-center items-center text-white text-center px-3">
    <img src="@/assets/images/no-favorites.png" alt="">
    <p class="font-[700] tracking-wider text-xl">You haven't selected any favorites yet.</p>
    <p>Start exploring and add your favorite items!</p>

    <RouterLink :to="{ name: 'Coins' }">
      <Button
        class="mt-4 bg-white text-darkBackground max-w-[15rem] w-full hover:bg-gray-100/80 border-2 border-transparent hover:border-lightPurple">Go
        To All Coins</Button>
    </RouterLink>


  </div>

  <div v-else class="mx-6 py-6 grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:grid lg:grid-cols-4 lg:gap-6">
    <template v-for="coin in sortedFavorites" :key="coin.uuid">
      <CoinCard :coin="coin" />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useFavoritesStore } from '@/stores/favoritesStore';
import CoinCard from '@/components/CoinCard.vue'
import Button from '@/components/Button.vue'

const store = useFavoritesStore()
const { favorites } = storeToRefs(store)

const sortedFavorites = computed(() => {
  return favorites.value.slice().sort((a, b) => a.rank - b.rank);
});

</script>

