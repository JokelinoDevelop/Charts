<template>
  <section class="w-full py-12 md:py-24 lg:py-32 bg-cardBackground text-white dark:bg-gray-800">
    <div class="container px-4 mx-auto md:px-6">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="space-y-2">
          <div class="inline-block rounded-lg bg-lightPurple px-4 py-1 text-sm dark:bg-gray-800">
            New Features
          </div>
          <h2 class="text-3xl font-bold tracking-tighter md:text-4xl">Faster iteration. More innovation.</h2>
          <p
            class="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore the powerful features that make our crypto listings platform stand out.
          </p>
        </div>
      </div>
      <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
        <div class="sm:w-full lg:order-last bg-veryLightPurple rounded-full py-6">
          <img alt="Image" class="mx-auto aspect-video overflow-hidden object-cover object-center" height="310"
            src="@/assets/images/crypto-portfolio.svg" width="550" />
        </div>

        <div class="flex flex-col justify-center space-y-4">
          <ul class="grid gap-6">
            <li>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold">Comprehensive Listings</h3>
                <p class="text-gray-300 dark:text-gray-400">
                  Access a vast array of cryptocurrencies with detailed information and real-time updates.
                </p>
              </div>
            </li>
            <li>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold">Advanced Analytics</h3>
                <p class="text-gray-300 dark:text-gray-400">
                  Utilize powerful analytics tools to track market trends, historical data, and price movements.
                </p>
              </div>
            </li>
            <li>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold">User-Friendly Interface</h3>
                <p class="text-gray-300 dark:text-gray-400">
                  Enjoy a seamless experience with our intuitive and user-friendly platform design.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

