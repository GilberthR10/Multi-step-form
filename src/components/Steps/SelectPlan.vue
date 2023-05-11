<script setup lang="ts">
import ArcadeIcon from "@/assets/icon-arcade.svg";
import ProIcon from "@/assets/icon-pro.svg";
import advanceIcon from "@/assets/icon-advanced.svg";
import InputPlan from "../base/InputPlan.vue";
import { useField } from "vee-validate";
import { ref } from "vue";

const { checked, handleChange, value } = useField("planLength", undefined, {
  type: "checkbox",
  checkedValue: true,
  uncheckedValue: false,
});
const showYearlyContent = ref<string>("monthly");
const yearlyContent = ref<boolean>(false);

const handleChecked = () => {
  handleChange(!value.value);
  showYearlyContent.value = value.value ? "yearly" : "monthly";
  yearlyContent.value = value.value
};

interface PlanOption {
  [key: string]: {
    [key: string]: number;
  };
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
};

const promo = "2 months free"
</script>
<template>
  <div class="bg-white rounded-lg p-4 md:p-0 shadow-lg md:shadow-none">
    <div class="flex flex-col">
      <h1 class="text-marine-blue font-bold text-2xl pt-10 md:pt-0">
        Select your plan
      </h1>
      <p class="text-cool-gray font-normal text-xl my-8">
        You have the option of monthly or yearly billing.
      </p>
      <div class="flex flex-col gap-4 md:flex-row">
        <InputPlan
          name="plan"
          value="Arcade"
          :icon="ArcadeIcon"
          plan="Arcade"
          :price="planOptions.Arcade[showYearlyContent]"
          :promo="promo"
          :yearly="yearlyContent"
        />
        <InputPlan
          name="plan"
          value="Advance"
          :icon="advanceIcon"
          plan="Advance"
          :price="planOptions.Advanced[showYearlyContent]"
          :promo="promo"
          :yearly="yearlyContent"
        />
        <InputPlan
          name="plan"
          value="Pro"
          :icon="ProIcon"
          plan="Pro"
          :price="planOptions.Pro[showYearlyContent]"
          :promo="promo"
          :yearly="yearlyContent"
        />
      </div>

      <div
        class="bg-pastel-blue/10 p-4 my-5 rounded-md flex justify-center space-x-6"
      >
        <span class="text-cool-gray font-semibold">Monthly</span>
        <label for="toggle" class="flex items-center cursor-pointer">
          <!-- toggle -->
          <div class="relative">
            <!-- input -->
            <input
              @change="handleChecked"
              name="planLength"
              type="checkbox"
              id="toggle"
              class="sr-only"
            />
            <!-- line -->
            <div class="block bg-marine-blue w-10 h-6 rounded-full"></div>
            <!-- dot -->
            <div
              class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"
            ></div>
          </div>
        </label>
        <span class="text-cool-gray font-semibold">Yearly</span>
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
