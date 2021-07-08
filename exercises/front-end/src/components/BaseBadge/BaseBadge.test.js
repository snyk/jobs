import BaseBadge from '~/components/BaseBadge/BaseBadge';
import { shallowMount } from '@vue/test-utils';

describe('BaseBadge', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(BaseBadge, {
      slots: {
        default: 'Foo',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders with variant', () => {
    const wrapper = shallowMount(BaseBadge, {
      propsData: {
        variant: 'high-severity',
      },
      slots: {
        default: 'Foo',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders with tooltip', () => {
    const wrapper = shallowMount(BaseBadge, {
      propsData: {
        tooltip: {
          description: 'Tooltip content here.',
        },
      },
      slots: {
        default: 'Foo',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders as ghost', () => {
    const wrapper = shallowMount(BaseBadge, {
      propsData: {
        ghost: true,
      },
      slots: {
        default: 'Foo',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders as lowercase', () => {
    const wrapper = shallowMount(BaseBadge, {
      propsData: {
        uppercase: false,
      },
      slots: {
        default: 'Foo',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders as pill', () => {
    const wrapper = shallowMount(BaseBadge, {
      propsData: {
        pill: true,
      },
      slots: {
        default: 'Foo',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders as small', () => {
    const wrapper = shallowMount(BaseBadge, {
      propsData: {
        size: 'small',
      },
      slots: {
        default: 'Foo',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
