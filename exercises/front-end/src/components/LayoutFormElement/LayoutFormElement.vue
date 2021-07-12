<template>
  <div class="vue--layout-form-element" :class="computedClasses">
    <div v-if="showLabelSlot" class="vue--layout-form-element__label">
      <slot name="label" />
    </div>
    <div class="vue--layout-form-element__field">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutFormElement',
  status: 'beta',

  props: {
    /**
     * Whether the form input field is displayed inline.
     */
    inline: {
      type: Boolean,
      default: false,
    },
    /**
     * Should fill the available width.
     */
    fillWidth: {
      type: Boolean,
      default: false,
    },
    /**
     * Set the adjacent component spacing.
     */
    spacing: {
      type: String,
      default: null,
    },
    /**
     * Regular weight label.
     */
    regular: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    computedClasses() {
      return {
        [`vue--layout-form-element--${this.spacing}`]: this.spacing,
        'vue--layout-form-element--inline': this.inline,
        'vue--layout-form-element--fill-width': this.fillWidth,
        'vue--layout-form-element--regular': this.regular,
      };
    },
    showLabelSlot() {
      return !!this.$slots['label'];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--layout-form-element {
  $self: &;

  + #{$self} {
    margin-top: space();
  }

  &__label {
    display: block;
    line-height: 1.3;
    margin: 0 space(xs) space(xs) 0;
  }

  &:not(&--regular) &__label {
    @include font-stack(semibold);
  }

  &__field {
    display: block;
  }

  &--fill-width {
    #{$self}__field {
      width: 100%;
    }
  }

  &--inline {
    align-items: center;
    display: flex;

    #{$self}__label {
      margin-bottom: 0;
      margin-right: space(s);
    }

    &#{$self}--fill-width {
      #{$self}__field {
        width: 100%;
      }
    }
  }

  &--none + #{$self} {
    margin-top: 0;
  }

  @each $key, $value in map-get($spacing, 'default') {
    &--#{$key} + #{$self} {
      margin-top: space($key);
    }
  }
}
</style>
