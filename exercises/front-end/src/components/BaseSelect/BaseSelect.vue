<template>
  <LayoutFormElement
    class="vue--select"
    :class="computedWrapperClasses"
    :inline="inline"
    :fill-width="fillWidth"
  >
    <template v-if="label" #label>
      <label class="vue--select__label" :for="$attrs.id" v-text="label" />
    </template>
    <div class="vue--select__container">
      <select
        v-bind="$attrs"
        :class="computedInputClasses"
        class="vue--select__field"
        v-on="listeners"
      >
        <option
          v-for="option in options"
          :key="option.value"
          class="vue--select__option"
          :value="option.value"
          :selected="option.value === selected"
          :disabled="option.disabled"
          v-text="option.title"
        />
      </select>
      <ChevronDown class="vue--select__arrow" />
      <div
        v-if="showSelectedValue"
        class="vue--select__selected-value"
        v-text="selectedValueTitle"
      />
    </div>
    <BaseInputNote v-if="note" class="vue--select__note" :variant="noteVariant">
      {{ note }}
    </BaseInputNote>
  </LayoutFormElement>
</template>

<script>
import ChevronDown from 'icons/ChevronDown';
import LayoutFormElement from '~/components/LayoutFormElement/LayoutFormElement';
import BaseInputNote from '~/components/BaseInputNote/BaseInputNote';
import { isInList } from '~/lib/prop-validators';

export default {
  name: 'BaseSelect',

  status: 'under-review',

  components: {
    ChevronDown,
    LayoutFormElement,
    BaseInputNote,
  },

  inheritAttrs: false,

  model: {
    event: 'change',
  },

  props: {
    variant: {
      type: String,
      default: 'default',
      validator: isInList(['default', 'minimal', 'minimal-inverted']),
    },
    /**
     * Array of select options, with the following structure:
     * {
     *  {String}  [value]
     *  {String}  [title]
     *  {Boolean} [disabled] // optional
     * }
     */
    options: {
      type: Array,
      required: true,
    },
    /**
     * The value for the selected option.
     */
    value: {
      type: [String, Number],
      default: null,
    },
    /**
     * The label of the form select field.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * Whether to show an error for this field.
     * `true, false`
     */
    error: {
      type: Boolean,
      default: false,
    },
    /**
     * Manually trigger various states of the select.
     * `hover, active, focus`
     */
    state: {
      type: String,
      default: null,
      validator: isInList(['hover', 'active', 'focus']),
    },
    /**
     * BaseSelect should fill the available width.
     */
    fillWidth: {
      type: Boolean,
      default: false,
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

  data: function () {
    return {
      selected: this.value,
    };
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        // TODO: if we change 'change' to 'input' v-model
        // will work out of the box. Requires a refactor of
        // anything listening for the 'change' even however.
        change: (e) => this.$emit('change', e.target.value),
        focus: (e) => this.$emit('focus', e.target.value),
        keyup: (e) => {
          if (e.keyCode === 13) {
            this.$emit('enter');
          } else {
            this.$emit('keyup', e);
          }
        },
        keydown: (e) => this.$emit('keydown', e),
        blur: (e) => this.$emit('blur', e.target.value),
      };
    },
    computedWrapperClasses() {
      return {
        [`vue--select--${this.variant}`]: !!this.variant,
        'vue--select--fill-width': this.fillWidth,
        [`vue--select--${this.size}`]: this.size !== null,
      };
    },
    computedInputClasses() {
      const optionalClasses = {};
      if (this.state) {
        optionalClasses[this.state] = true;
      }

      return {
        ...optionalClasses,
        'vue--select__field--error': this.error,
      };
    },
    noteVariant() {
      return this.error ? 'error' : 'default';
    },
    showSelectedValue() {
      return ['minimal', 'minimal-inverted'].includes(this.variant);
    },
    selectedValueTitle() {
      const option = this.options.find(
        (option) => option.value === this.selected,
      );
      return option.title;
    },
  },

  watch: {
    value() {
      this.selected = this.value;
    },
  },

  created() {
    if (this.value === null && this.options.length > 0) {
      this.selected = this.options[0].value;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--select {
  $self: &;

  &__arrow {
    background-color: color(input, bg);
    padding: 0 space(xs);
    pointer-events: none;
    position: absolute;
    right: 1px;
    z-index: 2;

    ::v-deep svg {
      color: color(input, text);
    }
  }

  &--default {
    #{$self} {
      &__container {
        align-items: center;
        display: inline-flex;
        position: relative;
      }

      &__field {
        @include fieldStyles();
        @include hoverState();

        appearance: none;
        height: auto; // Override legacy styles
        padding-right: space(xl);

        &[disabled],
        &:disabled {
          @include disabledState();

          + #{$self}__arrow {
            background-color: color(disabled, bg);

            ::v-deep svg {
              color: color(input, border);
            }
          }
        }

        &:focus:not(:disabled),
        &.focus:not(:disabled),
        &:hover:not(:disabled),
        &.hover:not(:disabled) {
          + #{$self}__arrow {
            ::v-deep svg {
              color: color(action);
            }
          }
        }

        &--error {
          @include errorState();

          + #{$self}__arrow {
            ::v-deep svg {
              color: color(action, destroy);
            }
          }
        }
      }

      // Hack: This makes no visible difference to rendering, but fixes an issue in firefox which caused
      // the select to resize by 8px when any options except the longest available was selected
      &__option {
        padding-left: 3px;
        padding-right: 5px;
      }

      &__note {
        margin-top: space(xs);
      }
    }
  }

  &--fill-width {
    #{$self}__container {
      display: flex;
    }
  }

  &--small {
    #{$self}__field {
      line-height: rem(22px);
    }

    #{$self}__label {
      line-height: rem(22px);
    }
  }

  &--minimal,
  &--minimal-inverted {
    #{$self}__container {
      align-items: center;
      display: inline-flex;
      position: relative;
    }

    #{$self}__field {
      opacity: 0;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    #{$self}__selected-value {
      padding-right: rem(24px);
    }

    #{$self}__arrow {
      line-height: rem(24px);
      padding: 0;
      position: absolute;
      right: 0;

      ::v-deep svg {
        height: rem(24px);
        width: rem(24px);
      }
    }
  }

  &--minimal-inverted {
    #{$self}__selected-value {
      color: color(ui, white);
    }

    #{$self}__arrow {
      background-color: transparent;
      color: color(ui, white);
    }
  }
}
</style>
