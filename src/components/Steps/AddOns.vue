<script setup lang="ts">
import InputAddons from '../base/InputAddons.vue'
</script>
<template>
  <div class="rounded-lg bg-white p-4 shadow-lg md:p-0 md:shadow-none">
    <div class="flex flex-col">
      <h1 class="pt-10 text-2xl font-bold text-marine-blue md:pt-0">
        Pick Add-ons
      </h1>
      <p class="my-6 text-xl font-normal text-cool-gray">
        Add-ons help enhance your gaming experience.
      </p>
      <div class="flex flex-col gap-3">
        <InputAddons
          name="isOnlineService"
          title="Online service"
          description="Access to multiplayer games"
          price="+$1/mo"
        />
        <InputAddons
          name="isLargerStorage"
          title="Large storage"
          description="Extra 1TB of cloud save"
          price="+$2/mo"
        />
        <InputAddons
          name="isCustomizableProfile"
          title="Customizable profile"
          description="Custom theme on you profile"
          price="+$2/mo"
        />
      </div>
    </div>
  </div>
</template>
