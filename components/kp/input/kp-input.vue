<script setup lang="ts">
import type { MaskaDetail } from 'maska'

interface MaskaOptions {
  mask: string
  tokens?: string | Object
  reversed?: boolean
  process?: Object
}

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },

  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  errorText: {
    type: String,
    default: null,
  },
  maskPreset: {
    type: String as PropType<'currency' | 'phone' | 'ktp' | 'custom'>,
    default: null,
  },
  customMask: {
    type: Object as PropType<MaskaOptions>,
    default: null,
  },
  maxValue: {
    type: [Number, String],
    default: null,
  },
  minValue: {
    type: [Number, String],
    default: null,
  },
})

const emits = defineEmits([
  'update:modelValue',
  'unfocus',
  'focus',
])

const maskedValue = ref('')
const unmaskedValue = ref('')

const maskMode = computed(() => {
  return props.maskPreset !== null || props.customMask !== null
})

const onInput = (value: any) => {
  if (maskMode.value) {
    emits('update:modelValue', unmaskedValue.value)
  }
  else {
    if (props.maxValue != null && value > +props.maxValue)
      return emits('update:modelValue', +props.maxValue)

    if (props.minValue != null && value < +props.minValue)
      return emits('update:modelValue', +props.minValue)

    emits('update:modelValue', value)
  }
}

const onMaska = (event: CustomEvent<MaskaDetail>) => {
  const { masked, unmasked } = event.detail

  maskedValue.value = masked

  if (props.maskPreset === 'phone') {
    unmaskedValue.value = `08${unmasked}`
  }
  else {
    if (props.maxValue != null && +unmasked > +props.maxValue)
      return unmaskedValue.value = props.maxValue.toString()

    if (props.minValue != null && +unmasked < +props.minValue)
      return unmaskedValue.value = props.minValue.toString()

    unmaskedValue.value = unmasked
  }
}

const maskOptions = computed((): MaskaOptions | null => {
  if (props.customMask !== null)
    return props.customMask

  if (props.maskPreset === 'currency') {
    return {
      mask: '0',
      tokens: '0:[0-9]:multiple',
      process: {
        preProcess: (val: any) => val.replace(/[$,]/g, ''),
        postProcess: (val: any) => {
          if (!val)
            return ''

          let finalNumber = +val

          if (props.maxValue != null && +val > +props.maxValue)
            finalNumber = +props.maxValue

          /* bugged, will fix later */
          // if (props.minValue != null && +val < +props.minValue)
          //   finalNumber = +props.minValue

          return formatCurrency(finalNumber)
        },
      },
    }
  }

  if (props.maskPreset === 'phone') {
    return {
      mask: '08## #### #####',
    }
  }

  if (props.maskPreset === 'ktp') {
    return {
      mask: '#### #### #### ####',
    }
  }

  return null
})
</script>

<template>
  <div class="w-full">
    <label
      v-if="props.label"
      class="text-caption mb-2 block"
      v-text="props.label"
    />
    <div class="relative">
      <input
        v-maska:[maskOptions?.process]
        :data-maska="maskOptions?.mask"
        :data-maska-tokens="maskOptions?.tokens"
        :data-maska-reversed="maskOptions?.reversed"
        class="kp-input"
        :class="[
          props.disabled ? 'bg-black-200 cursor-not-allowed' : 'bg-transparent',
          props.error || props.errorText
            ? 'ring-danger ring-2 focus:outline-danger'
            : 'ring-1 ring-black-300 focus:outline-primary',
        ]"
        :type="type"
        :value="maskMode ? maskedValue : props.modelValue"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :readonly="props.readonly"
        @input="$event => onInput(($event.target as HTMLInputElement).value)"
        @blur="() => emits('unfocus')"
        @focus="() => emits('focus')"
        @maska="onMaska"
      >
      <KpSpinner
        v-if="props.loading"
        size="medium"
        class="absolute top-3 right-3"
      />
    </div>
    <transition name="slide-y-transition">
      <small
        v-if="props.errorText"
        class="block text-danger mt-2 text-small"
        v-text="props.errorText"
      />
    </transition>
  </div>
</template>

<style lang="postcss" scoped>
.kp-input {
  @apply w-full relative rounded-lg px-4 py-3
  transition-all duration-200 text-caption
  hover:border-primary placeholder-black-400;
}
</style>

<style>
/* hide spin input on type number */
input[type='number'] {
  appearance: textfield;
  -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
