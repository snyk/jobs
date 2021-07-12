import { shallowMount } from '@vue/test-utils';
import BaseButton from './BaseButton';

const slots = {
  default: 'Button text',
};

describe('BaseButton', () => {
  describe('Accessibility', () => {
    it('passes basic accessibility checks', async () => {
      const wrapper = shallowMount(BaseButton, { slots });
      await expect(wrapper).toBeAccessible();
    });
  });

  describe('Snapshots', () => {
    it('renders as expected', () => {
      const wrapper = shallowMount(BaseButton, { slots });
      expect(wrapper).toMatchSnapshot();
    });

    it('renders as expected with a passed wrapper', () => {
      const wrapper = shallowMount(BaseButton, {
        propsData: { wrapper: 'a' },
        slots,
      });
      expect(wrapper).toMatchSnapshot();
    });

    it('renders valid html', () => {
      const wrapper = shallowMount(BaseButton, {
        propsData: { wrapper: 'a' },
        slots,
      });
      expect(wrapper.html()).toHTMLValidate();
    });
  });
});
