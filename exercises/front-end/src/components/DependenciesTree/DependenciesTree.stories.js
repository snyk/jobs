import '~/assets/scss/styles.scss';
import DependenciesTree from './DependenciesTree';

import * as depGraph from './depGraph.fixture';

export default {
  title: 'Library/DependenciesTree',
  component: DependenciesTree,
};

export const Default = () => ({
  components: { DependenciesTree },
  provide: {
    project: { type: 'npm' },
  },
  props: {
    depGraph: {
      default: depGraph,
    },
    forceCollapsedState: {
      default: 'expanded',
    },
  },
  template: `<DependenciesTree v-bind="$props" />`,
});
