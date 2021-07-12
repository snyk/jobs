<template>
  <form
    class="vue--input-submit"
    :class="computedClasses"
    @submit.prevent="onSubmit"
  >
    <LayoutFormElement fill-width>
      <template v-if="label" #label>
        <label
          class="vue--input-submit__label"
          :for="$attrs.id"
          v-text="label"
        />
      </template>

      <div class="vue--input-submit__container">
        <input
          v-model="value"
          v-bind="$attrs"
          :type="type"
          class="vue--input-submit__field"
          :class="computedInputClasses"
          v-on="$listeners"
        />
        <BaseButton
          :disabled="isDisabled"
          type="submit"
          size="large"
          class="vue--input-submit__button"
        >
          <slot>Submit</slot>
        </BaseButton>
      </div>
      <p v-if="showNote" class="vue--input-submit__note" v-text="lengthNote" />
    </LayoutFormElement>
  </form>
</template>

<script>
import LayoutFormElement from '~/components/LayoutFormElement/LayoutFormElement';
import BaseButton from '~/components/BaseButton/BaseButton';
import { isInList } from '~/lib/prop-validators';

export default {
  name: 'BaseInputSubmit',
  status: 'ready',

  components: {
    LayoutFormElement,
    BaseButton,
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
     * Sizing for this input.
     * `small`
     */
    size: {
      type: String,
      default: null,
      validator: isInList(['small']),
    },
    /**
     * Default value for the input field
     */
    default: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      value: this.default,
    };
  },

  computed: {
    computedClasses() {
      return {
        [`vue--input-submit--${this.size}`]: this.size !== null,
      };
    },
    computedInputClasses() {
      return {
        [this.state]: this.state !== null,
        'vue--input-submit__field--error': this.error,
      };
    },
    lengthNote() {
      return this.$attrs.maxlength
        ? `Maximum length ${this.$attrs.maxlength} characters.`
        : null;
    },
    noteClasses() {
      return {
        'vue--input-submit__note--show': this.showNote,
      };
    },
    isDisabled() {
      return this.$attrs.disabled || this.value.length === 0 || this.showNote;
    },
    showNote() {
      return this.value.length >= this.$attrs.maxlength;
    },
  },

  methods: {
    onSubmit() {
      this.$emit('submit', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--input-submit {
  $self: &;

  + #{$self} {
    margin-top: space();
  }

  &__container {
    display: flex;
    align-items: baseline;
  }

  &__field {
    @include fieldStyles();
    @include hoverState();

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    flex-grow: 1;

    &[disabled],
    &:disabled {
      @include disabledState();
    }

    &--error {
      @include errorState();
    }
  }

  &__button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font-size: 1.125rem;
    align-self: flex-end;
  }

  &__note {
    margin-top: space(xs);
    font-size: rem(13px);
    color: color(disabled, text);
    display: block;
  }

  &--small {
    #{$self}__field {
      line-height: rem(22px);
    }

    #{$self}__label {
      line-height: rem(22px);
    }

    #{$self}__button {
      font-size: 1rem;

      height: rem(38px);
      padding-left: space();
      padding-right: space();
    }
  }
}
</style>
