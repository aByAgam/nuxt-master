<script setup lang="ts">
import { useAppState } from '@/store'

const emits = defineEmits(['success'])

const appState = useAppState()
const loading = ref(false)
const maskedInput = ref('')

const scrollIntoForm = () => {
  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
}

const advantagePoints = [
  { title: 'Pencairan Besar Mulai Rp 2 Juta', icon: '/assets/icons/landing-plus-1.svg' },
  { title: 'Proses Cepat 3 Jam Cair', icon: '/assets/icons/landing-plus-2.svg' },
  { title: 'Cukup Tunggu Di Rumah', icon: '/assets/icons/landing-plus-3.svg' },
  { title: 'Usia Kendaraan Hingga 13 Tahun', icon: '/assets/icons/landing-plus-4.svg' },
]

const onSubmit = () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false

    emits('success')
  }, 3000)
}

onMounted(() => {
  appState.appBg = 'default'
})
</script>

<template>
  <div>
    <div class="relative h-[90vh] flex flex-col items-center justify-around custom-gradient py-14 overflow-hidden">
      <div class="flex flex-col items-center z-10">
        <h4 class="kp-text-h4-bold mb-4">
          Agunan Motor
        </h4>
        <span class="kp-text-caption-light mb-6">
          Solusi Kebutuhan Dana Anda
        </span>
        <KpButton class="mb-4" @click="scrollIntoForm">
          Ajukan Pinjaman
        </KpButton>
      </div>
      <img
        src="~/assets/images/motor.png"
        class="w-[80%] max-w-[400px] mt-8 z-1"
      >
      <img
        src="~/assets/images/landing-wave-left.png"
        class="absolute scale-125 bottom-10 left-8"
      >
      <img
        src="~/assets/images/landing-wave-right.png"
        class="absolute scale-125 top-[-36px] right-3"
      >
      <img
        src="~/assets/images/landing-dots.png"
        class="absolute scale-125 top-10 left-7"
      >
    </div>
    <div class="px-4 py-6">
      <h6 class="kp-text-h6-bold mb-2">
        Keunggulan Kami
      </h6>
      <p class="text-body text-black-400 mb-4">
        Kreditplus menyediakan fasilitas pinjaman dana tunai dengan agunan BPKB motor sebagai solusi kebutuhan dana Anda.
      </p>
      <div class="grid grid-cols-2 gap-x-3 gap-y-4 mb-8">
        <KpCard
          v-for="(item, index) in advantagePoints"
          :key="index"
          no-padding
          class="px-4 py-3"
        >
          <img
            :src="item.icon"
            class="w-10 h-10 mb-4"
          >
          <span class="kp-text-caption-bold">
            {{ item.title }}
          </span>
        </KpCard>
      </div>
      <h6 class="kp-text-h6-bold mb-2">
        Kalkulasi Pinjaman Dana
      </h6>
      <p class="text-body text-black-400 mb-4">
        Isi data di bawah untuk mendapatkan kisaran pinjaman yang dapat anda ajukan.
      </p>
      <KpCard id="form" class="flex flex-col items-center">
        <KpSelect
          class="mb-4"
          label="Merek Kendaraan"
          searchable
          placeholder="Merek Kendaraan"
          :items="[
            { text: 'Example Item 1', value: 1 },
            { text: 'Example Item 2', value: 2 },
            { text: 'Example Item 3', value: 3 },
          ]"
        />

        <KpSelect
          class="mb-4"
          label="Tipe Kendaraan"
          searchable
          placeholder="Tipe Kendaraan"
          :items="[
            { text: 'Example Item 1', value: 1 },
            { text: 'Example Item 2', value: 2 },
            { text: 'Example Item 3', value: 3 },
          ]"
        />

        <KpSelect
          class="mb-4"
          label="Tahun Kendaraan"
          searchable
          placeholder="Tahun Kendaraan"
          :items="[
            { text: 'Example Item 1', value: 1 },
            { text: 'Example Item 2', value: 2 },
            { text: 'Example Item 3', value: 3 },
          ]"
        />

        <span class="text-caption mb-2">
          Maksimal Pinjaman
        </span>
        <h5 class="kp-text-h5-bold text-primary mb-2">
          {{ formatCurrency(4000000) }}
        </h5>
        <span class="text-caption mb-2">
          Jumlah Biaya yang Dibutuhkan?
        </span>
        <KpInput
          v-model="maskedInput"
          placeholder="Rp0"
          class="mb-4"
          mask-preset="currency"
          :max-value="4000000"
        />

        <KpButton
          block
          :loading="loading"
          @click="() => onSubmit()"
        >
          Ajukan Pinjaman Dana Tunai
        </KpButton>
      </KpCard>
    </div>
  </div>
</template>

<style scoped>
.custom-gradient {
  background: linear-gradient(183.95deg, #fce7af -7.33%, #FFFAED 3.39%, #F5DE9E 71.53%, #F7F7F7 97.09%);
}
</style>
