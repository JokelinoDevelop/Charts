<template>
  <button @click="goBack"
    class="inline-flex items-center gap-3 px-4 py-2 mb-6 bg-darkBackground border-2 border-lightPurple text-white rounded-md hover:bg-cardBackround transition-all duration-300">
    <img src="@/assets/images/go-back.svg" class="w-[1.5rem]" alt="Go Back Icon">
    <span class="text-lg font-[500] tracking-wider">Go Back</span>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
