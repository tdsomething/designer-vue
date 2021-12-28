import { test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/index.vue'

test('mount component', async () => {
  const wrapper = mount(Button, {
    props: {
      type: 'default'
    }
  })
})
