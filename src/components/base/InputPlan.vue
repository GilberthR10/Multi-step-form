<template>
  <label
    @click="handleChecked"
    :for="name"
    :class="{ 'border-purplish-blue/75 bg-pastel-blue/10': checked }"
    class="flex w-full cursor-pointer gap-4 rounded-lg border p-4 shadow-sm hover:border-purplish-blue/75 md:flex-col md:gap-12"
  >
    <img :src="icon" alt="" class="w-10" />
    <input
      :value="value"
      :name="name"
      class="hidden appearance-none"
      type="radio"
    />
    <div class="flex flex-col space-y-2">
      <span class="font-bold text-marine-blue">{{ plan }}</span>
      <span class="text-cool-gray"
        >${{ price }}/{{ yearly ? 'yr' : 'mo' }}</span
      >
      <Transition
        mode="out-in"
        enter-from-class="opacity-0"
        enter-leave-class="opacity-100"
        enter-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        leave-active-class="transition-opacity duration-300"
      >
        <span v-show="yearly" class="font-medium text-marine-blue">{{
          promo
        }}</span>
      </Transition>
    </div>
  </label>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { toRefs } from 'vue'
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
  },
})

const { name } = toRefs(props)
const { checked, handleChange } = useField(name, props.rules, {
  type: 'radio',
  checkedValue: props.value,
  validateOnValueUpdate: true,
})

const handleChecked = () => {
  handleChange(props.value)
}
</script>
