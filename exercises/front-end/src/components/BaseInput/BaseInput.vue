<template>
  <LayoutFormElement
    class="vue--input"
    :class="computedClasses"
    :inline="inline"
    :fill-width="true"
  >
    <template v-if="label" #label>
      <label class="vue--input__label" :for="$attrs.id" v-text="label" />
    </template>
    <input
      ref="input"
      :type="type"
      v-bind="$attrs"
      class="vue--input__field"
      :class="computedInputClasses"
      v-on="listeners"
    />
    <BaseInputNote v-if="note" class="vue--input__note" :variant="noteVariant">
      {{ note }}
    </BaseInputNote>
  </LayoutFormElement>
</template>

<script>
import LayoutFormElement from '~/components/LayoutFormElement/LayoutFormElement';
import BaseInputNote from '~/components/BaseInputNote/BaseInputNote';
import { isInList } from '~/lib/prop-validators';

/**
 * A super flexible input field with optional label.
 */
export default {
  name: 'BaseInput',

  status: 'under-review',

  components: { LayoutFormElement, BaseInputNote },

  inheritAttrs: false,

  model: {
    event: 'change',
  },

  props: {
    /**
     * Sets the default type for the input to `text`.
     */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * The label of the form input field.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * Whether to show an error for this field
     * `true, false`
     */
    error: {
      type: Boolean,
      default: false,
    },
    /**
     * Manually trigger various states of the input.
     * `hover, active, focus`
     */
    state: {
      type: String,
      default: null,
      validator: isInList(['hover', 'active', 'focus']),
    },
    /**
     * Whether the form input field is displayed inline.
     * `true, false`
     */
    inline: {
      type: Boolean,
      default: false,
    },
    /**
     * Sizing for this input.
     * `small`
     */
    size: {
      type: String,
      default: null,
      validator: isInList(['small']),
    },
    /**
     * A note to be displayed below this input.
     */
    note: {
      type: String,
      default: null,
    },
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        // TODO: if we change 'change' to 'input' v-model
        // will work out of the box. Requires a refactor of
        // anything listening for the 'change' even however.
        change: (e) => this.$emit('change', e.target.value),
        input: (e) => this.$emit('change', e.target.value),
        focus: (e) => this.$emit('focus', e.target.value),
        blur: (e) => this.$emit('blur', e.target.value),
      };
    },
    computedClasses() {
      return {
        [`vue--input--${this.size}`]: this.size !== null,
      };
    },
    computedInputClasses() {
      return {
        [this.state]: this.state !== null,
        'vue--input__field--error': this.error,
      };
    },
    noteVariant() {
      return this.error ? 'error' : 'default';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--input {
  $self: &;

  &--small {
    #{$self}__field {
      line-height: rem(22px);
    }

    #{$self}__label {
      line-height: rem(22px);
    }
  }

  &__field {
    @include fieldStyles();
    @include hoverState();

    &[disabled],
    &:disabled {
      @include disabledState();
    }

    &--error {
      @include errorState();
    }
  }

  &__note {
    margin-top: space(xs);
  }
}
</style>
