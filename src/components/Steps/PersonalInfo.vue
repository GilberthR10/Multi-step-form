<script setup lang="ts">
import BaseInput from '../base/BaseInput.vue'
</script>
<template>
  <div class="rounded-lg bg-white p-4 shadow-lg md:p-0 md:shadow-none">
    <div class="flex flex-col">
      <h1 class="pt-10 text-2xl font-bold text-marine-blue md:pt-0">
        Personal info
      </h1>
      <p class="my-4 text-xl font-normal text-cool-gray">
        Please provide your name, email address, and phone number.
      </p>

      <BaseInput
        name="name"
        type="text"
        placeholder="e.g. Stephen King"
        label="Name"
      />

      <BaseInput
        name="email"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        label="Email Address"
      />

      <BaseInput
        name="phone"
        type="text"
        placeholder="e.g. +1 234 567 890"
        label="Phone Number"
      />
    </div>
  </div>
</template>
