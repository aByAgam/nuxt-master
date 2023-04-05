<script setup lang="ts">
const emits = defineEmits(['success'])

const { current, goToNext, goToPrevious } = useStepper([
  'personal_information',
  'vehicle_information',
], 'personal_information')
</script>

<template>
  <div>
    <KpCard
      :rounded="false"
      class="flex flex-col items-center border-t-1 border-black-200"
    >
      <h6 class="kp-text-caption-bold mb-4">
        Form Pengajuan
      </h6>
      <div class="flex justify-center mb-4">
        <div class="stepper-item">
          <span
            class="stepper-circle"
            :class="current === 'personal_information'
              ? 'bg-primary border-primary text-white'
              : 'bg-white border-black-400 text-black-400'"
          >
            1
          </span>
          <span
            class="stepper-label"
            :class="current === 'personal_information' ? 'text-black-600' : 'text-black-400'"
          >
            Data Pribadi
          </span>
        </div>
        <div
          class="w-[200px] h-[2px] bg-black-300 mt-[10px] mx-[1px] rounded-full"
        />
        <div class="stepper-item">
          <span
            class="stepper-circle"
            :class="current === 'vehicle_information'
              ? 'bg-primary border-primary text-white'
              : 'bg-white border-black-400 text-black-400'"
          >
            2
          </span>
          <span
            class="stepper-label"
            :class="current === 'vehicle_information' ? 'text-black-600' : 'text-black-400'"
          >
            Data Kendaraan
          </span>
        </div>
      </div>
    </KpCard>
    <div class="p-4 py-6">
      <Transition name="slide-x-transition" mode="out-in">
        <div v-if="current === 'personal_information'">
          <h6 class="kp-text-h6-bold my-2">
            Data Pribadi
          </h6>
          <p class="text-body text-black-400 mb-4">
            Isi data pribadi di bawah untuk mengajukan pinjaman dana tunai.
          </p>
          <KpCard>
            <KpInput
              label="Nama Sesuai KTP"
              placeholder="Contoh: Stella Hermawan SH MM"
              class="mb-4"
            />
            <KpInput
              label="Nama Lengkap"
              placeholder="Contoh: Stella Hermawan"
              class="mb-4"
            />
            <KpInput
              label="NIK"
              placeholder="Contoh: 2901256673299123"
              mask-preset="ktp"
              class="mb-4"
            />
            <KpInput
              label="Tanggal Lahir"
              placeholder="yyyy-mm-dd"
              class="mb-4"
            />
            <KpInput
              label="Alamat"
              placeholder="Contoh: Jl. Jakarta 5"
              class="mb-4"
            />
            <KpSelect
              label="Provinsi"
              searchable
              placeholder="Pilih Provinsi"
              :items="[
                { text: 'Example Item 1', value: 1 },
                { text: 'Example Item 2', value: 2 },
                { text: 'Example Item 3', value: 3 },
              ]"
              class="mb-4"
            />
            <KpSelect
              label="Kota/Kabupaten"
              searchable
              placeholder="Pilih Kota/Kabupaten"
              :items="[
                { text: 'Example Item 1', value: 1 },
                { text: 'Example Item 2', value: 2 },
                { text: 'Example Item 3', value: 3 },
              ]"
              class="mb-4"
            />
            <KpSelect
              label="Kecamatan"
              searchable
              placeholder="Pilih Kecamatan"
              :items="[
                { text: 'Example Item 1', value: 1 },
                { text: 'Example Item 2', value: 2 },
                { text: 'Example Item 3', value: 3 },
              ]"
              class="mb-4"
            />
            <KpSelect
              label="Desa/Kelurahan"
              searchable
              placeholder="Pilih Desa/Kelurahan"
              :items="[
                { text: 'Example Item 1', value: 1 },
                { text: 'Example Item 2', value: 2 },
                { text: 'Example Item 3', value: 3 },
              ]"
              class="mb-4"
            />
            <KpInput
              label="Kode Pos"
              placeholder="Contoh: 13993"
              class="mb-4"
            />
            <KpInput
              label="Email"
              type="email"
              placeholder="Contoh: stella.hermawan@email.com"
              class="mb-4"
            />
            <KpInput
              label="Email"
              placeholder="Contoh: 082300453392"
              mask-preset="phone"
              class="mb-4"
            />
            <KpSelect
              label="Status Perkawinan"
              searchable
              placeholder="Pilih Status Perkawinan"
              :items="[
                { text: 'Example Item 1', value: 1 },
                { text: 'Example Item 2', value: 2 },
                { text: 'Example Item 3', value: 3 },
              ]"
              class="mb-4"
            />
            <KpButton
              block
              @click="() => goToNext()"
            >
              Selanjutnya
            </KpButton>
          </KpCard>
        </div>
        <div v-else-if="current === 'vehicle_information'">
          <h6 class="kp-text-h6-bold my-2">
            Data Kendaraan
          </h6>
          <p class="text-body text-black-400 mb-4">
            Isi data kendaraan di bawah untuk mengajukan pinjaman dana tunai.
          </p>
          <KpCard>
            <KpInput
              label="No. Polisi"
              placeholder="Contoh: B1234ABC"
              class="mb-4"
            />
            <KpSelect
              label="Jenis Kepemilikan BPKB"
              searchable
              placeholder="Pilih Jenis Kepemilikan BPKB"
              :items="[
                { text: 'Example Item 1', value: 1 },
                { text: 'Example Item 2', value: 2 },
                { text: 'Example Item 3', value: 3 },
              ]"
              class="mb-4"
            />
            <KpInput
              label="Nama Pemilik Sesuai BPKB"
              placeholder="Contoh: Stella Hermawan"
              class="mb-4"
            />
            <h6 class="text-black-400 mt-2 mb-4">
              Waktu Pengajuan
            </h6>
            <KpInput
              label="Tanggal Ingin Diproses"
              placeholder="yyyy-mm-dd"
              class="mb-4"
            />
            <KpButton
              block
              class="mb-4"
              @click="() => emits('success')"
            >
              Ajukan Sekarang
            </KpButton>
            <KpButton
              block
              variant="outlined"
              @click="goToPrevious"
            >
              Kembali
            </KpButton>
          </KpCard>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="postcss">
.stepper-item {
  @apply flex flex-col items-center relative
}

.stepper-circle {
  @apply rounded-full flex items-center justify-center border-1
  text-tiny leading-none h-[20px] w-[20px] mb-2 pt-[0.5px];
}

.stepper-label {
  @apply absolute text-tiny text-center top-7 w-20
}
</style>
