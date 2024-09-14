import { mount } from '@vue/test-utils'
import IndecisionView from '@/views/IndecisionView.vue'
import { expect } from 'vitest'
import ChatMessages from '@/components/ChatMessages.vue'

describe('IndecisionView', () => {
  it('should render parent component', () => {
    const wrapper = mount(IndecisionView)
    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true)
  })
})
