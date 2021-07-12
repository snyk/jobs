import { shallowMount } from '@vue/test-utils';
import BaseInputNote from '~/components/BaseInputNote/BaseInputNote';

describe('BaseInputNote', () => {
  const wrapper = shallowMount(BaseInputNote);

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Variants', () => {
    const wrapper = shallowMount(BaseInputNote);

    it('computes classes for error', async () => {
      await wrapper.setProps({
        variant: 'error',
      });

      expect(wrapper.vm.computedClasses).toEqual({
        'vue--input-note--error': true,
      });
    });

    it('computes classes for info', async () => {
      await wrapper.setProps({
        variant: 'info',
      });

      expect(wrapper.vm.computedClasses).toEqual({
        'vue--input-note--info': true,
      });
    });
  });
});
