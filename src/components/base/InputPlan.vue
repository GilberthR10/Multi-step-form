<template>
  <label
    @click="handleChecked"
    :for="name"
    :class="{ 'border-purplish-blue/75 bg-pastel-blue/10' : checked }"
    class="flex md:flex-col border  rounded-lg shadow-sm gap-4 md:gap-12 p-4 w-full"
  >

    <img :src="icon" alt="" class="w-10" />
    <input :value="value" :name="name" class="appearance-none hidden" type="radio" />
    <div class="flex flex-col space-y-2">
      <span class="text-marine-blue font-bold">{{ plan }}</span>
      <span class="text-cool-gray">${{ price }}/{{ yearly ? 'yr': 'mo' }}</span>
      <span v-show="yearly" class="text-marine-blue font-medium">{{ promo }}</span>
    </div>
  </label>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { toRefs } from "vue";
const props = defineProps({
  icon: String,
  // The group's value
  modelValue: {
    type: null,
  },
  // Field's own value
  value: {
    type: null,
  },
  name: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rules: {
    type: String,
    default: undefined,
  },
  promo: {
    type: String,
  },
  yearly: {
    type: Boolean,
    default: false,
  }
});

const { name } = toRefs(props);
const { checked, handleChange } = useField(name, props.rules, {
  type: "radio",
  checkedValue: props.value,
  validateOnValueUpdate: true,
});

const handleChecked = () => {
    handleChange(props.value)
}
</script>

<style scoped></style>
