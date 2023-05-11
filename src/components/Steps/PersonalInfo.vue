<script setup lang="ts">
import BaseInput from '../base/BaseInput.vue';


</script>
<template>
  <div class="bg-white rounded-lg p-4 md:p-0 shadow-lg md:shadow-none">
    <div class="flex flex-col">
      <h1 class="text-marine-blue font-bold text-2xl pt-10 md:pt-0">
        Personal info
      </h1>
      <p class="text-cool-gray font-normal text-xl my-4">
        Please provide your name, email address, and phone number.
      </p>

      <BaseInput name="name" type="text" placeholder="e.g. Stephen King" label="Name" />

      <BaseInput name="email" type="email" placeholder="e.g. stephenking@lorem.com" label="Email Address" />

      <BaseInput name="phone" type="text" placeholder="e.g. +1 234 567 890" label="Phone Number" />

    </div>
  </div>
</template>
