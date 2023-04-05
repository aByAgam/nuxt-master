<script setup lang="ts">
import KpCard from '../card/kp-card.vue'
import KpInput from '../input/kp-input.vue'
import type { SelectItem } from '../types'
import { useFocus } from './utils/use-focus'

type KpInputElement = InstanceType<typeof KpInput> & HTMLDivElement

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number, Date, Object, Array] as PropType<string | number | Date | object | null>,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  errorText: {
    type: String,
    default: null,
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  async: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array as PropType<string[] | SelectItem[]>,
    default: () => [],
  },
  emptyText: {
    type: String,
    default: 'Tidak ada pilihan.',
  },
})
const emits = defineEmits(['change', 'update:modelValue', 'search'])

const [isOpen, toggle] = useToggle()
const keyword = ref('')
const internalValue = ref({
  text: '',
  value: undefined,
})
const select = templateRef<HTMLDivElement>('dropdown')
const menu = templateRef<HTMLDivElement>('menu')
const searchInput = templateRef<KpInputElement>('searchInput')
const caret = templateRef<HTMLDivElement>('caret')

const { next: nextFocus, prev: prevFocus } = useFocus(menu)

/* normalizing items into SelectItem type */
const resolveItems = computed(() => {
  let normalizedItems = props.items.map((item: SelectItem | string) => {
    if (typeof item === 'string') {
      return {
        text: item,
        value: item,
      }
    }

    return item
  })

  if (keyword.value) {
    normalizedItems = normalizedItems.filter((item: SelectItem) => {
      const key = keyword.value.toLowerCase()
      const text = item.text.toLowerCase()

      return text.includes(key)
    })
  }

  return normalizedItems
})

const model = computed({
  get(): SelectItem {
    return resolveItems.value.find(item => item.value === props.modelValue) ?? internalValue.value
  },
  set(selected: SelectItem) {
    internalValue.value = selected

    emits('change', selected)
    emits('update:modelValue', selected.value)
  },
})

const search = computed({
  get() {
    return (isOpen.value && props.searchable)
      ? keyword.value
      : model.value.text
  },
  set(value: string) {
    if (value !== search.value)
      keyword.value = value

    emits('search')
  },
})

const selectItem = (item: SelectItem) => {
  model.value = item

  isOpen.value = false
}

const isSelected = (item: SelectItem) => {
  return item.value === model.value.value
}

const onClickInput = () => {
  if (isOpen.value || props.readonly || props.disabled)
    return

  isOpen.value = true
}

const onFocus = () => {
  if (!props.disabled && !props.readonly)
    isOpen.value = true
}

watch(isOpen, (value) => {
  if (!value)
    keyword.value = ''
}, { flush: 'post' })

onClickOutside(menu, () => {
  isOpen.value = false
}, { ignore: [select, searchInput, caret] })

/* keyboard event handler start */
onKeyStroke('Escape', (event) => {
  event.preventDefault()

  isOpen.value = false
})

onKeyStroke(['Tab'], (event) => {
  event.preventDefault()

  if (isOpen.value) {
    if (event.shiftKey)
      prevFocus()
    else
      nextFocus()
  }
}, { target: menu })

onKeyStroke(['ArrowUp'], (event) => {
  event.preventDefault()
  if (isOpen.value)
    prevFocus()
})

onKeyStroke(['ArrowDown'], (event) => {
  event.preventDefault()
  if (isOpen.value)
    nextFocus()
})
/* keyboard event handler end */
</script>

<template>
  <div ref="select" class="relative w-full">
    <label
      v-if="props.label"
      class="text-caption mb-2 block"
      v-text="props.label"
    />
    <div class="relative">
      <KpInput
        ref="searchInput"
        v-model="search"
        :readonly="props.readonly || !isOpen || !props.searchable"
        :placeholder="props.placeholder"
        :loading="props.loading"
        :disabled="props.disabled"
        :error="props.error"
        :error-text="props.errorText"
        @click="onClickInput"
        @focus="onFocus"
      />
      <div
        v-if="!props.loading"
        ref="caret"
        class="absolute top-2 right-2 cursor-pointer"
        @click.stop="toggle()"
      >
        <div
          class="i-fluent:chevron-down-16-filled h-7 w-7 bg-black-400 transition-transform duration-300"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
      <Transition name="slide-y-transition">
        <div
          v-show="isOpen"
          ref="menu"
          class="bg-white"
        >
          <KpCard
            no-padding
            class="absolute mt-2 overflow-auto max-h-[220px] z-10 shadow-lg border"
          >
            <div
              v-if="!resolveItems.length"
              class="p-4 text-caption text-black-300"
            >
              {{ emptyText }} {{ props.items.length && keyword.length ? 'Silahkan coba kata kunci lain.' : '' }}
            </div>
            <div
              v-for="(item, index) in resolveItems"
              :key="index"
              v-ripple
              class="px-3 py-2 cursor-pointer border-l-3 hover:bg-black-50 transition-all focus:outline-none focus:bg-black-100"
              :class="[
                isSelected(item) ? 'bg-primary-50 border-primary' : 'bg-white border-transparent',
              ]"
              tabindex="0"
              @click="selectItem(item)"
              @keyup.enter="selectItem(item)"
            >
              <span class="text-caption">
                {{ item.text }}
              </span>
            </div>
          </KpCard>
        </div>
      </Transition>
    </div>
  </div>
</template>
