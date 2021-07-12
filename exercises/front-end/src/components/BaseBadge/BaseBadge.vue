<template>
  <span
    class="vue--badge"
    :class="computedClasses"
    :data-snyk-ignore-wcag2aa="ignoreWcag2aa"
  >
    <span v-if="icon" class="vue--badge__icon">
      <component :is="icon" />
    </span>
    <span class="vue--badge__text">
      <slot />
    </span>
  </span>
</template>

<script>
import { isInList } from '~/lib/prop-validators';

export const variants = [
  'default',

  'critical-severity',
  'high-severity',
  'medium-severity',
  'low-severity',
  'no-severity',

  'action',
  'action-create',

  'complementary-blue',
  'complementary-burgundy',

  'info',
  'success',
  'warning',
  'error',
  'danger',

  'inverted',
  'social-twitter',
];

/**
 * A component for consistent labels
 */
export default {
  name: 'BaseBadge',

  props: {
    variant: {
      type: String,
      default: 'default',
      validator: isInList(variants),
    },

    /**
     * An optional Vue component.
     */
    icon: {
      type: Object,
      default: null,
    },

    /**
     * A string setting the size for the component
     */
    size: {
      type: String,
      default: null,
      validator: isInList(['extra-small', 'small', 'large']),
    },

    /**
     * Render as a ghost/hollow label.
     */
    ghost: {
      type: Boolean,
      default: false,
    },
    /**
     * Render with uppercase text.
     */
    uppercase: {
      type: Boolean,
      default: true,
    },
    pill: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClasses() {
      return {
        [`vue--badge--with-icon`]: !!this.icon,
        [`vue--badge--${this.variant}`]: !!this.variant,
        [`vue--badge--ghost`]: this.ghost !== false,
        [`vue--badge--${this.size}`]: !!this.size,
        [`vue--badge--pill`]: this.pill,
        [`vue--badge--uppercase`]: this.uppercase,
      };
    },
    ignoreWcag2aa() {
      // Design decision - medium severity must be orange (not brown) and there's
      // more wiggle room for incidental information
      return ['high-severity', 'medium-severity', 'low-severity'].includes(
        this.variant,
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--badge {
  $self: &;

  border-radius: global(border-radius, half);
  border: 1px solid transparent;
  color: color(ui, white);
  display: inline-block;
  padding: space(xs) - 1px space(s);
  font-size: rem(14px);
  line-height: 1;
  font-weight: normal;
  background-color: color(action);
  position: relative;

  + #{$self} {
    margin-left: space(xxs);
  }

  &__text {
    position: relative;
    top: 1px;
  }

  &__icon {
    left: space(xs);
    position: absolute;
    top: 5px;

    ::v-deep svg {
      height: rem(18px);
      width: rem(18px);
    }
  }

  &--default {
    background-color: color(neutral, 96);
    border-color: color(neutral, 84);
    color: color(neutral, 42);
  }

  &--critical-severity {
    background-color: color(severity, critical);
    border-color: color(severity, critical);

    &#{$self}--ghost {
      color: color(severity, critical);
    }
  }

  &--high-severity {
    background-color: color(severity, high);
    border-color: color(severity, high);

    &#{$self}--ghost {
      color: color(severity, high);
    }
  }
  &--medium-severity {
    background-color: color(severity, medium);
    border-color: color(severity, medium);

    &#{$self}--ghost {
      color: color(severity, medium);
    }
  }
  &--low-severity {
    background-color: color(severity, low);
    border-color: color(severity, low);

    &#{$self}--ghost {
      color: color(severity, low);
    }
  }
  &--no-severity {
    background-color: color(severity, none);
    border-color: color(severity, none);

    &#{$self}--ghost {
      color: color(severity, none);
    }
  }

  &--action {
    background-color: color(action);
    border-color: color(action);

    &#{$self}--ghost {
      color: color(action);
    }
  }
  &--action-create {
    background-color: color(action, create);
    border-color: color(action, create);

    &#{$self}--ghost {
      color: color(action, create);
    }
  }

  &--complementary-blue {
    background-color: color(complementary, blue);
    border-color: color(complementary, blue);

    &#{$self}--ghost {
      color: color(complementary, blue);
    }
  }
  &--complementary-burgundy {
    background-color: color(complementary, burgundy);
    border-color: color(complementary, burgundy);

    &#{$self}--ghost {
      color: color(complementary, burgundy);
    }
  }

  &--social-twitter {
    background-color: color(social, twitter);
    border-color: color(social, twitter);

    &#{$self}--ghost {
      color: color(social, twitter);
    }
  }

  &--info {
    background-color: color(alert, info);
    border-color: color(alert, info-border);
    color: color(alert, info-text);

    &#{$self}--ghost {
      border-color: color(alert, info-text);
    }
  }
  &--warning {
    background-color: color(alert, warning);
    border-color: color(alert, warning-border);
    color: color(alert, warning-text);

    &#{$self}--ghost {
      border-color: color(alert, warning-text);
    }
  }
  &--success {
    background-color: color(alert, success);
    border-color: color(alert, success-border);
    color: color(alert, success-text);

    &#{$self}--ghost {
      border-color: color(alert, success-text);
    }
  }
  &--error,
  &--danger {
    background-color: color(alert, danger);
    border-color: color(alert, danger-border);
    color: color(alert, danger-text);

    &#{$self}--ghost {
      border-color: color(alert, danger-text);
    }
  }
  &--inverted {
    background-color: color(ui, white);
    border-color: color(ui, white);
    color: color(base, dimmed);

    &#{$self}--ghost {
      background-color: transparent;
      color: color(ui, white);
    }
  }

  &--with-icon {
    padding-left: space(l);

    &#{$self}--extra-small {
      padding-left: space() + space(xs);

      #{$self}__icon {
        top: 2px;

        ::v-deep svg {
          height: rem(11px);
          width: rem(11px);
        }
      }
    }
    &#{$self}--small {
      padding-left: space() + space(s);

      #{$self}__icon {
        top: 2px;

        ::v-deep svg {
          height: rem(14px);
          width: rem(14px);
        }
      }
    }
    &#{$self}--large {
      padding-left: space(l) + space(xs);

      #{$self}__icon {
        top: 7px;

        ::v-deep svg {
          height: rem(24px);
          width: rem(24px);
        }
      }
    }
  }

  &--pill {
    border-radius: global(border-radius, round);
  }

  &--uppercase {
    text-transform: uppercase;
  }

  &--ghost {
    background-color: transparent;
  }

  &--extra-small {
    font-size: rem(9px);
    padding: space(xxxs) + 1px space(xxs) space(xxxs);

    #{$self} {
      &__text {
        top: 0;
      }

      &__icon {
        width: rem(20px);
      }
    }

    &--w-icon {
      padding-left: rem(22px);
    }
  }

  &--small {
    font-size: rem(11px);
    padding: space(xxs) + 1px space(xs) space(xxxs) + 1px;

    #{$self} {
      &__text {
        top: 0;
      }

      &__icon {
        width: rem(20px);
      }
    }

    &--w-icon {
      padding-left: rem(22px);
    }
  }

  &--large {
    font-size: rem(16px);
    padding: space(s) - 1px space();

    #{$self}__text {
      top: 2px;
    }
  }
}
</style>
