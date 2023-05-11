<script setup lang="ts">
import Navigation from "./Navigation.vue";
import { useSteps } from "../composables/steps";
import { Form } from "vee-validate";
import { reactive, ref } from 'vue';

const { currentStep, stepsComponents, nextStep, currentSchema, updateForm, formData } = useSteps();


function handleSubmit(values: any) {
  updateForm(values)
  nextStep()
}


</script>
<template>
    <Form
    :validation-schema="currentSchema"
    keep-values
    :initial-values="formData"
    @submit="handleSubmit"
    class="w-full flex flex-col justify-between md:bg-white h-full md:py-10"
  >
    <div class="absolute inset-4 mt-28 md:mt-0 md:max-w-xl md:static">

      <KeepAlive>
        <component :is="stepsComponents[currentStep]"  />
      </KeepAlive>
      
      <Navigation class="md:max-w-xl md:mx-auto md:px-12"/>
    </div>
  </Form>

</template>
