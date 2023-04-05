import type { Directive } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  interface RippleBindings {
    color?: string
  }

  const ripple: Directive<HTMLElement, RippleBindings> = {
    mounted(el, bindings) {
      const color = bindings.value?.color

      el.style.overflow = 'hidden'
      el.style.position = 'relative'

      el.addEventListener('click', (e) => {
        const x = e.offsetX
        const y = e.offsetY
        const rippleElement = document.createElement('span')

        rippleElement.classList.add('ripple')
        rippleElement.style.left = `${x}px`
        rippleElement.style.top = `${y}px`
        rippleElement.style.background = color || 'rgba(237, 237, 237, 0.5)'

        el.insertAdjacentElement('afterbegin', rippleElement)

        setTimeout(() => {
          rippleElement.remove()
        }, 600)
      })
    },
  }

  nuxtApp.vueApp.directive('ripple', ripple)
})
