import type { Preset } from 'unocss'

/* UnoCSS Preset for Kreditplus */
/* By KPM LOAF Team */
/* NOTE : restart dev server after change */

export const presetKP = (): Preset => ({
  name: 'KreditPlus',
  theme: {
    fontSize: {
      h1: ['80px', 1.7],
      h2: ['60px', 1.7],
      h3: ['40px', 1.7],
      h4: ['30px', 1.7],
      h5: ['24px', 1.7],
      h6: ['20px', 1.7],
      body: ['16px', 1.7],
      caption: ['14px', 1.5],
      small: ['12px', 1.5],
      tiny: ['10px', 1.4],
    },
    fontWeight: {
      bold: 700,
      medium: 500,
      regular: 500,
      light: 300,
    },
    colors: {
      primary: {
        DEFAULT: 'var(--kp-yellow-500)',
        900: 'var(--kp-yellow-900)',
        800: 'var(--kp-yellow-800)',
        700: 'var(--kp-yellow-700)',
        600: 'var(--kp-yellow-600)',
        500: 'var(--kp-yellow-500)',
        400: 'var(--kp-yellow-400)',
        300: 'var(--kp-yellow-300)',
        200: 'var(--kp-yellow-200)',
        100: 'var(--kp-yellow-100)',
        50: 'var(--kp-yellow-50)',
      },
      black: {
        DEFAULT: 'var(--black-800)',
        900: 'var(--black-900)',
        800: 'var(--black-800)',
        700: 'var(--black-700)',
        600: 'var(--black-600)',
        500: 'var(--black-500)',
        400: 'var(--black-400)',
        300: 'var(--black-300)',
        200: 'var(--black-200)',
        100: 'var(--black-100)',
        50: 'var(--black-50)',
      },
      danger: {
        DEFAULT: 'var(--system-danger-500)',
        700: 'var(--system-danger-700)',
        600: 'var(--system-danger-600)',
        500: 'var(--system-danger-500)',
        400: 'var(--system-danger-400)',
        300: 'var(--system-danger-300)',
        200: 'var(--system-danger-200)',
        100: 'var(--system-danger-100)',
      },
      warning: {
        DEFAULT: 'var(--system-warning-500)',
        700: 'var(--system-warning-700)',
        600: 'var(--system-warning-600)',
        500: 'var(--system-warning-500)',
        400: 'var(--system-warning-400)',
        300: 'var(--system-warning-300)',
        200: 'var(--system-warning-200)',
        100: 'var(--system-warning-100)',
      },
      success: {
        DEFAULT: 'var(--system-success-500)',
        700: 'var(--system-success-700)',
        600: 'var(--system-success-600)',
        500: 'var(--system-success-500)',
        400: 'var(--system-success-400)',
        300: 'var(--system-success-300)',
        200: 'var(--system-success-200)',
        100: 'var(--system-success-100)',
        50: 'var(--system-success-50)',
      },
      blue: {
        DEFAULT: 'var(--kp-blue-600)',
        900: 'var(--kp-blue-900)',
        800: 'var(--kp-blue-800)',
        700: 'var(--kp-blue-700)',
        600: 'var(--kp-blue-600)',
        500: 'var(--kp-blue-500)',
        400: 'var(--kp-blue-400)',
        300: 'var(--kp-blue-300)',
        200: 'var(--kp-blue-200)',
        100: 'var(--kp-blue-100)',
        50: 'var(--kp-blue-50)',
      },
      red: {
        DEFAULT: 'var(--kp-red-700)',
        900: 'var(--kp-red-900)',
        800: 'var(--kp-red-800)',
        700: 'var(--kp-red-700)',
        600: 'var(--kp-red-600)',
        500: 'var(--kp-red-500)',
        400: 'var(--kp-red-400)',
        300: 'var(--kp-red-300)',
        200: 'var(--kp-red-200)',
        100: 'var(--kp-red-100)',
        50: 'var(--kp-red-50)',
      },
    },
  },
  shortcuts: [
    [/^kp-text-(.*)-(.*)$/, ([, size, weight]) => `text-${size} font-${weight}`],
  ],
})
