import { shallowMount } from '@vue/test-utils';
import LayoutContainer from '~/components/LayoutContainer/LayoutContainer';

describe('LayoutContainer', () => {
  it('renders a container', () => {
    const wrapper = shallowMount(LayoutContainer);

    expect(wrapper).toMatchSnapshot();
  });
});
