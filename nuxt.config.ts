import { presetIcons, presetWind } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import { presetKP } from './constants/uno-kp-preset'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: {
      name: 'scroll-x-reverse-transition',
      mode: 'out-in',
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@unocss/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind-compat.css',
    '~/assets/scss/styles.scss',
  ],
  unocss: {
    presets: [
      presetWind(),
      presetIcons(),
      presetKP(),
    ],
    transformers: [
      /* transformer directive to enable @apply feature on unocss */
      transformerDirectives(),
    ],
  },
  sourcemap: {
    server: true,
    client: false,
  },
})
