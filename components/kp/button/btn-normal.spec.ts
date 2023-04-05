import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import btnNormalVue from './btn-normal.vue'
describe('btnNormalVue', () => {
  it('displays a non authorized message', () => {
    const msg = 'submit'
    const wrapper = mount(btnNormalVue
      , {
        props: {
          msg,
        },
      })

    console.log(wrapper.html())

    expect(wrapper.find('span').text()).toBe('Not Authorized')
    expect(wrapper.find('button').text()).toBe('submit')
  })
})
