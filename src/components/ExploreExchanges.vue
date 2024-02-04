<template>
  <section class="w-full py-12 md:py-24 lg:py-32 bg-veryLightPurple">
    <div
      class="bg-lightPurple/20 rounded-2xl container grid items-center justify-center gap-4 px-4 py-6 text-center mx-auto md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
      <div class="space-y-4 md:space-y-6">
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Our Exchanges</h2>
          <p
            class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover a world of trusted exchanges and comprehensive information.
          </p>
        </div>
        <div class="flex justify-center space-x-4 lg:justify-start">
          <Button
            class="bg-white text-darkBackground hover:bg-gray-100/80 border-2 border-transparent hover:border-lightPurple">See
            Exchanges</Button>
        </div>
      </div>
      <div class="sm:w-full lg:order-last rounded-full py-6">
        <img alt="Image" class="mx-auto object-video object-contain object-center" src="@/assets/images/exchanges.svg"
          width="400" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '@/components/Button.vue';
</script>

