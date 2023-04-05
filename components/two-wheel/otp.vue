<script setup lang="ts">
import { useAppState } from '@/store'

const emits = defineEmits(['success'])
const appState = useAppState()

onMounted(() => {
  appState.appBg = 'white'
})
</script>

<template>
  <div>
    <img
      src="~/assets/images/wave-otp.svg"
      class="w-full"
    >
    <div class="p-4">
      <h6 class="kp-text-h6-bold mb-4">
        Verifikasi Kode OTP
      </h6>
      <KpButton
        block
        @click="() => emits('success')"
      >
        Next
      </KpButton>
    </div>
  </div>
</template>
