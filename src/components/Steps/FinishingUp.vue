<script setup lang="ts">
import { useStepStore } from "@/stores/step";
const { formData } = useStepStore();
</script>
<template>
  <div class="bg-white rounded-lg p-4 md:p-0 shadow-lg md:shadow-none">
    <div class="flex flex-col p-2">
      <h1 class="text-marine-blue font-bold text-2xl pt-10 md:pt-0">
        Finishing up
      </h1>
      <p class="text-cool-gray font-normal text-xl my-8">
        Double-check everything looks OK before confirming.
      </p>
      <div
        class="flex flex-col bg-alabaster rounded-md shadow-sm p-6 space-y-8"
      >
        <div class="flex justify-between items-center text-marine-blue">
          <div class="flex flex-col font-bold">
            <span class="">Arcade (Monthly)</span>
            <span
              class="underline text-cool-gray/60 hover:text-purplish-blue cursor-pointer text-sm"
              >Change</span
            >
          </div>
          <span class="font-bold text-marine-blue/90">$9/mo</span>
        </div>

        <div class="flex flex-col space-y-4 text-cool-gray font-medium">
          <div class="border-t border-cool-gray/20"></div>
          <div v-if="formData.isOnlineService" class="flex justify-between">
            <span class="">Online service</span>
            <span class="text-marine-blue text-marine-blue/90">+$1/mo</span>
          </div>
          <div v-if="formData.isLargerStorage" class="flex justify-between">
            <span class="">Larger storage</span>
            <span class="text-marine-blue text-marine-blue/90">+$2/mo</span>
          </div>
          <div
            v-if="formData.isCustomizableProfile"
            class="flex justify-between"
          >
            <span class="">Customizable profile</span>
            <span class="text-marine-blue text-marine-blue/90">+$2/mo</span>
          </div>
        </div>
      </div>

      <div class="mt-5 flex justify-between px-6">
        <span class="text-cool-gray">Total (per month)</span>
        <span class="text-xl font-bold text-purplish-blue">+$12/mo</span>
      </div>
    </div>
  </div>
</template>
