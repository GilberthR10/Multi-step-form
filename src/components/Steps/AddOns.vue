<script setup lang="ts">
import InputAddons from "../base/InputAddons.vue";
</script>
<template>
  <div class="bg-white rounded-lg p-4 md:p-0 shadow-lg md:shadow-none">
    <div class="flex flex-col">
      <h1 class="text-marine-blue font-bold text-2xl pt-10 md:pt-0">
        Pick Add-ons
      </h1>
      <p class="text-cool-gray font-normal text-xl my-6">
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
