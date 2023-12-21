/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import MyComponent from '../pages/myComponent.vue'

describe('Test my-component', () => {
  test('component output text', () => {
    const wrapper = mount(MyComponent)
  
    expect(wrapper.text()).toBe('Test component: its a parent one  Hello from child component hello I am a card :)')
  })

  test('Particular single html attribute output', () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.find('[id="jest-test-id"]').text()).toEqual(
      'hello I am a card :)'
    );
  })
})
