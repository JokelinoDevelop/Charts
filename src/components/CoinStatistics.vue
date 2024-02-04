<template>
  <div class="mt-6">
    <h1 class="text-2xl">Value Statistics:</h1>
    <p class="tracking-wider text-grayOverlay">An overview showing the statistics of <span
        class="text-xl text-white font-[700]">{{ coin.name
        }}</span> such as the base and quote
      currency, the rank, and trading volume</p>
  </div>

  <ul class="grid gap-4 mt-4">

    <li class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="@/assets/images/price-usd-icon.svg" alt="">
        <p>Price to USD</p>
      </div>
      <p>$ {{ formatPrice(coin.price) }}</p>
    </li>

    <li class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="@/assets/images/price-btc-icon.svg" alt="">
        <p>Price to BTC</p>
      </div>
      <div>
        <p>{{ coin.btcPrice == 1 ? coin.btcPrice : Number(coin.btcPrice).toFixed(10) }} BTC</p>
      </div>

    </li>

    <li class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="@/assets/images/coin-rank.svg" alt="">
        <p>Coin rank</p>
      </div>
      <p>{{ coin.rank }}</p>
    </li>

    <li class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="@/assets/images/24h-volume.svg" alt="">
        <p>24h volume</p>
      </div>
      <p>$ {{ formatNumber(coin['24hVolume']) }}</p>
    </li>

    <li class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="@/assets/images/market-cap.svg" alt="">
        <p>Market cap</p>
      </div>
      <p>$ {{ formatNumber(coin.marketCap) }}</p>
    </li>

    <li class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="@/assets/images/market-cap.svg" alt="">
        <p>Volume / Market cap</p>
      </div>
      <p>{{ Number(coin['24hVolume'] / coin.marketCap).toFixed(4) }}</p>
    </li>

    <li class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="@/assets/images/market-cap.svg" alt="">
        <p>Fully diluted market cap</p>
      </div>
      <p>$ {{ formatNumber(coin.fullyDilutedMarketCap) }}</p>
    </li>

    <li class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="@/assets/images/all-time-high.svg" alt="">
        <p>All-time high</p>
      </div>

      <div>
        <p>$ {{ Number(coin.allTimeHigh.price).toFixed(3) }}</p>
        <p>on {{ timestampToDate(coin.allTimeHigh.timestamp) }}</p>
      </div>

    </li>

  </ul>
</template>

<script setup>
import { formatNumber, timestampToDate, formatPrice } from '@/services/utilityFunctions.js'

defineProps({
  coin: {
    type: Object,
    required: true
  }
})
</script>
