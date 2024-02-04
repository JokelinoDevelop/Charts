<template>
  <div class="mx-6 max-w-[30rem] relative z-[500] mb-10">
    <div class="text-grayOverlay flex gap-4 max-w-[30rem] relative z-[50]">
      <span class="absolute right-6 -translate-y-1/2 top-1/2" :class="{ 'hidden': isInputFocused }">
        <img src="@/assets/images/search-icon.svg" alt="" class="w-[2rem]">
      </span>
      <input type="text"
        class="w-full text-xl bg-darkBackground py-3 rounded-full px-6 outline-none border-2 border-transparent focus:border-grayOverlay transition-all duration-200"
        placeholder="Search" @focus="handleInputFocus" @blur="handleInputBlur"
        @input="debouncedFilterCoins($event.target.value)" />
    </div>
    <!-- <Suspense>
      <template #default>
        <div class="bg-red-500 min-h-[6.5rem] -translate-y-6 w-full absolute flex justify-center items-center">
          <div v-for="coin in coins" :key="coin.uuid">
            {{ coin }}
          </div>
        </div>
      </template>

      <template #fallback>
        <div class="bg-red-500 min-h-[6.5rem] -translate-y-6 w-full absolute flex justify-center items-center">
          <FwbSpinner color="purple" size="8" class="mt-4" />
        </div>
      </template>
    </Suspense> -->

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { FwbSpinner } from 'flowbite-vue';
import { fetchCoinsBySearch } from '@/services/ApiService.js'

const loading = ref(true)

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
