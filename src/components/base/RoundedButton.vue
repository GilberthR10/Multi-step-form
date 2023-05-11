<script setup lang="ts">
const props = defineProps<{
  step: number;
  active: boolean;
  name: string;
}>();
</script>
<template>
  <div class="flex items-center font-bold text-white">
    <div
      :class="{ 'bg-light-blue text-marine-blue border-none': props.active }"
      class="rounded-full border h-12 w-12 flex items-center justify-center text-lg"
    >
      {{ props.step }}
    </div>
    <div class="flex-col ml-5 hidden md:flex">
      <span class="text-light-gray/70 font-normal">Step {{ props.step }}</span>
      <span class="uppercase">{{ props.name }}</span>
    </div>
  </div>
</template>
