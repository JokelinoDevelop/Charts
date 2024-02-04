<template>
  <div
    class="relative border-2 shadow-md border-dividerLine bg-cardBackground py-4 lg:pt-8 px-6 mt-6 flex flex-col justify-between rounded-xl cursor-pointer gap-1"
    @click.prevent="navigateToCoinDetails">

    <div class="flex mt-7 sm:mt-0 justify-between lg:flex-col lg:items-center">
      <div
        class="absolute top-0 -translate-y-1/2 left-[50%] -translate-x-1/2 rounded-full border-4 border-gradient p-[0.5rem]">
        <img :src="coin.iconUrl" alt="" class="w-[2.5rem] h-[2.5rem] relative" loading="lazy">
      </div>

      <div class="flex items-center gap-4 text-grayOverlay">
        <p class="text-[1.rem]">{{ coin.symbol }}</p>
        <img src="@/assets/images/left-right-arrow.svg" alt="" loading="lazy">
        <p>USD</p>
      </div>

      <div class="flex items-center gap-2 lg:mt-3"
        :class="{ 'text-green-500': checkChange, 'text-red-500': !checkChange }">
        <img :src="checkChange ? '/up-green-arrow.svg' : '/down-red-arrow.svg'" alt="" class=" w-[1.5rem]" loading="lazy">
        <p>
          {{ Math.abs(coin.change) }}%
        </p>
      </div>
    </div>

    <div class="flex items-center justify-between mt-2 mb-1 lg:text-center">
      <p :key="coin.price" class="text-[1.5rem] text-white"
        :class="{ 'price-increased': isPriceIncreased, 'price-decreased': !isPriceIncreased }">$ {{
          formatPrice((coin.price)) }}</p>
      <div class="border px-3 py bg-darkBackground rounded-full">
        <p class="text-sm text-white font-[700]"># {{ coin.rank }}</p>
      </div>

    </div>

    <div class="flex gap-3 items-center">
      <img src="@/assets/images/market-cap.svg" alt="">
      <p class="text-lg text-lightPurple font-[500]">{{ formatNumber(coin.marketCap) }}</p>
    </div>

    <hr class="my-4 border border-lightPurple">

    <div class="flex justify-between items-center">
      <span class="text-lg font-[500]">$ {{ formatPrice((Math.max(...sparklineValues))) }}</span>
    </div>


    <Line :data="chartData" :options="options" />

    <span class="text-lg font-[500]">$ {{ formatPrice((Math.min(...sparklineValues))) }}</span>

  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router';
import { getRandomGradient, formatPrice, formatNumber, generate24HourLabels } from '@/services/utilityFunctions.js';
import { options } from '@/services/chartOptions.js'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
const router = useRouter()

const props = defineProps({
  coin: {
    required: true,
    type: Object,
  },
})

const sparklineValues = ref(null)
const sparklineLabels = ref(null)
const chartData = ref(null)
const prevPrice = ref(props.coin.price)

// API doesnt work correctly
sparklineValues.value = Array.from(props.coin.sparkline);
sparklineValues.value[23] = props.coin.price

sparklineLabels.value = generate24HourLabels()

const borderColor = getRandomGradient();

chartData.value = {
  labels: sparklineLabels.value,
  datasets: [
    {
      label: `${props.coin.name}`,
      borderColor: borderColor,
      borderWidth: 3,
      pointRadius: 3,
      data: sparklineValues.value,
    },
  ],
};


watch(() => props.coin, (newCoin) => {

  sparklineValues.value = Array.from(newCoin.sparkline);
  sparklineValues.value[23] = newCoin.price;

  sparklineLabels.value = generate24HourLabels();
  chartData.value = {
    labels: sparklineLabels.value,
    datasets: [
      {
        label: `${props.coin.name}`,
        borderWidth: 3,
        pointRadius: 3,
        data: sparklineValues.value,
      },
    ],
  };

});

const isPriceIncreased = computed(() => {
  if (props.coin.price > prevPrice.value) {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    prevPrice.value = props.coin.price
    return true
  } else if (props.coin.price < prevPrice.value) {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    prevPrice.value = props.coin.price
    return false;
  }
  return ''
})

const checkChange = computed(() => {
  if (parseFloat(props.coin.change) >= 0) {
    return true
  }
  return false
})

const navigateToCoinDetails = () => {
  router.push({
    name: 'CoinDetails',
    params: {
      uuid: props.coin.uuid,
    },
    query: {
      name: props.coin.name,
    },
  });
};

</script>

<style scoped>
.border-gradient {
  border-image: linear-gradient(to top, #3C354A, #8D8598);
  border-image-slice: 1;
}
</style>