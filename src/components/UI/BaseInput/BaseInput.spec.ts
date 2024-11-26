import { shallowMount, VueWrapper } from '@vue/test-utils'
import BaseInput from "@/components/UI/BaseInput/BaseInput.vue";

describe('BaseInput.vue', () => {

  const getInput = (wrapper: VueWrapper) => {
    return wrapper.find('.base-input__input');
  }

  it('render works correctly', () => {
    const wrapper = shallowMount(BaseInput);

    expect(wrapper.exists()).toBe(true);
  })

  it('check is type props works correctly', () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        type: 'number',
      }
    })

    expect(getInput(wrapper).attributes('type')).toBe('number');
  })

  it('check is label props works correctly', () => {
    const labelText = 'Test label';

    const wrapper = shallowMount(BaseInput, {
      props: {
        label: labelText,
      }
    })

    expect(wrapper.find('.base-input__label').text()).toBe(labelText);
  })

  it('check is error props works correctly', () => {
    const errorText = 'Error text';

    const wrapper = shallowMount(BaseInput, {
      props: {
        error: errorText,
      }
    })

    expect(getInput(wrapper).classes()).toContain('error');
    expect(wrapper.find('.base-input__error').text()).toBe(errorText);
  })

  it('check is update:modelValue emitted', async () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        modelValue: '',
      }
    })

    const input = getInput(wrapper);
    await input.setValue('test');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test']);
  })
})
