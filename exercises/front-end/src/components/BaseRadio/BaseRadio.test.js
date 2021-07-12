import { shallowMount } from '@vue/test-utils';
import BaseRadio from '~/components/BaseRadio/BaseRadio';

describe('BaseRadio', () => {
  describe('Snapshots', () => {
    it('renders as expected', () => {
      const wrapper = shallowMount(BaseRadio, {
        propsData: {
          name: 'radio',
          label: "I'm a radio input",
        },
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('renders valid html', () => {
      const wrapper = shallowMount(BaseRadio, {
        propsData: {
          name: 'radio',
          label: "I'm a radio input",
        },
      });

      expect(wrapper.html()).toHTMLValidate();
    });
  });

  describe('Defaults', () => {
    const wrapper = shallowMount(BaseRadio, {
      propsData: {
        name: 'radio',
      },
    });

    it('defaults to empty label', () => {
      expect(wrapper.props('label')).toBeNull();
    });

    it('defaults to enabled', () => {
      expect(wrapper.props('disabled')).toBe(false);
    });

    it('defaults to unchecked', () => {
      expect(wrapper.props('checked')).toBe(false);
    });
  });

  describe('Events', () => {
    const wrapper = shallowMount(BaseRadio, {
      propsData: {
        name: 'radio',
        value: 'dummy-value',
      },
    });

    it('emits a change event', async () => {
      const radiobutton = wrapper.find('input');
      await radiobutton.trigger('change');
      expect(wrapper.emitted('change')).toHaveLength(1);
      expect(wrapper.emitted('change')[0][0]).toEqual('dummy-value');
      expect(wrapper.emitted('change')[0][1]).toEqual('radio');
    });
  });
});
