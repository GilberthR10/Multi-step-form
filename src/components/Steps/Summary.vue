<script setup lang="ts">
import { useSteps } from '@/composables/steps'
import { computed, ref } from 'vue'
const { formData, setCurrentStep } = useSteps()

const typePlan = computed(() => {
  return formData.planLength === true ? 'yearly' : 'monthly'
})

const TABLEPRICE = {
  yearly: {
    Arcade: 90,
    Advanced: 120,
    Pro: 150,
  },
  monthly: {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  },
}

const price = TABLEPRICE[typePlan.value][formData.plan]

const sum = 0
const total = computed(() => {
  const { isOnlineService, isLargerStorage, isCustomizableProfile } = formData

  return (
    sum +
    (isOnlineService ? 1 : 0) +
    (isLargerStorage ? 2 : 0) +
    (isCustomizableProfile ? 2 : 0) +
    price
  )
})

const yearOrMonth = `${formData.planLength ? 'yr' : 'mo'}`

const onChangePlan = () => {
  setCurrentStep(1)
}
</script>
<template>
  <div class="rounded-lg bg-white p-4 shadow-lg md:p-0 md:shadow-none">
    <div class="flex flex-col p-2">
      <h1 class="pt-10 text-2xl font-bold text-marine-blue md:pt-0">
        Finishing up
      </h1>
      <p class="my-8 text-xl font-normal text-cool-gray">
        Double-check everything looks OK before confirming.
      </p>
      <div
        class="flex flex-col space-y-8 rounded-md bg-alabaster p-6 shadow-sm"
      >
        <div class="flex items-center justify-between text-marine-blue">
          <div class="flex flex-col font-bold">
            <span class=""
              >{{ formData.plan }}
              {{ formData.planLength ? '(Yearly)' : '(Monthly)' }}
            </span>
            <span
              @click="onChangePlan"
              class="cursor-pointer text-sm text-cool-gray/60 underline hover:text-purplish-blue"
              >Change</span
            >
          </div>
          <span class="font-bold text-marine-blue/90"
            >$ {{ `${price}/${yearOrMonth}` }}</span
          >
        </div>

        <div class="flex flex-col space-y-4 font-medium text-cool-gray">
          <div class="border-t border-cool-gray/20"></div>
          <div v-if="formData.isOnlineService" class="flex justify-between">
            <span class="">Online service</span>
            <span class="text-marine-blue text-marine-blue/90">+$1/mo</span>
          </div>
          <div v-if="formData.isLargerStorage" class="flex justify-between">
            <span class="">Larger storage</span>
            <span class="text-marine-blue text-marine-blue/90">+$2/mo</span>
          </div>
          <div
            v-if="formData.isCustomizableProfile"
            class="flex justify-between"
          >
            <span class="">Customizable profile</span>
            <span class="text-marine-blue text-marine-blue/90">+$2/mo</span>
          </div>
        </div>
      </div>

      <div class="mt-5 flex justify-between px-6">
        <span class="text-cool-gray"
          >Total per {{ `${formData.planLength ? 'year' : 'month'} ` }}</span
        >
        <span class="text-xl font-bold text-purplish-blue"
          >+${{ total }}/{{ yearOrMonth }}</span
        >
      </div>
    </div>
  </div>
</template>
