<script setup lang="ts">
import RoundedButton from './base/RoundedButton.vue'
import { useSteps } from '../composables/steps'

const { currentStep, stepComponentsLength } = useSteps()
const sideBar = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary']
</script>
<template>
  <div
    class="h-52 bg-sidebar-mobile bg-cover bg-no-repeat p-5 md:h-full md:w-1/3 md:rounded-xl md:bg-sidebar-desktop"
  >
    <div
      class="mt-10 flex items-center justify-center space-x-6 md:flex-col md:items-start md:space-x-0 md:space-y-8"
    >
      <RoundedButton
        v-for="(_, comp) in stepComponentsLength - 1"
        :key="comp"
        :active="comp === currentStep"
        :step="comp + 1"
        :name="sideBar[comp]"
      />
    </div>
  </div>
</template>
