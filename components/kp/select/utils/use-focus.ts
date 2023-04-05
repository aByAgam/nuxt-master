import { focusable } from 'tabbable'
import type { Ref } from 'vue'

export function useFocus(target: Ref<HTMLElement>, repeat = true) {
  function travel(step: number) {
    const elements = focusable(target.value)
    const index = elements.indexOf(document.activeElement as HTMLElement)
    const clamp = useClamp(index + step, 0, elements.length - 1)
    const nextIndex = repeat ? ((index + step) % elements.length) : clamp.value
    const targetFocus = elements.at(nextIndex)

    if (targetFocus !== undefined)
      targetFocus.focus()
  }

  function next() {
    travel(1)
  }

  function prev() {
    travel(-1)
  }

  return {
    next,
    prev,
  }
}
