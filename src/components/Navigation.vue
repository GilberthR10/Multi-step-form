<script setup lang="ts">
import { useSteps } from "@/composables/steps";

const { prevStep, disabledNextStep, disabledPrevStep } = useSteps();



</script>
<template>
  <div class="bg-white w-full flex justify-between items-center px-2.5 py-5 fixed inset-0 top-auto shadow-md md:shadow-none md:absolute md:px-1.5">
    <button
      type="button"
      v-show="!disabledPrevStep"
      @click="prevStep"
      class="px-5 py-2.5 font-bold rounded-md text-cool-gray"
    >
      Go Back
    </button>
    <button
      type="submit"
      v-show="!disabledNextStep"
      class="px-5 py-2.5 bg-marine-blue font-bold rounded-md text-white ml-auto md:mr-2.5"
    >
      Next Step
    </button>
    <button
      type="submit"
      v-show="disabledNextStep"
      class="px-5 py-2.5 bg-purplish-blue font-medium rounded-md text-white ml-auto md:mr-2.5"
    >
      Confirm
    </button>
  </div>
</template>
