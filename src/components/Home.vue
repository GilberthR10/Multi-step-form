<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import StepContainer from "./StepContainer.vue";

</script>
<template>
    <div class="bg-white md:flex md:p-4 md:rounded-2xl md:min-w-[40rem] md:shadow-lg md:h-[38rem] md:max-w-[80%] md:mx-auto">
    <!-- Siderbar -->
      <Sidebar class="md:min-w-[25%]"/>
      <!-- Form step container -->
      <StepContainer class="md:flex-1 md:w-[75rem]" />
    </div>
</template>