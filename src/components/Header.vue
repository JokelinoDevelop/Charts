<template>
  <div
    class="justify-between p-4 text-[1.1rem] bg-background text-center text-white border-b-4 border-lightPurple flex items-center">
    <div class="flex items-center gap-6">
      <router-link to="/">
        <div class="cursor-pointer">
          <img src="@/assets/images/logo.svg" class="w-[2rem]" alt="">
        </div>
      </router-link>


      <h1 class="font-[700] tracking-wider">Crypto Listings</h1>
    </div>

    <div class="hidden lg:block">
      <DesktopMenu />
    </div>

    <div class="lg:hidden flex gap-3 items-center">
      <RouterLink :to="{ name: 'Favorites' }" class="cursor-pointer relative">
        <img src="/heart-regular.svg" class="w-[1.5rem]">
      </RouterLink>

      <MobileMenu />
    </div>


  </div>
</template>

<script setup>
import MobileMenu from '@/components/MobileMenu.vue'
import DesktopMenu from '@/components/DesktopMenu.vue'

</script>