<template>
  <div class="bg-background">
    <div v-if="loading" class="flex justify-center items-center h-screen overflow-y-hidden">
      <FwbSpinner color="purple" size="12" />
    </div>
    <div v-else-if="coin" class="min-h-screen text-white pt-6 px-5">

      <GoBackButton />

      <div class="flex items-center justify-between">
        <div class="flex items-center mx-auto sm:mx-0 sm:justify-start gap-2 sm:gap-4 ">
          <div class="max-w-[2.5rem]">
            <img :src="coin.iconUrl" alt="">
          </div>
          <p class="text-lg sm:text-xl">{{ coin.name }}</p>
          <p>{{ coin.symbol }}</p>

          <div class="hidden sm:block border px-3 bg-darkBackground rounded-full">
            <p class="text-sm text-white font-[700]"># {{ coin.rank }}</p>
          </div>
        </div>

        <p class="hidden sm:block text-md sm:text-xl font-[500]" :key="coin.price"
          :class="{ 'price-increased': priceIncreased, 'price-decreased ': !priceIncreased }">
          $ {{
            formatPrice(coin.price) }}
        </p>

      </div>
      <div class="sm:hidden flex items-center justify-center gap-3  mt-4">
        <div class="border px-3 bg-darkBackground rounded-full">
          <p class="text-sm text-white font-[700]"># {{ coin.rank }}</p>
        </div>
        <p class="text-md sm:text-xl font-[500]" :key="coin.price"
          :class="{ 'price-increased': priceIncreased, 'price-decreased ': !priceIncreased }">
          $ {{
            formatPrice(coin.price) }}
        </p>
      </div>


      <hr class="my-4 border border-lightPurple">

      <CoinSummary :coin="coin" />

      <hr class="my-4 border border-lightPurple">

      <div class="lg:grid lg:grid-cols-7"> <!-- Wrapper of All Coin Details-->
        <div v-if="priceHistory" class="lg:col-start-1 lg:col-end-5 lg:pr-8">
          <div>
            <div class="flex justify-between">
              <span class="text-lg font-[500]">$ {{ formatPrice(max) }}</span>
              <div class="flex items-center gap-2 lg:mt-3"
                :class="{ 'text-green-500': checkChange, 'text-red-500': !checkChange }">
                <img :src="checkChange ? greenArrow : redArrow" alt="" class=" w-[1.5rem]">
                <p>
                  {{ Math.abs(priceHistory.change) }}%
                </p>
              </div>
            </div>
            <Line :data='chartData' :options="options" />
            <span class="text-lg font-[500]">$ {{ formatPrice(min) }}</span>
          </div>

          <div
            class="flex flex-wrap sm:flex-nowrap justify-center mx-auto max-w-[28rem] items-center sm:justify-between gap-2 px-2 lg:px-6 py-2 mt-4 bg-cardBackground rounded-xl border border-lightPurple transition-all duration-300">
            <button v-for="period in periods" :key="period" :value='period'
              class="cursor-pointer px-2 hover:bg-darkPurple rounded-lg transition-all duration-300"
              :class="{ 'bg-lightPurple': initialFocus === period }" @click="fetchNewPriceByPeriod($event.target.value)">
              {{ period }}
            </button>
          </div>
        </div>

        <hr class="my-4 border border-lightPurple lg:hidden ">

        <div class="lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-3 lg:px-6">
          <CoinStatistics :coin="coin" />
        </div>




      </div>
      <hr class="my-4 border border-lightPurple">
      <CoinSupply :coin="coin" />

    </div>

  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, watchEffect, computed, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { fetchCoin, fetchCoinPrice, fetchCoinPriceHistory, fetchCoinPriceHistoryTime } from '@/services/ApiService.js'
import { formatPrice, formatTimestampChart } from '@/services/utilityFunctions.js'
import { options } from '@/services/chartOptions.js'
import CoinSummary from '@/components/CoinSummary.vue'
import CoinStatistics from '@/components/CoinStatistics.vue'
import CoinSupply from '@/components/CoinSupply.vue'
import GoBackButton from '@/components/GoBackButton.vue'
import greenArrow from '@/assets/images/up-green-arrow.svg'
import redArrow from '@/assets/images/down-red-arrow.svg'
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
import { FwbSpinner } from 'flowbite-vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

const route = useRoute()

const coin = ref(null)
const priceHistory = ref(null)
const loading = ref(true)
const periods = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];
const initialFocus = ref('24h')
const coinPrice = ref(null)
const priceIncreased = ref(null)
const updateIntervalCoinPrice = ref(null)
const updateIntervalChartValues = ref(null)

onBeforeMount(async () => {
  try {
    const [coinResponse, priceHistoryResponse] = await Promise.all([
      fetchCoin(route.params.uuid),
      fetchCoinPriceHistory(route.params.uuid),
    ]);

    priceHistory.value = priceHistoryResponse.data
    coin.value = coinResponse.data.coin;

    updateIntervalCoinPrice.value = setInterval(async () => {
      try {
        const response = await fetchCoinPrice(route.params.uuid)
        coinPrice.value = response.data.price
        priceIncreased.value = coinPrice.value > coin.value.price ? true : false
        if (coin.value.price !== coinPrice.value) {
          coin.value.price = coinPrice.value
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, 10000);

    updateIntervalChartValues.value = setInterval(async () => {
      try {
        const response = await fetchCoinPriceHistoryTime(route.params.uuid, initialFocus.value)
        priceHistory.value = response.data
        updateChart()
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, 15000);

  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
});

onBeforeUnmount(() => {
  clearInterval(updateIntervalCoinPrice.value);
  clearInterval(updateIntervalChartValues.value)
});
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

let chartData = ref(null)
let max = null
let min = null
let sparklineValues = null
let sparklineLabels = null

async function fetchNewPriceByPeriod(period) {
  try {
    const response = await fetchCoinPriceHistoryTime(route.params.uuid, period)
    priceHistory.value = response.data
    initialFocus.value = period
    updateChart()
  } catch (error) {
    console.error(error)
  }
}

function updateChart() {
  //I'm doing the filtering, because the api has a problem for the 3y and 5y fetch, the max and min are shown as NaN
  sparklineValues = priceHistory.value.history.map(item => parseFloat(item.price)).reverse().filter(value => !isNaN(value));
  sparklineLabels = priceHistory.value.history.map(item => formatTimestampChart(item.timestamp)).reverse();

  max = Math.max(...sparklineValues)
  min = Math.min(...sparklineValues)

  chartData.value = {
    labels: sparklineLabels,
    datasets: [
      {
        label: coin.value.name,
        backgroundColor: '#FFFFFF',
        borderColor: '#B783EB',
        borderWidth: 1,
        pointRadius: 1,
        data: sparklineValues,
      },
    ],
  };
}

watchEffect(() => {
  if (priceHistory.value !== null &&
    priceHistory.value !== undefined &&
    Array.isArray(priceHistory.value.history)) {
    updateChart()
  }
});

const checkChange = computed(() => {
  if (parseFloat(priceHistory.value.change) >= 0) {
    return true
  }
  return false
})

</script>



