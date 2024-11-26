import { shallowMount } from '@vue/test-utils'
import BaseButton from "@/components/UI/BaseButton/BaseButton.vue";

describe('BaseButton.vue', () => {
  it('render works correctly', () => {
    const wrapper = shallowMount(BaseButton);

    expect(wrapper.exists()).toBe(true);
  })

  it('check the primary color is default', () => {
    const wrapper = shallowMount(BaseButton);

    expect(wrapper.classes()).toContain('primary');
  })

  it('check error class if props.color = error', () => {
    const wrapper = shallowMount(BaseButton, {
      props: {
        color: 'error',
      }
    })

    expect(wrapper.classes()).toContain('error');
  })

  it('check icons class if props.icon = true', () => {
    const wrapper = shallowMount(BaseButton, {
      props: {
        icon: true
      }
    })

    expect(wrapper.classes()).toContain('icon');
  })

  it('check default slot', () => {
    const btnText = 'Test button';

    const wrapper = shallowMount(BaseButton, {
      slots: {
        default: btnText,
      }
    })

    expect(wrapper.text()).toBe(btnText);
  })
})
