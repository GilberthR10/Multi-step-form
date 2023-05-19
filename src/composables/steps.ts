import { useStepStore } from '../stores/step'
import { storeToRefs } from 'pinia'
import AddOns from '@/components/Steps/AddOns.vue'
import Summary from '@/components/Steps/Summary.vue'
import Thank from '@/components/Steps/Thank.vue'
import PersonalInfo from '@/components/Steps/PersonalInfo.vue'
import SelectPlan from '@/components/Steps/SelectPlan.vue'
import { computed } from 'vue'
import * as yup from 'yup'

const stepsComponents = [PersonalInfo, SelectPlan, AddOns, Summary, Thank]

export const useSteps = () => {
  const stepStore = useStepStore()
  const { currentStep } = storeToRefs(stepStore)

  const disabledPrevStep = computed(() => currentStep.value <= 0)
  const disabledNextStep = computed(
    () => currentStep.value + 1 === stepsComponents.length
  )

  const setCurrentStep = (step: number) => stepStore.setCurrentStep(step)

  const prevStep = () => {
    if (disabledPrevStep.value) return
    setCurrentStep(currentStep.value - 1)
  }

  const nextStep = () => {
    if (disabledNextStep.value) return
    setCurrentStep(currentStep.value + 1)
  }

  // break down the validation steps into multiple schemas

  const schemas = [
    yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
      phone: yup.string().required(),
    }),
    yup.object({
      plan: yup.string().oneOf(['Arcade', 'Advanced', 'Pro']).required(),
      planLength: yup.boolean(),
    }),
    yup.object({
      isOnlineService: yup.boolean(),
      isLargerStorage: yup.boolean(),
      isCustomizableProfile: yup.boolean(),
    }),
  ]

  const currentSchema = computed(() => {
    return schemas[currentStep.value]
  })

  return {
    currentStep,
    stepsComponents,
    stepComponentsLength: stepsComponents.length,
    disabledPrevStep,
    disabledNextStep,
    currentSchema,
    formData: stepStore.formData,
    prevStep,
    nextStep,
    setCurrentStep,
    updateForm: stepStore.updateForm,
  }
}
