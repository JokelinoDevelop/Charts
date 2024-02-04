<template>
  <div class="flex flex-col gap-4"> <!-- Quick Summary -->
    <p class="text-white font-[700] tracking-widest">Summary: <span class="font-[400] text-grayOverlay tracking-wider">{{
      coin.description
    }}</span></p>

    <p class="font-[700]">Website:<a :href="coin.websiteUrl" target=”_blank”
        class="ml-2 underline text-grayOverlay tracking-wider">{{
          coin.websiteUrl
        }}</a></p>

  </div>
</template>

<script setup>
defineProps({
  coin: {
    type: Object,
    required: true
  }
})
</script>
