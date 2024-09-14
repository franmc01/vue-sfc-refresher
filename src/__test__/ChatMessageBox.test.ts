import { expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChatMessageBox from '@/components/ChatMessageBox.vue'

describe('ChatMessageBox', () => {
  const wrapper = mount(ChatMessageBox)

  test('should render input component with button', () => {
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('should emits event when user sendMessage', async () => {
    const message0 = ''
    const message1 = 'Test value 1'

    await wrapper.find('input[type="text"]').setValue(message0)
    await wrapper.find('button').trigger('click')

    await wrapper.find('input[type="text"]').setValue(message1)
    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('send-message'))
  })

  it('should emits event when user keypress enter', async () => {
    const message1 = 'Hello World'

    const input = await wrapper.find('input[type="text"]')
    await input.setValue(message1)

    await input.trigger('keypress.enter')
    expect(wrapper.emitted('send-message'))
  })

})
