import { shallowMount } from '@vue/test-utils';
import LayoutFormElement from '~/components/LayoutFormElement/LayoutFormElement';

describe('LayoutFormElement', () => {
  describe('Accessibility', () => {
    it('passes basic accessibility checks', async () => {
      const wrapper = shallowMount(LayoutFormElement);

      await expect(wrapper).toBeAccessible();
    });
  });

  describe('Snapshots', () => {
    it('renders as expected', () => {
      const wrapper = shallowMount(LayoutFormElement, {
        slots: {
          label: 'BaseBadge goes here',
          default: 'Field goes here',
        },
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('renders without label markup', () => {
      const wrapper = shallowMount(LayoutFormElement, {
        slots: {
          default: 'Field goes here',
        },
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('renders valid html', () => {
      const wrapper = shallowMount(LayoutFormElement, {
        slots: {
          default: 'Field goes here',
        },
      });

      expect(wrapper.html()).toHTMLValidate();
    });
  });
});
