<template>
  <footer class="bg-darkPurple border-t-2  text-white shadow">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex items-center justify-center sm:justify-start mb-6 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src="@/assets/images/logo.svg" class="h-8" alt="Crypto Listings Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap">Crypto Listings</span>
        </div>
        <ul class="flex flex-wrap justify-center items-center gap-8">
          <li>
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li>
            <router-link to="/coins" class="nav-link">Cryptocurrencies</router-link>
          </li>
          <li>
            <router-link to="/exchanges" class="nav-link">Exchanges</router-link>
          </li>
          <li>
            <router-link to="/news" class="nav-link">News</router-link>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-center">© 2024 <a href="#" class="hover:underline">Crypto
          Listings™</a>.
        All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script setup>

</script>
