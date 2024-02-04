<template>
  <div>
    <section class="bg-veryLightPurple w-full min-h-full py-12 md:py-24 lg:py-32">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img alt="Landing Page"
            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550" src="@/assets/images/landing-page-image.webp" width="550" />
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-2">
              <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Explore the World of Cryptocurrencies
              </h1>
              <p class="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Empower your team with the tools to navigate the crypto landscape. Seamlessly discover, analyze, and track
                a diverse range of cryptocurrencies for informed decision-making.
              </p>
            </div>
            <div class="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                class="bg-darkBackground text-white hover:bg-darkBackground/80 border-2 border-transparent hover:border-lightPurple">
                <span>
                  Get Started
                </span>
              </Button>

              <Button
                class="bg-white text-darkBackground hover:bg-gray-100/80 border-2 border-transparent hover:border-lightPurple">
                <span>Contact Us</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import Button from '@/components/Button.vue';
</script>
