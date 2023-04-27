<template>
  <div class="bg-white rounded-lg p-4 md:p-0 shadow-lg md:shadow-none">
    <form class="flex flex-col">
      <h1 class="text-marine-blue font-bold text-2xl pt-10 md:pt-0">
        Personal info
      </h1>
      <p class="text-cool-gray font-normal text-xl my-4">
        Please provide your name, email address, and phone number.
      </p>

      <label class="text-marine-blue font-medium mb-1 text-sm" for="name"
        >Name</label
      >
      <input
        id="name"
        class="p-2 border rounded-md outline-none focus:border-purplish-blue text-marine-blue font-bold mb-5"
        required
        placeholder="e.g. Stephen King"
        type="text"
      />

      <label class="text-marine-blue font-medium mb-1 text-sm" for="email"
        >Email Address</label
      >
      <input
        id="email"
        class="p-2 border rounded-md outline-none focus:border-purplish-blue text-marine-blue font-bold mb-5"
        autocomplete="email"
        required
        placeholder="e.g. stephenking@lorem.com"
        type="email"
      />

      <label class="text-marine-blue font-medium text-sm" for="phone"
        >Phone Number</label
      >
      <input
        id="name"
        required
        class="p-2 border rounded-md outline-none focus:border-purplish-blue text-marine-blue font-bold mb-5"
        placeholder="e.g. +1 234 567 890"
        type="phone"
      />
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
