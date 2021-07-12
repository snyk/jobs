import { shallowMount, mount } from '@vue/test-utils';
import BaseSelect from '~/components/BaseSelect/BaseSelect';
import BaseInputNote from '~/components/BaseInputNote/BaseInputNote';

describe('BaseSelect', () => {
  const componentStubs = { ChevronDown: true };
  const props = {
    options: [
      { value: '1', title: 'Option 1' },
      { value: '2', title: 'Option 2' },
      { value: '3', title: 'Option 3' },
    ],
    id: 'id-drop-mic',
    name: 'name-drop-mic',
  };

  describe('Snapshots', () => {
    it('renders as expected', () => {
      const wrapper = shallowMount(BaseSelect, {
        propsData: props,
        stubs: componentStubs,
      });
      expect(wrapper).toMatchSnapshot();
    });

    it('renders as minimal variant', () => {
      const wrapper = shallowMount(BaseSelect, {
        propsData: {
          ...props,
          variant: 'minimal',
        },
        stubs: componentStubs,
      });
      expect(wrapper).toMatchSnapshot();
    });

    it('renders as minimal inverted variant', () => {
      const wrapper = shallowMount(BaseSelect, {
        propsData: {
          ...props,
          variant: 'minimal-inverted',
        },
        stubs: componentStubs,
      });
      expect(wrapper).toMatchSnapshot();
    });

    it('renders valid html', () => {
      const wrapper = shallowMount(BaseSelect, {
        propsData: props,
        stubs: componentStubs,
      });

      expect(wrapper.html()).toHTMLValidate();
    });
  });

  describe('Defaults', () => {
    const wrapper = mount(BaseSelect, {
      propsData: props,
    });

    it('defaults to the first item being selected', () => {
      expect(wrapper.vm.selected).toEqual(props.options[0].value);
    });
  });

  describe('Computed Properties', () => {
    it('computes wrapper classes', () => {
      const wrapper = shallowMount(BaseSelect, {
        propsData: {
          ...props,
          disabled: true,
          fillWidth: true,
          size: 'small',
        },
        stubs: componentStubs,
      });

      expect(wrapper.vm.computedWrapperClasses).toEqual({
        'vue--select--default': true,
        'vue--select--fill-width': true,
        'vue--select--small': true,
      });
    });

    it('computes input classes', () => {
      const wrapper = shallowMount(BaseSelect, {
        propsData: {
          ...props,
          error: true,
        },
        stubs: componentStubs,
      });

      expect(wrapper.vm.computedInputClasses).toEqual({
        'vue--select__field--error': true,
      });
    });

    it('computes input classes with optional classes', () => {
      const wrapper = shallowMount(BaseSelect, {
        propsData: {
          ...props,
          state: 'hover',
        },
        stubs: componentStubs,
      });

      expect(wrapper.vm.computedInputClasses).toEqual({
        hover: true,
        'vue--select__field--error': false,
      });
    });
  });

  describe('With note', () => {
    const wrapper = shallowMount(BaseSelect, {
      propsData: {
        ...props,
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
    it('emits a change event', async () => {
      const wrapper = shallowMount(BaseSelect, { propsData: props });
      const chosenValue = '3';
      const select = wrapper.find('select');
      select.element.value = chosenValue;
      await select.trigger('change');
      const events = wrapper.emitted();
      expect(events.change).toHaveLength(1);
      expect(events.change[0]).toEqual([chosenValue]);
    });
  });
});
