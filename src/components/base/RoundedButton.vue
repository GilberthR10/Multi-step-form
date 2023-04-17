
<script setup lang="ts">
const props = defineProps<{
    step: number,
    active: boolean,
}>()
</script>
<template>
    <div class="rounded-full border text-white font-bold h-12 w-12 flex items-center justify-center text-lg"
    :class="{ 'bg-light-blue text-marine-blue border-none' : props.active }"
    >
        {{ props.step }}
    </div>
</template>