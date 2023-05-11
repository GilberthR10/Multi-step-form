<template>
  <div class="w-full">
    <div class="flex justify-between font-medium mb-1 text-sm">
      <label class="text-marine-blue" :for="name">{{ label }}</label>
      <span v-show="meta.touched && errorMessage" class="text-red-600 text-base"
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
      class="p-2 border rounded-md outline-none focus:border-purplish-blue text-marine-blue font-medium mb-5 w-full"
      required
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :autocomplete="type == 'email' ? 'email': 'off'"
    />
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

type Props = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
};
const props = defineProps<Props>();

const { value, errorMessage, meta } = useField(props.name);
</script>
