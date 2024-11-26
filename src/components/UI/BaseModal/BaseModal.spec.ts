import {shallowMount} from '@vue/test-utils';
import BaseModal from "@/components/UI/BaseModal/BaseModal.vue";
import BaseButton from '@/components/UI/BaseButton/BaseButton.vue';

describe('BaseModal.vue', () => {
  const factory = (props = {}, slots = {}) => {
    return shallowMount(BaseModal, {
      props: {
        showModal: true,
        title: 'Test Modal',
        id: 'test-id',
        ...props,
      },
      slots,
      global: {
        components: {BaseButton},
      },
    });
  };

  it('renders the modal when showModal is true', () => {
    const wrapper = factory();

    expect(wrapper.find('.modal__background').exists()).toBe(true);
  });

  it('does not render the modal when showModal is false', () => {
    const wrapper = factory({ showModal: false });

    expect(wrapper.find('.modal__background').exists()).toBe(false);
  });

  it('renders the correct title', () => {
    const title = 'Custom Title';
    const wrapper = factory({ title });

    expect(wrapper.find('.modal__title').text()).toBe(title);
  });

  it('renders content in the body slot', () => {
    const slot = '<p>Body content</p>';
    const wrapper = factory({}, { body: slot });

    expect(wrapper.find('.modal__body').html()).toContain(slot);
  });

  // it('renders default footer button when footer slot is not provided', () => {
  //   const wrapper = factory();
  //
  //   expect(wrapper.find('.modal__footer button').exists()).toBe(true);
  //   expect(wrapper.find('.modal__footer button').text()).toBe('Сохранить');
  // });

  it('renders content in the footer slot', () => {
    const text = 'Custom Footer Button';
    const wrapper = factory({}, { footer: `<button>${text}</button>` });

    expect(wrapper.find('.modal__footer').html()).toContain(text);
  });

  it('emits close-modal event when close button is clicked', async () => {
    const wrapper = factory();

    await wrapper.findComponent(BaseButton).trigger('click');

    expect(wrapper.emitted('close-modal')).toBeTruthy();
  });

  it('emits close-modal event when overlay is clicked', async () => {
    const wrapper = factory();

    await wrapper.find('.modal__overlay').trigger('click');

    expect(wrapper.emitted('close-modal')).toBeTruthy();
  });

  it('does not emit close-modal event when modal container is clicked', async () => {
    const wrapper = factory();

    await wrapper.find('.modal__container').trigger('click');

    expect(wrapper.emitted('close-modal')).toBeFalsy();
  });
});