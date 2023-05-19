<script setup lang="ts">
import Navigation from './Navigation.vue'
import { useSteps } from '../composables/steps'
import { Form } from 'vee-validate'
import { computed } from 'vue'

const {
  currentStep,
  stepComponentsLength,
  stepsComponents,
  formData,
  currentSchema,
  nextStep,
  updateForm,
} = useSteps()

function handleSubmit(values: any) {
  updateForm(values)
  nextStep()
}

const showNavigation = computed(
  () => currentStep.value + 1 === stepComponentsLength
)
</script>
<template>
  <Form
    :validation-schema="currentSchema"
    keep-values
    :initial-values="formData"
    @submit="handleSubmit"
    class="flex h-full w-full flex-col justify-between md:bg-white md:py-10"
  >
    <div class="absolute inset-4 mt-28 md:static md:mt-0 md:max-w-xl">
      <Transition
        mode="out-in"
        enter-from-class="opacity-0"
        enter-leave-class="opacity-100"
        enter-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        leave-active-class="transition-opacity duration-300"
      >
        <component :is="stepsComponents[currentStep]" />
      </Transition>
      <Navigation
        class="md:mx-auto md:max-w-xl md:px-12"
        v-if="!showNavigation"
      />
    </div>
  </Form>
</template>
