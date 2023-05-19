<template>
  <label
    @click="handleChecked"
    :for="name"
    :class="{ 'border-purplish-blue/75 bg-pastel-blue/10': checked }"
    class="flex w-full cursor-pointer items-center gap-3 rounded-lg border p-4 shadow-sm hover:border-purplish-blue/75"
  >
    <input
      :checked="checked"
      :name="name"
      class="form-checkbox mr-1.5 h-5 w-5 rounded-md border-gray-400/80 text-purplish-blue transition-colors delay-150 checked:bg-purplish-blue focus:ring-0"
      type="checkbox"
    />
    <div class="flex flex-col">
      <span class="font-bold text-marine-blue">{{ title }}</span>
      <span class="text-sm text-cool-gray">{{ description }}</span>
    </div>
    <span class="ml-auto text-sm font-semibold text-purplish-blue">{{
      price
    }}</span>
  </label>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { toRefs } from 'vue'
const props = defineProps({
  modelValue: {
    type: null,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    default: undefined,
  },
})

const { name } = toRefs(props)
const { checked, handleChange, value } = useField(name, props.rules, {
  type: 'checkbox',
  checkedValue: true,
  uncheckedValue: false,
})

const handleChecked = () => {
  handleChange(!value.value)
}
</script>
