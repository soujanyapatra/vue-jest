/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import TicketList from '../components/ticketList.vue'

describe('Test ticketList component', () => {
  test('component output text with dynamic props', () => {
    const ticket = {
      title: 'Test ticket',
      price: 1000
    }
    const wrapper = mount(TicketList, {
      props: { ticket }
    })
    expect(wrapper.text()).toMatch(`Ticket title: ${ticket.title}Price is: ${ticket.price}Are you excited`)
  })
})
