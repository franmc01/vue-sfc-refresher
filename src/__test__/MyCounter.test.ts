import { mount } from '@vue/test-utils'
import SetupCounter from '@/components/SetupCounter.vue'
import { expect } from 'vitest'

describe('SetupCounter', () => {
  test('Render component with default value 0', async () => {
    const wrapper = mount(SetupCounter);
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Render component with 6 when increment', async () => {
    const wrapper = mount(SetupCounter, {
      props: {
        initialValue: 5,
      }
    });
    await wrapper.findAll('button')[0].trigger('click')
    expect(wrapper.find('h2').text()).toContain('6')
  })

  test('Render component with 5 when decrement', async () => {
    const wrapper = mount(SetupCounter, {
      props: {
        initialValue: 7,
      }
    });

    await wrapper.findAll('button')[1].trigger('click')
    await wrapper.findAll('button')[1].trigger('click')

    expect(wrapper.find('h2').text()).toContain('5')
  })

  test('Render component with initial value 7 and square 14', () => {
    const wrapper = mount(SetupCounter, {
      props: {
        initialValue: 7,
      }
    });
    expect(wrapper.find('[data-test="initial-value"]').text()).toContain('7')
    expect(wrapper.find('h3').text()).toContain('14')
  })
})
