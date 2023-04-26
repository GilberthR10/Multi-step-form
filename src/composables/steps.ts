import { useStepStore } from "../stores/step";
import { storeToRefs } from "pinia";
import AddOns from "@/components/Steps/AddOns.vue";
import FinishingUp from "@/components/Steps/FinishingUp.vue";
import PersonalInfo from "@/components/Steps/PersonalInfo.vue";
import SelectPlan from "@/components/Steps/SelectPlan.vue";
import { computed } from "vue";


const stepsComponents = [PersonalInfo, SelectPlan, AddOns, FinishingUp ];

export const useSteps = () => {
  const stepStore = useStepStore();

  const { currentStep } = storeToRefs(stepStore);

  return {
    currentStep,
    stepsComponents,
    stepComponentsLength: computed(() => stepsComponents.length),
    setCurrentStep: (step: number) =>  stepStore.setCurrentStep(step),
  };
};
