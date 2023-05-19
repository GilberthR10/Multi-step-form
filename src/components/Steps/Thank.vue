<script setup lang="ts">
import thanks from '@/assets/icon-thank-you.svg'
</script>

<template>
  <div class="rounded-lg bg-white p-8 shadow-lg md:p-0 md:shadow-none">
    <div class="flex flex-col items-center space-y-6">
      <div class="">
        <img :src="thanks" alt="thanks" />
      </div>
      <h1 class="text-3xl font-bold text-marine-blue">Thank you!</h1>
      <p class="text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  </div>
</template>
