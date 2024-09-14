import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import ChatBubble from '@/components/ChatBubble.vue'

describe('ChatBubble', () => {
  test('renders correctly my message', () => {

    const message = 'Hello World !';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: true,
      }
    })

    expect(wrapper.find('.bg-blue-200').text()).toBe(message)
  })
})
