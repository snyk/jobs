import { shallowMount } from '@vue/test-utils';
import BaseInput from '~/components/BaseInput/BaseInput';
import BaseInputNote from '~/components/BaseInputNote/BaseInputNote';

describe('BaseInput', () => {
  const wrapper = shallowMount(BaseInput);

  it('renders as expected', async () => {
    await wrapper.setProps({
      id: 'some-id',
      type: 'password',
      value: '**********',
      disabled: true,
      name: 'password',
      placeholder: 'Enter a password',
      label: 'Password',
      inline: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  describe('Computed Properties', () => {
    const wrapper = shallowMount(BaseInput, {
      propsData: {
        size: 'small',
      },
    });

    it('computes classes', () => {
      expect(wrapper.vm.computedClasses).toEqual({
        'vue--input--small': true,
      });
    });

    it('computes input classes', async () => {
      await wrapper.setProps({
        state: 'hover',
        error: true,
      });

      expect(wrapper.vm.computedInputClasses).toEqual({
        hover: true,
        'vue--input__field--error': true,
      });
    });
  });

  describe('With note', () => {
    const wrapper = shallowMount(BaseInput, {
      propsData: {
        note: 'Note',
      },
    });

    it('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('contains BaseInputNote', () => {
      expect(wrapper.findComponent(BaseInputNote).isVisible()).toBe(true);
      expect(wrapper.vm.noteVariant).toEqual('default');
    });

    it('displays error variant', async () => {
      await wrapper.setProps({
        error: true,
      });
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.vm.noteVariant).toEqual('error');
    });

    it('does not contain BaseInputNote when note prop not set', async () => {
      await wrapper.setProps({
        note: undefined,
      });
      expect(wrapper.findComponent(BaseInputNote).exists()).toBe(false);
    });
  });

  describe('Events', () => {
    const wrapper = shallowMount(BaseInput);

    it('emits a focus event', async () => {
      const input = wrapper.find('input');
      await input.trigger('focus');
      expect(wrapper.emitted('focus')).toBeTruthy();
    });

    it('emits a changed event', async () => {
      const input = wrapper.find('input');
      input.element.value = 'some text';
      await input.trigger('input');
      expect(wrapper.emitted('change')).toBeTruthy();
      expect(wrapper.emitted('change')[0]).toEqual(['some text']);
    });
  });
});
