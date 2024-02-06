<template>
  <main class="flex flex-col items-center justify-center min-h-screen bg-veryLightPurple py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="text-center text-4xl font-[700] text-gray-900">Contact Us</h2>
        <p class="mt-2 text-center text-lg text-gray-600 dark:text-gray-400">
          Please fill out the form below and we will get back to you as soon as possible.
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent>
        <div class="rounded-md shadow-sm flex flex-col gap-3 -space-y-px">
          <div>
            <label>Name</label>
            <input
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-darkPurple focus:border-indigo-500 focus:z-10 sm:text-sm"
              id="name" name="name" required type="text" />
          </div>
          <div>
            <label>Email address</label>
            <input autoComplete="email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-darkPurple focus:border-indigo-500 focus:z-10 sm:text-sm"
              id="email-address" name="email" required type="email" />
          </div>
          <div>
            <label>Subject</label>
            <input
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-darkPurple focus:border-indigo-500 focus:z-10 sm:text-sm"
              id="subject" name="subject" required type="text" />
          </div>
          <div>
            <label>Message</label>
            <textarea
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-darkPurple focus:border-indigo-500 focus:z-10 sm:text-sm"
              id="message" name="message" required />
          </div>
        </div>
        <div>
          <Button
            class="bg-darkBackground text-white hover:bg-darkBackground/80 border-2 border-transparent hover:border-lightPurple">
            <span>Submit</span>
          </Button>
        </div>
      </form>
      <div class="mt-8 text-sm text-center text-gray-500 font-[500]">
        <p>Or reach us directly at:</p>
        <p>Email: contact@acme.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Acme St, San Francisco, CA, USA</p>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import Button from '@/components/Button.vue'
import Footer from '@/components/Footer.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

</script>
