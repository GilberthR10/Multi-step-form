<template>
  <label
    @click="handleChecked"
    :for="name"
    :class="{ 'border-purplish-blue/75 bg-pastel-blue/10': checked }"
    class="flex border rounded-lg shadow-sm gap-3 p-4 w-full items-center"
  >
    <input
      :checked="checked"
      :name="name"
      class="checked:bg-purplish-blue w-5 h-5 rounded-md mr-1.5 transition-colors delay-150 border-gray-400/80  text-purplish-blue form-checkbox focus:ring-0"
      type="checkbox"
    />
    <div class="flex flex-col">
      <span class="text-marine-blue font-bold">{{ title }}</span>
      <span class="text-cool-gray text-sm">{{ description }}</span>
    </div>
    <span class="text-sm text-purplish-blue font-semibold ml-auto">{{ price }}</span>
  </label>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { toRefs } from "vue";
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
});

const { name } = toRefs(props);
const { checked, handleChange, value } = useField(name, props.rules, {
  type: 'checkbox',
  checkedValue: true,
  uncheckedValue: false,
});

const handleChecked = () => {
  handleChange(!value.value);
};
</script>