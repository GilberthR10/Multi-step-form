<script setup lang="ts">
import ArcadeIcon from '@/assets/icon-arcade.svg'
import ProIcon from '@/assets/icon-pro.svg'
import advanceIcon from '@/assets/icon-advanced.svg'
import InputPlan from '../base/InputPlan.vue'
import { useField } from 'vee-validate'
import { ref } from 'vue'

const { checked, handleChange, value } = useField('planLength', undefined, {
  type: 'checkbox',
  checkedValue: true,
  uncheckedValue: false,
})
const showMonthlyOrYearlyPrices = ref<string>('monthly')

const handleChecked = () => {
  handleChange(!value.value)
  showMonthlyOrYearlyPrices.value = value.value ? 'yearly' : 'monthly'
}

interface PlanOption {
  [key: string]: {
    [key: string]: number
  }
}

const planOptions: PlanOption = {
  Arcade: {
    monthly: 9,
    yearly: 90,
  },
  Advanced: {
    monthly: 12,
    yearly: 120,
  },
  Pro: {
    monthly: 15,
    yearly: 150,
  },
  onlineServices: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
}

const promo = '2 months free'
</script>
<template>
  <div class="rounded-lg bg-white p-4 shadow-lg md:p-0 md:shadow-none">
    <div class="flex flex-col">
      <h1 class="pt-10 text-2xl font-bold text-marine-blue md:pt-0">
        Select your plan
      </h1>
      <p class="my-8 text-xl font-normal text-cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <div class="flex flex-col gap-4 md:flex-row">
        <InputPlan
          name="plan"
          value="Arcade"
          :icon="ArcadeIcon"
          plan="Arcade"
          :price="planOptions.Arcade[showMonthlyOrYearlyPrices]"
          :promo="promo"
          :yearly="value"
        />
        <InputPlan
          name="plan"
          value="Advanced"
          :icon="advanceIcon"
          plan="Advanced"
          :price="planOptions.Advanced[showMonthlyOrYearlyPrices]"
          :promo="promo"
          :yearly="value"
        />
        <InputPlan
          name="plan"
          value="Pro"
          :icon="ProIcon"
          plan="Pro"
          :price="planOptions.Pro[showMonthlyOrYearlyPrices]"
          :promo="promo"
          :yearly="value"
        />
      </div>

      <div
        class="my-5 flex justify-center space-x-6 rounded-md bg-pastel-blue/10 p-4"
      >
        <span class="font-semibold text-cool-gray">Monthly</span>
        <label for="toggle" class="flex cursor-pointer items-center">
          <!-- toggle -->
          <div class="relative">
            <!-- input -->
            <input
              @change="handleChecked"
              :checked="checked"
              name="planLength"
              type="checkbox"
              id="toggle"
              class="sr-only"
            />
            <!-- line -->
            <div class="block h-6 w-10 rounded-full bg-marine-blue"></div>
            <!-- dot -->
            <div
              class="dot absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition"
            ></div>
          </div>
        </label>
        <span class="font-semibold text-cool-gray">Yearly</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
}
</style>
