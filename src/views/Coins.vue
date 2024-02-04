<template>
  <div class="pt-7">
    <SearchBar />
    <div class="mx-6 text-white min-h-screen">
      <div v-if="loading" class="flex justify-center items-center mt-[10rem]">
        <FwbSpinner color="purple" size="12" />
      </div>

      <div v-else-if="coins" class="grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:grid lg:grid-cols-4 lg:gap-6">
        <template v-for="coin in coins" :key="coin.uuid">
          <CoinCard :coin="coin" />
        </template>
      </div>

      <div class="-translate-y-[700px]" ref="last"></div>

      <div class="flex justify-center mt-6" v-if="coins?.length == 100">
        <FwbPagination v-model="currentPage" :total-pages="100" :slice-length="2" show-icons :show-labels="false" large>
          <template v-slot:page-button="{ page }">
            <button @click="debouncedCoinsPagination(page)" :class="{ 'bg-darkPurple': currentPage == page }"
              class="flex items-center justify-center first:rounded-l-lg last:rounded-r-lg px-4 ml-0 leading-tight text-white bg-cardBackground border-y-2 border-lightPurple hover:bg-darkPurple">
              {{ page }}
            </button>
          </template>
        </FwbPagination>
      </div>

    </div>
    <Footer v-if="coins?.length == 100" class="mt-8" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'
import { fetchCoins, fetchCoinsByLimit } from '@/services/ApiService';
import { useIntersectionObserver, useDebounceFn } from '@vueuse/core';
import { FwbPagination } from 'flowbite-vue'
import useSessionStorage from '@/services/useSessionStorage.js'
import CoinCard from '@/components/CoinCard.vue';
import SearchBar from '@/components/SearchBar.vue'
import Footer from '@/components/Footer.vue'
import { FwbSpinner } from 'flowbite-vue';

const coins = useSessionStorage(null, 'cachedCoins')

const currentPage = useSessionStorage(1, 'current-page')

const scrollY = useSessionStorage(0, 'scroll-y')

onMounted(async () => {
  window.scrollTo(0, scrollY.value);
  window.addEventListener('scroll', () => {
    trackScrollY();
  });
});

const trackScrollY = () => {
  scrollY.value = window.scrollY
}
const loading = ref(true)
const last = ref(null)
const updateIntervalCoins = ref(null)


onBeforeMount(async () => {
  if (coins.value) {
    loading.value = false
    return
  }
  try {
    loading.value = true
    const offset = (currentPage.value - 1) * 100
    const response = await fetchCoins(offset);
    coins.value = response.data.coins
    updateIntervalCoins.value = setInterval(async () => {
      try {
        const response = await fetchCoinsByLimit(coins.value.length)
        coins.value = response.data.coins
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, 30000);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false
  }

})

onBeforeUnmount(() => {
  clearInterval(updateIntervalCoins.value)
  window.removeEventListener('scroll', () => {
    trackScrollY()
  })
})

const getCoinsOnScroll = async () => {
  if (coins.value?.length > 99) {
    return
  }

  try {
    const offset = (currentPage.value - 1) * 100 + coins.value.length
    const response = await fetchCoins(offset)
    const newCoins = response.data.coins
    coins.value.push(...newCoins)
  } catch (error) {
    console.error(error)
  }

}

useIntersectionObserver(last, async ([{ isIntersecting }]) => {
  if (isIntersecting && !loading.value) {
    await getCoinsOnScroll();
  }
}, { threshold: 0.5 });

const getCoinsByPagination = async (page) => {
  try {
    window.scrollTo(0, 0)
    coins.value = null
    currentPage.value = page
    loading.value = true
    const offset = (page - 1) * 100
    const response = await fetchCoins(offset)
    coins.value = response.data.coins
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

const debouncedCoinsPagination = useDebounceFn((value) => {
  getCoinsByPagination(value)
}, 250)


</script>
