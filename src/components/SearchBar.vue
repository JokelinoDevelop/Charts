<template>
  <div class="mx-6 max-w-[30rem] relative z-[500] mb-10">
    <div class="text-grayOverlay flex gap-4 max-w-[30rem] relative z-[50]">
      <span class="absolute right-6 -translate-y-1/2 top-1/2" :class="{ 'hidden': isInputFocused }">
        <img src="@/assets/images/search-icon.svg" alt="" class="w-[2rem]">
      </span>
      <input type="text"
        class="w-full text-xl bg-darkBackground py-3 rounded-full px-6 outline-none border-2 border-transparent focus:border-grayOverlay transition-all duration-200"
        placeholder="Search" @focus="handleInputFocus" @blur="handleInputBlur" @input="debouncedFilterCoins(inputValue)"
        v-model="inputValue" />
    </div>

    <template v-if="inputValue">
      <div v-if="coins && coins.length > 0">
        <div
          class="bg-darkBackground translate-y-[1rem] absolute max-w-[30rem] w-full grid gap-2 py-4 border-2 border-lightPurple">
          <div v-for="coin in coins" :key="coin.uuid">
            <RouterLink :to="{
              name: 'CoinDetails',
              params: {
                uuid: coin.uuid,
              },
              query: {
                name: coin.name,
              },
            }">
              <CoinSearch :name="coin.name" :price="coin.price" :symbol="coin.symbol" :icon="coin.iconUrl" />
            </RouterLink>

          </div>
        </div>
      </div>
      <div v-else-if="loading"
        class="h-[4rem] translate-y-[1rem] flex absolute w-full justify-center items-center bg-darkBackground border-2 border-lightPurple">
        <!-- Display loading spinner or message while fetching data -->
        <FwbSpinner color="purple" size="8" />
      </div>
      <div v-else
        class="h-[4rem] translate-y-[1rem] flex absolute w-full justify-center items-center bg-darkBackground  border-2 border-lightPurple">
        <!-- Display a message when no coins are found -->
        <p class="text-white font-[700]">No coins found.</p>
      </div>
    </template>



  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { fetchCoinsBySearch } from '@/services/ApiService.js'
import CoinSearch from '@/components/CoinSearch.vue';
import { FwbSpinner } from 'flowbite-vue'

const loading = ref(false)

const inputValue = ref(null)

const coins = ref(null)

const isInputFocused = ref(false);

const handleInputFocus = () => {
  isInputFocused.value = true;
};

const handleInputBlur = () => {
  isInputFocused.value = false;
};


const debouncedFilterCoins = useDebounceFn((value) => {
  filterCoins(value)
}, 250)

const filterCoins = async (value) => {
  if (value == '') {
    coins.value = null
    return
  }
  coins.value = null
  try {
    loading.value = true
    const response = await fetchCoinsBySearch(value);
    coins.value = response.data.coins;
    console.log(coins.value)
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};


</script>
