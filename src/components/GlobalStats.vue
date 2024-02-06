<template>
  <div
    class="overflow-x-auto whitespace-nowrap px-2 lg:px-4 py-2 flex items-center gap-2 lg:gap-4 text-sm bg-cardBackground text-white"
    v-if="stats">
    <div>
      <p>Total Coins: <span class="text-lightPurple font-[700]">{{ stats.totalCoins }}</span></p>
    </div>
    <div>
      <p>Total Markets: <span class="text-lightPurple font-[700]">{{ stats.totalMarkets }}</span></p>
    </div>
    <div>
      <p>Total Exchanges: <span class="text-lightPurple font-[700]">{{ stats.totalExchanges }}</span></p>
    </div>
    <div>
      <p>Market Cap: <span class="text-lightPurple font-[700]">$ {{ formatNumber(stats.totalMarketCap) }}</span></p>
    </div>
    <div>
      <p>Trading Volume: <span class="text-lightPurple font-[700]">$ {{ formatNumber(stats.total24hVolume) }}</span></p>
    </div>
    <div>
      <p>BTC Dominance: <span class="text-lightPurple font-[700]">{{ formatPrice(stats.btcDominance) }} %</span></p>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'
import { fetchGlobalStats } from '@/services/ApiService'
import { formatNumber, formatPrice } from '@/services/utilityFunctions'
import useSessionStorage from '@/services/useSessionStorage.js'

const stats = useSessionStorage(null, 'stats')
const updateGlobalStats = ref(null)

onBeforeMount(async () => {
  if (stats.value) {
    return
  }

  try {
    const response = await fetchGlobalStats()
    stats.value = response.data

    updateGlobalStats.value = setInterval(async () => {
      try {
        const response = await fetchGlobalStats()
        stats.value = response.data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, 30000);
  } catch (error) {
    console.error(error)
  }
})

onBeforeUnmount(() => {
  console.log('unmounted')
  clearInterval(updateGlobalStats.value)
})


</script>

