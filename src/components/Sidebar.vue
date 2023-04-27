<script setup lang="ts">
import RoundedButton from "./base/RoundedButton.vue";
import { useSteps } from "../composables/steps";

const { currentStep, stepsComponents, setCurrentStep } = useSteps();
</script>
<template>
  <div
    class="bg-sidebar-mobile md:bg-sidebar-desktop bg-cover bg-no-repeat h-52 md:h-full p-5 md:rounded-xl"
  >
    <div
      class="flex space-x-6 items-center justify-center mt-10 md:flex-col md:space-x-0 md:space-y-8 md:items-start"
    >
      <RoundedButton
        v-for="(i, comp) in stepsComponents"
        :key="comp"
        :active="comp === currentStep"
        :step="comp + 1"
        @click="setCurrentStep(comp)"
      />
    </div>
  </div>
</template>

<style scoped></style>
