<template>
  <div class="relative z-[600]">
    <div v-show="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="closeMenu"></div>
    <div
      class="fixed top-0 right-0 h-full w-64 border-l-4 border-lightPurple bg-cardBackground shadow-lg z-50 p-4 transition-all duration-500"
      :class="{ '-translate-x-[0rem]': isMenuOpen, 'translate-x-[16rem]': !isMenuOpen }">
      <!-- Menu Content -->
      <div class="flex justify-start border-b-2 pb-6 ">
        <!-- Close Button (X icon) -->
        <div class="mt-1 cursor-pointer hover:scale-[1.2] transition-all duration-300" @click="closeMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
      </div>
      <!-- Menu Items -->
      <div class="flex justify-end text-right text-xl">
        <div class="mt-4 flex flex-col gap-6">
          <router-link to="/" class="nav-link" @click.prevent="closeMenu">Home</router-link>
          <router-link to="/coins" class="nav-link" @click.prevent="closeMenu">Cryptocurrencies</router-link>
          <router-link to="/favorites" class="nav-link" @click.prevent="closeMenu">Favorites</router-link>
          <router-link to="/contact" class="nav-link" @click.prevent="closeMenu">Contact</router-link>
        </div>
      </div>
    </div>
  </div>


  <!-- Hamburger Menu -->
  <div class="hover:scale-[1.2] transition-all duration-300 cursor-pointer z-50" @click="toggleMenu">
    <svg class="w-6 h-6 duration-300 transform" :class="{ 'rotate-180': isMenuOpen }" fill="none" stroke="currentColor"
      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </div>
</template>

<script setup>
import { useMenuStore } from '@/stores/menuStore.js';
import { storeToRefs } from 'pinia';

const store = useMenuStore();
const { closeMenu, toggleMenu } = store;
const { isMenuOpen } = storeToRefs(store);
</script>
