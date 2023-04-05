<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: null,
  },
  maxHeight: {
    type: String,
    default: null,
  },
  persistent: {
    type: Boolean,
    default: false,
  },
  cardClass: {
    type: [String],
    default: null,
  },
})
const emits = defineEmits(['open', 'close', 'update:modelValue'])

const isOpen = ref(false)

const model = computed({
  get(): boolean {
    if (props.modelValue === null)
      return isOpen.value

    return props.modelValue
  },
  set(value: boolean) {
    if (props.modelValue === null)
      return isOpen.value = value

    return emits('update:modelValue', value)
  },
})

watch(model, (value) => {
  if (value)
    emits('open')
  else
    emits('close')
})

const toggle = () => {
  model.value = !model.value
}

const onBgClick = () => {
  if (!props.persistent)
    model.value = false
}

defineExpose({
  isOpen,
  toggle,
})
</script>

<template>
  <div
    @click="model = true"
  >
    <slot name="activator" />
  </div>
  <Teleport to="body">
    <!-- backdrop -->
    <Transition name="fade-transition">
      <div
        v-if="model"
        class="sheet-bg w-full h-full"
      />
    </Transition>

    <!-- bottom sheet -->
    <Transition name="bottom-sheet-transition" mode="out-in">
      <div
        v-if="model"
        class="fixed overflow-x-hidden inset-0 z-30 sheet-open"
        @click="onBgClick"
      >
        <div class="absolute bottom-0 w-full" @click="onBgClick">
          <KpCard
            class="md:max-w-[400px] mx-auto overflow-auto rounded-t-lg p-0"
            :class="`${cardClass} ${props.maxHeight === null ? 'max-h-[80vh]' : ''}`"
            :style="props.maxHeight ? `max-height: ${props.maxHeight}` : ''"
            no-padding
            :rounded="false"
            @click.stop
          >
            <slot />
          </KpCard>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="postcss">
.sheet-bg {
  @apply fixed overflow-x-hidden inset-0 z-20;

  background: rgba(0, 0, 0, 0.4);
}
</style>

<style>
body:has(.sheet-open) {
  overflow: hidden;
}
</style>
