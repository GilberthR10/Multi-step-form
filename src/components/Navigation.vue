<script setup lang="ts">
import { useSteps } from '@/composables/steps'
import { computed } from 'vue'

const {
  prevStep,
  disabledNextStep,
  disabledPrevStep,
  currentStep,
  stepComponentsLength,
} = useSteps()

const showConfirm = computed(() => currentStep.value === 3)
</script>
<template>
  <div
    class="fixed inset-0 top-auto flex w-full items-center justify-between bg-white px-2.5 py-5 shadow-md md:absolute md:px-1.5 md:shadow-none"
  >
    <button
      type="button"
      v-show="!disabledPrevStep"
      @click="prevStep"
      class="rounded-md px-5 py-2.5 font-bold text-cool-gray"
    >
      Go Back
    </button>
    <button
      type="submit"
      v-show="!disabledNextStep"
      class="ml-auto rounded-md bg-marine-blue px-5 py-2.5 font-bold text-white md:mr-2.5"
      :class="{ 'bg-purplish-blue': showConfirm }"
    >
      {{ showConfirm ? 'Confirm' : 'Next Step' }}
    </button>
  </div>
</template>
