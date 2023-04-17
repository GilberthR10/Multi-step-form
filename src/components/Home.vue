<script setup lang="ts">
import Sidebar from './Sidebar.vue';
import StepContainer from './StepContainer.vue';


</script>
<template>
    <div class="bg-white md:grid grid-cols-3 h-full md:rounded-2xl overflow-hidden md:p-5 md:max-w-2xl md:max-h-[50%] m-auto">
        <Sidebar />
        <StepContainer class="border border-red-700 p-10" />
    </div>
</template>


<style scoped>

</style>