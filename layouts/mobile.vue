<script setup lang="ts">
import { useAppState } from '@/store'

const appState = useAppState()
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-black-100">
    <div
      class="w-full min-h-screen md:min-w-[320px] md:min-h-0 md:h-[95vh] md:max-w-[400px] md:rounded-lg md:overflow-auto"
      :class="appState.appBg === 'white' ? 'bg-white' : 'bg-black-50'"
    >
      <div class="flex flex-col min-h-screen md:min-h-full">
        <LayoutHeader />
        <slot />
        <LayoutFooter class="mt-auto" />
      </div>
    </div>
  </div>
</template>
