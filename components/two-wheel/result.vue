<script setup lang="ts">
import { useAppState } from '@/store'

const emits = defineEmits(['success'])
const appState = useAppState()

onMounted(() => {
  appState.appBg = 'white'
})
</script>

<template>
  <div class="min-h-[500px] flex flex-col items-center p-4 custom-gradient">
    <img
      src="~/assets/images/result-illustration.svg"
      class="w-full mx-2 max-w-[400px] mt-18 mb-4"
    >
    <h6 class="kp-text-h6-bold mb-4 text-center">
      Dokumen Pengajuan Pinjaman Dana Tunai Sudah Kami Terima
    </h6>
    <p class="text-caption text-black-400 mb-6 text-center">
      Pastikan nomor anda aktif. Mohon tunggu hingga nanti tim KreditPlus akan menghubungi lebih lanjut.
    </p>
    <p class="kp-text-caption-bold mb-4 text-center">
      Temukan Kami :
    </p>
    <div class="flex mb-10">
      <img
        src="~/assets/images/google-play-black.svg"
        class="h-40px mr-6"
      >
      <img
        src="~/assets/images/app-store-black.svg"
        class="h-40px"
      >
    </div>
    <KpButton
      block
      @click="() => emits('success')"
    >
      Selesai
    </KpButton>
  </div>
</template>

<style scoped>
.custom-gradient {
  background: linear-gradient(180deg, #FFF7E0 0%, #FFFFFF 35%)
}
</style>
