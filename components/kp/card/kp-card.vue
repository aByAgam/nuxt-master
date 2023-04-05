<script setup lang="ts">
const props = defineProps({
  rounded: {
    type: Boolean,
    default: true,
  },
  noPadding: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="w-full bg-white"
    :class="{
      'rounded-xl': props.rounded,
      'px-4 py-6': !props.noPadding,
    }"
  >
    <slot />
  </div>
</template>
