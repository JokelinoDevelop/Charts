<template>
  <div class="bg-background min-h-screen">
    <GlobalStats class="hidden lg:flex" />
    <Header />
    <GlobalStats class="lg:hidden" />
    <RouterView />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import GlobalStats from '@/components/GlobalStats.vue';

</script>
