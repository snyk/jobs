import { mount, shallowMount } from '@vue/test-utils';
import DependenciesTree from './DependenciesTree';
import * as depGraph from './depGraph.fixture';

jest.useFakeTimers();

describe('DependenciesTree', () => {
  it('renders as expected', () => {
    const wrapper = mount(DependenciesTree, {
      propsData: {
        depGraph,
        nodeId: 'root-node',
        forceCollapsedState: 'collapsed',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  describe('Defaults', () => {
    const wrapper = shallowMount(DependenciesTree, {
      propsData: { depGraph },
    });

    it('defaults to no forced collapsed state', () => {
      expect(wrapper.props('forceCollapsedState')).toEqual('expanded');
    });
  });

  describe('Behaviour', () => {
    it('handles the collapse state for children', async () => {
      const wrapper = mount(DependenciesTree, {
        propsData: {
          depGraph,
          forceCollapsedState: 'expanded',
          isRoot: false,
        },
      });

      jest.spyOn(wrapper.vm, 'toggleCollapsed');

      wrapper.vm.handleCollapse();

      expect(wrapper.vm.toggleCollapsed.mock.calls.length).toBe(1);
    });

    it('toggles collapsed state', () => {
      const wrapper = mount(DependenciesTree, {
        propsData: {
          depGraph,
          forceCollapsedState: 'expanded',
        },
      });
      wrapper.vm.toggleCollapsed();
      expect(wrapper.vm.collapsed).toBe(true);

      wrapper.vm.toggleCollapsed();
      expect(wrapper.vm.collapsed).toBe(false);
    });
  });
});
