/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import FruitList from '../pages/fruitList.vue'

describe('FruitList component small parts test', () => {
  const wrapper = shallowMount(FruitList)
  
  test('test the fruits variable', () => {
    expect(wrapper.vm.fruits).toEqual(['apple', 'banana', 'orange'])
  })

  test('test computed one numFruits', () => {
    expect(wrapper.vm.numFruits).toEqual(3)
  })
})
