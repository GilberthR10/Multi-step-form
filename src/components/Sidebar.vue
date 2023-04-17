<script setup lang="ts">
import RoundedButton from './base/RoundedButton.vue';


</script>
<template>
    <div class="bg-sidebar-mobile md:bg-sidebar-desktop bg-cover bg-no-repeat h-52 md:h-full p-5">
       <div class="flex space-x-6 items-center justify-center mt-10 md:flex-col md:space-x-0 md:space-y-8 md:items-start">
        <Rounded-button :active="true" :step="1" />
        <Rounded-button :active="true" :step="2" />
        <Rounded-button :active="true" :step="3" />
        <Rounded-button :active="true" :step="4" />
       </div>
    </div>
</template>


<style scoped>

</style>