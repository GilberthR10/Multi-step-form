import { ref, computed } from "vue";
import { defineStore } from "pinia";



export const useStepStore = defineStore("steps", () => {
  const currentStep = ref<number>(0);

  const getCurrentStep = computed<number>(() => currentStep.value);


  function setCurrentStep(step: number) {
    currentStep.value = step;
  }

  return {
    currentStep,
    getCurrentStep,
    setCurrentStep,
  };
});
