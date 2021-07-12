<template>
  <div class="vue--input-note" :class="computedClasses">
    <slot />
  </div>
</template>

<script>
import { isInList } from '~/lib/prop-validators';

/**
 * A note to appear under an input
 */
export default {
  name: 'BaseInputNote',

  status: 'under-review',

  props: {
    /**
     * Variant of BaseInputNote. Must be one of `default`, `info`, `warning`,
     * `error`, `danger`, `success`. Defaults to `default`
     */
    variant: {
      type: String,
      default: 'info',
      validator: isInList([
        'default',
        'info',
        'warning',
        'error',
        'danger',
        'success',
      ]),
    },
  },

  computed: {
    computedClasses() {
      return {
        [`vue--input-note--${this.variant}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--input-note {
  @include typeset(caption);

  &--default,
  &--info {
    color: color(base, dimmed);
  }

  &--warning {
    color: color(alert, warning-text);
  }

  &--error,
  &--danger {
    color: color(alert, danger-text);
  }

  &--success {
    color: color(alert, success-text);
  }
}
</style>
