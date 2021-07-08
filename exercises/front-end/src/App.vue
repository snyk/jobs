<template>
  <div id="app">
    <TheSiteHeader title="Snyk Dependency Tree Exercise" />
    <LayoutContainer>
      <DependenciesTree :depGraph="depGraph" />
    </LayoutContainer>
  </div>
</template>

<script>
import TheSiteHeader from '~/components/TheSiteHeader/TheSiteHeader.vue';
import LayoutContainer from '~/components/LayoutContainer/LayoutContainer';
import DependenciesTree from '~/components/DependenciesTree/DependenciesTree.vue';
import * as depGraph from '~/components/DependenciesTree/depGraph.fixture';

export default {
  name: 'App',
  components: {
    TheSiteHeader,
    LayoutContainer,
    DependenciesTree,
  },
  data() {
    return {
      depGraph,
    };
  },
};
</script>

<style></style>
