<script setup lang="ts">
import RoundedButton from "./base/RoundedButton.vue";
import { useSteps } from "../composables/steps";

const { currentStep, stepComponentsLength } = useSteps();
const sideBar = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
</script>
<template>
  <div
    class="bg-sidebar-mobile md:bg-sidebar-desktop bg-cover bg-no-repeat h-52 md:h-full p-5 md:rounded-xl md:w-1/3"
  >
    <div
      class="flex space-x-6 items-center justify-center mt-10 md:flex-col md:space-x-0 md:space-y-8 md:items-start"
    >
      <RoundedButton
        v-for="(_, comp) in stepComponentsLength"
        :key="comp"
        :active="comp === currentStep"
        :step="comp + 1"
        :name="sideBar[comp]"
      />
    </div>
  </div>
</template>

<style scoped></style>
