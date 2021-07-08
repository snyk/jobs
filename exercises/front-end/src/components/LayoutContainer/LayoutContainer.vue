<template>
  <div class="vue--layout-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LayoutContainer',
  status: 'ready',
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--layout-container {
  max-width: global(site, maxWidth);
  margin-left: auto;
  margin-right: auto;
  padding-left: space(m) - 4px; // Adjustment to match legacy styles.
  padding-right: space(m) - 4px; // Adjustment to match legacy styles.
}
</style>
