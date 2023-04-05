<!-- eslint-disable unused-imports/no-unused-imports -->
<script setup lang="ts">
definePageMeta({
  layout: 'mobile',
})

const { current, goToNext, goTo } = useStepper([
  'simulation', 'form', 'otp', 'result',
], 'simulation')
</script>

<template>
  <div>
    <Transition name="slide-x-transition" mode="out-in">
      <TwoWheelSimulation
        v-if="current === 'simulation'"
        @success="goToNext"
      />
      <TwoWheelForm
        v-else-if="current === 'form'"
        @success="goToNext"
      />
      <TwoWheelOtp
        v-else-if="current === 'otp'"
        @success="goToNext"
      />
      <TwoWheelResult
        v-else
        @success="goTo('simulation')"
      />
    </Transition>
  </div>
</template>
