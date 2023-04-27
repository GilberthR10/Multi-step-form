<script setup lang="ts">
import Navigation from "./Navigation.vue";
import { useSteps } from "../composables/steps";

const { currentStep, stepsComponents } = useSteps();
</script>
<template>
  <div
    class="w-full flex flex-col justify-between md:bg-white h-full md:p-4"
  >
    <KeepAlive>
      <div class="absolute inset-4 mt-28 md:mt-0 max-w-6xl mx-auto md:static">
        <component :is="stepsComponents[currentStep]" />
      </div>
    </KeepAlive>
    <Navigation />
  </div>
</template>

/* todo:
 componente para step > slot para formulario
 base input
 como validar input con vue o librerias,

  */
