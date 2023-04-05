<script setup lang="ts">
import type { SizeVariant } from '../types'

const props = defineProps({
  size: {
    type: String as PropType<SizeVariant>,
    default: 'large',
  },
  primary: {
    type: Boolean,
    default: true,
  },
})

const spinnerSize = computed(() => {
  if (props.size === 'xlarge')
    return 'w-6 h-6 border-4'

  if (props.size === 'large')
    return 'w-6 h-6 border-3'

  if (props.size === 'medium')
    return 'w-5 h-5 border-3'

  return 'w-3 h-3 border-2'
})
</script>

<template>
  <div
    :class="[
      spinnerSize,
      props.primary ? 'text-primary' : '',
    ]"
    class="animate-spin inline-block border-current border-t-transparent rounded-full"
    role="status" aria-label="loading"
  >
    <span class="sr-only">Loading...</span>
  </div>
</template>
