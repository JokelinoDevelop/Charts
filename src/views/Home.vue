<template>
  <LandingPage />

  <Features />

  <ExploreExchanges />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import LandingPage from '@/components/LandingPage.vue';
import Features from '@/components/Features.vue'
import { FwbSpinner } from 'flowbite-vue'

const ExploreExchanges = defineAsyncComponent({
  loader: () => import('@/components/ExploreExchanges.vue'),
  loadingComponent: FwbSpinner,
  delay: 700
}
)

</script>


