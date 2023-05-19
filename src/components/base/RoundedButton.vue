<script setup lang="ts">
const props = defineProps<{
  step: number
  active: boolean
  name: string
}>()
</script>
<template>
  <div class="flex items-center font-bold text-white">
    <div
      :class="{ 'border-none bg-light-blue text-marine-blue': props.active }"
      class="flex h-12 w-12 items-center justify-center rounded-full border text-lg"
    >
      {{ props.step }}
    </div>
    <div class="ml-5 hidden flex-col md:flex">
      <span class="font-normal text-light-gray/70">Step {{ props.step }}</span>
      <span class="uppercase">{{ props.name }}</span>
    </div>
  </div>
</template>
