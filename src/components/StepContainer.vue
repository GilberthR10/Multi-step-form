<script setup lang="ts">
import { ref } from "vue";
import Navigation from './Navigation.vue';
import { useSteps } from '../composables/steps';

const { currentStep, stepsComponents } = useSteps()


</script>
<template>
  <div class="border border-teal-500 px-2 w-full flex flex-col justify-between bg-magnolia md:bg-white" >

    <KeepAlive>
      <component :is="stepsComponents[currentStep]"  />
    </KeepAlive>
    <Navigation />
  </div>
</template>

/*
todo:
base input
como validar input con vue o librerias,


*/
