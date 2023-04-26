<script setup lang="ts">
import { useSteps } from "@/composables/steps";
import { ref, computed } from "vue";

const { currentStep, setCurrentStep, stepComponentsLength } = useSteps();


const disabledPrevStep = computed(() => currentStep.value > 0);

const disabledNextStep = computed(
  () => currentStep.value + 1 === stepComponentsLength.value
);

const prevStep = () => {
  if (!disabledPrevStep.value) return;
  setCurrentStep(currentStep.value - 1);
};
const nextStep = () => {
  if (disabledNextStep.value) return;
  setCurrentStep(currentStep.value + 1);
};
</script>
<template>
  <div class="bg-white w-full flex justify-between items-center p-2">
    <button
      v-show="disabledPrevStep"
      @click="prevStep"
      class="px-5 py-2.5 font-bold rounded-md text-cool-gray"
    >
      Go Back
    </button>
    <button
      v-show="!disabledNextStep"
      @click="nextStep"
      class="px-5 py-2.5 bg-marine-blue font-bold rounded-md text-white ml-auto"
    >
      Next Step
    </button>
  </div>
</template>
