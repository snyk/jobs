<template>
  <header class="vue--site-header">
    <LayoutContainer :class="computedClasses">
      <a href="/" class="vue--site-header__home-link">
        <SnykLogo
          class="vue--site-header__logo"
          fill-color="#fff"
          :size="52"
          data-snyk-test="TheSiteHeader: logo"
        />
      </a>
      <span class="vue--site-header__title">
        {{ title }}
      </span>
    </LayoutContainer>
  </header>
</template>

<script>
import LayoutContainer from '~/components/LayoutContainer/LayoutContainer';
import SnykLogo from '~/components/CustomIcons/Snyk';

export default {
  name: 'TheSiteHeader',
  components: {
    LayoutContainer,
    SnykLogo,
  },
  props: {
    title: {
      type: String,
    },
  },
  computed: {
    computedClasses() {
      return {
        'vue--site-header__container': true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--site-header {
  height: 64px;
  margin-bottom: space(l);

  background: linear-gradient(
    to right,
    color(gradient, purple-start) 0%,
    color(gradient, purple-end) 50%
  );

  &__container {
    overflow: visible;
    padding-top: space(xs);
    padding-bottom: space(s);

    position: relative;
    z-index: 100;
  }

  &__home-link {
    display: inline-block;
    padding-right: space(s);
    flex-grow: 2;

    &:focus-visible {
      outline: 2px solid color(ui, white);
      opacity: 1;
    }
  }

  &__title {
    color: color(ui, white);
    font-size: rem(22px);
    margin: 0.25em 0;

    @include media-query(s) {
      margin: 0.25em 0.5em;
    }
  }

  &__logo {
    position: relative;
    top: -3px;
  }
}
</style>
