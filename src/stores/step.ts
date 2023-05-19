import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useStepStore = defineStore('steps', () => {
  const currentStep = ref<number>(0)
  const formData = reactive<FormItems>({
    name: '',
    email: '',
    phone: '',
    plan: 'Arcade',
    planLength: false,
    isLargerStorage: false,
    isCustomizableProfile: false,
    isOnlineService: false,
  })

  function setCurrentStep(step: number) {
    currentStep.value = step
  }
  type FormItems = {
    name: string
    email: string
    phone: string
    plan: 'Arcade' | 'Advanced' | 'Pro'
    planLength: boolean
    isLargerStorage: boolean
    isCustomizableProfile: boolean
    isOnlineService: boolean
  }

  const updateForm = (fieldToUpdate: Partial<FormItems>) => {
    Object.assign(formData, fieldToUpdate)
  }

  return {
    currentStep,
    formData,
    setCurrentStep,
    updateForm,
  }
})
