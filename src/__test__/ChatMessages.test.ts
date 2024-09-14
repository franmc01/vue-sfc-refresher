import { mount } from '@vue/test-utils'
import ChatMessages from '@/components/ChatMessages.vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { expect, vi } from 'vitest'
import { watch } from 'vue'

const messages: ChatMessage[] = [
  {
    id: 1,
    message: 'Hello',
    itsMine: true,
    image: ''
  },
  {
    id: 2,
    message: 'World',
    itsMine: false,
    image: ''
  }
]

describe('ChatMessages', () => {
  const wrapper = mount(ChatMessages, {
    props: {
      messages
    }
  })

  it('should render chat messages', () => {
    const chatMessages = wrapper.findAllComponents({ name: 'ChatBubble' })
    expect(chatMessages.length).toBe(messages.length)
  })

  it('should executed scrollTo function', async () => {
    const scrollToSpy = vi.fn()

    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement
    chatRef.scrollTo = scrollToSpy

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'Hey', image: '', itsMine: true }]
    })

    await new Promise(resolve => setTimeout(resolve, 150))

    expect(scrollToSpy).toHaveBeenCalledTimes(1)
  })
})
