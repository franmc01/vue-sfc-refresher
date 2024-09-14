import { describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChatHeader from '@/components/ChatHeader.vue'

describe('ChatHeader', () => {
  it('should render Vue Crush', () => {
    const wrapper = mount(ChatHeader, {
      props: {
        chatName: 'Vue Crush'
      }
    })

    expect(wrapper.find('span').text()).toBe('Vue Crush')
  })
})
