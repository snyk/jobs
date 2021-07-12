import { shallowMount, mount } from '@vue/test-utils';
import BaseInputSubmit from '~/components/BaseInputSubmit/BaseInputSubmit';
import BaseButton from '~/components/BaseButton/BaseButton';

describe('BaseInputSubmit', () => {
  const wrapper = shallowMount(BaseInputSubmit, {
    propsData: { placeholder: 'BaseInput Placeholder' },
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders valid html', () => {
    const wrapper = mount(BaseInputSubmit, {
      propsData: { placeholder: 'BaseInput Placeholder' },
    });
    expect(wrapper.html()).toHTMLValidate();
  });

  describe('Submit', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);

    const wrapper = mount(BaseInputSubmit, {
      propsData: { placeholder: 'BaseInput Placeholder' },
      attachTo: document.getElementById('root'),
    });

    afterAll(() => {
      wrapper.destroy();
    });

    it('submits correct information', async () => {
      await wrapper.setData({ value: 'data' });
      await wrapper.findComponent(BaseButton).trigger('click');
      const events = wrapper.emitted();

      expect(events.submit).toHaveLength(1);
      expect(events.submit[0]).toEqual(['data']);
    });
  });

  describe('Character limit', () => {
    it('enforces the character limit', async () => {
      const wrapper = shallowMount(BaseInputSubmit, {
        propsData: { placeholder: 'BaseInput Placeholder' },
        attrs: { maxlength: 10 },
      });
      expect(wrapper.vm.noteClasses).toEqual({
        'vue--input-submit__note--show': false,
      });

      await wrapper.setData({ value: 'text-longer-than-limit' });
      expect(wrapper.vm.noteClasses).toEqual({
        'vue--input-submit__note--show': true,
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
