<script setup lang="ts">
import type { ButtonVariant, SizeVariant } from '../types'

const props = defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'filled',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<SizeVariant>,
    default: 'large',
  },
})

const classNames = computed(() => {
  const classList: string[] = ['rounded-lg text-white tracking-[0.5px]']

  // block button
  if (props.block)
    classList.push('w-full')

  // button coloring
  if (props.disabled) {
    if (props.variant === 'filled')
      classList.push('bg-black-200')
    else
      classList.push('text-black-200 bg-transparent')

    if (props.variant === 'outlined')
      classList.push('border-1 border-black-200')
  }
  else {
    if (props.variant === 'filled')
      classList.push('bg-primary')
    else
      classList.push('text-primary bg-transparent')

    if (props.variant === 'outlined')
      classList.push('border-1 border-primary')
  }

  // button sizing
  if (props.size === 'xlarge')
    classList.push('py-4 px-8 text-[23px]')
  if (props.size === 'large')
    classList.push('py-2 px-6 text-[18px]')
  if (props.size === 'medium')
    classList.push('py-2 px-6 text-[14px]')
  if (props.size === 'small')
    classList.push('py-2 px-5 text-[10px]')

  if (props.loading)
    classList.push('cursor-wait')

  return classList
})
</script>

<template>
  <button
    v-ripple
    class="btn transition-all"
    :class="classNames"
    :disabled="props.disabled || props.loading"
  >
    <Transition name="scroll-y-transition" mode="out-in">
      <div
        v-if="props.loading"
        class="flex justify-center"
        :class="{
          'py-[5px]': props.size === 'xlarge',
          'py-[1.5px]': props.size === 'large',
          'py-[0.7px]': props.size === 'medium',
          'py-[1.2px]': props.size === 'small',
        }"
      >
        <KpSpinner
          :size="props.size"
          :primary="props.variant !== 'filled'"
          :class="{ 'text-white': props.variant === 'filled' }"
        />
      </div>
      <div v-else>
        <slot />
      </div>
    </Transition>
  </button>
</template>

<style lang="scss">
.btn:hover {
  filter: brightness(98%);
}
</style>
