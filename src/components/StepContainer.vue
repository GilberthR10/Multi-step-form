<script setup lang="ts">
import Navigation from './Navigation.vue';
import { useSteps } from '../composables/steps';

const { currentStep, stepsComponents } = useSteps()


</script>
<template>
  <div class="border border-teal-500 px-2 w-full flex flex-col justify-between bg-magnolia md:bg-white " >

    <KeepAlive>
      <component :is="stepsComponents[currentStep]"  />
    </KeepAlive>
    <Navigation />
  </div>
</template>

/*
todo:
 --Navigation Button next and Prev
styles navigation and container
Personal Info step
base input
como validar input con vue o librerias,


*/
