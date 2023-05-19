<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import StepContainer from './StepContainer.vue'
</script>
<template>
  <div
    class="bg-white md:mx-auto md:flex md:h-[38rem] md:min-w-[40rem] md:max-w-[70%] md:rounded-2xl md:p-4 md:shadow-lg"
  >
    <!-- Siderbar -->
    <Sidebar class="md:min-w-[25%]" />
    <!-- Form step container -->
    <StepContainer class="md:relative md:w-[78rem] md:flex-1 md:px-16" />
  </div>
</template>
