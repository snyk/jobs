import { shallowMount, mount } from '@vue/test-utils';
import TheSiteHeader from './TheSiteHeader';

describe('TheSiteHeader', () => {
  describe('Accessibility', () => {
    it('passes basic accessibility checks', async () => {
      const wrapper = shallowMount(TheSiteHeader);
      await expect(wrapper).toBeAccessible();
    });
  });

  describe('Snapshots', () => {
    it('renders as expected', () => {
      const wrapper = shallowMount(TheSiteHeader);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders valid html', () => {
      const wrapper = mount(TheSiteHeader);
      expect(wrapper.html()).toHTMLValidate();
    });
  });
});
