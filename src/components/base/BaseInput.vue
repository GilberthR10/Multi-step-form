<template>
  <div class="w-full">
    <div class="mb-1 flex justify-between text-sm font-medium">
      <label class="text-marine-blue" :for="name">{{ label }}</label>
      <span v-show="meta.touched && errorMessage" class="text-base text-red-600"
        >This field is required</span
      >
    </div>

    <input
      v-model="value"
      :id="name"
      :class="{
        'border-strawberry-red focus:border-strawberry-red':
          meta.touched && errorMessage,
      }"
      class="mb-5 w-full cursor-pointer rounded-md border p-2 font-medium text-marine-blue outline-none hover:border-purplish-blue focus:border-purplish-blue"
      required
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :autocomplete="type == 'email' ? 'email' : 'off'"
    />
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

type Props = {
  name: string
  type: string
  label: string
  placeholder: string
}
const props = defineProps<Props>()

const { value, errorMessage, meta } = useField(props.name)
</script>
