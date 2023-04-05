import { defineStore } from 'pinia'
import type { appBp } from '@/types'

export const useAppState = defineStore('app', {
  state: () => ({
    appBg: 'default' as appBp,
  }),
})
