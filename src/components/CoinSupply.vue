<template>
  <div class="mt-6 pb-6">
    <div class="mt-6 pb-6">
      <h1 class="text-2xl">Supply Information:</h1>
      <p class="tracking-wider text-grayOverlay">View the total and circulating supply of <span
          class="text-xl text-white font-[700]">{{ coin.name
          }}</span> , including details on how the supplies are calculated.</p>
    </div>

    <div class=" pb-6 pt-4 px-6 bg-cardBackground rounded-xl border-2 border-lightPurple">

      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-2 ">
          <img :src="coin.supply.confirmed ? getImageUrl('verified') : getImageUrl('unverified')" class="w-[1.5rem]"
            alt="">
          <p :class="coin.supply.confirmed ? 'text-lightPurple' : 'text-pink' + ' font-[500]'">
            {{ coin.supply.confirmed ? 'Verified' : 'Unverified' }} Supply
          </p>
        </div>

        <RadialProgress :diameter="105" :total-steps="100" :completed-steps="supplyPercentage" innerStrokeColor="#2F293E"
          startColor="#B783EB" stop-color="#B783EB">
          <span class="font-[700] text-xl">{{ supplyPercentage }}%</span>
        </RadialProgress>

      </div>

      <hr class="my-4 border border-lightPurple">


      <ul class="grid gap-2">
        <li v-if="coin.supply.circulating" class="flex items-center justify-between">
          <p>Circulating Supply</p>
          <p>{{ formatNumber(coin.supply.circulating) }} {{ coin.symbol }}</p>
        </li>

        <li v-if="coin.supply.total" class="flex items-center justify-between">
          <p>Total Supply</p>
          <p>{{ formatNumber(coin.supply.total) }} {{ coin.symbol }}</p>
        </li>
        <li v-if="coin.supply.max" class="flex items-center justify-between">
          <p>Max Supply</p>
          <p>{{ formatNumber(coin.supply.max) }} {{ coin.symbol }}</p>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { formatNumber } from '@/services/utilityFunctions.js'
import RadialProgress from "vue3-radial-progress";

const props = defineProps({
  coin: {
    type: Object,
    required: true
  }
})

const supplyPercentage = computed(() => {
  const totalSupply = props.coin.supply.total;
  const circulatingSupply = props.coin.supply.circulating;

  if (circulatingSupply !== 0) {
    const percentage = Math.round((circulatingSupply / totalSupply) * 100);
    return percentage;
  } else {
    // Handle the case where circulatingSupply is 0 to avoid division by zero
    return 100;
  }
})

const getImageUrl = (path) => {
  return new URL(`../assets/images/${path}-sign.svg`, import.meta.url).href;
};

</script>
