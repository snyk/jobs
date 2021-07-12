<template>
  <LayoutFormElement :class="computedClasses" class="vue--radio" spacing="none">
    <label>
      {{ label }}
      <slot />
      <input
        :id="id"
        :name="name"
        :value="content"
        :disabled="disabled"
        :checked="isChecked"
        type="radio"
        class="vue--radio__input"
        @change="onChange"
      />
      <span
        class="vue--radio__toggle"
        tabindex="0"
        @keyup.enter="onChange"
        @keyup.space="onChange"
      />
    </label>
  </LayoutFormElement>
</template>

<script>
import LayoutFormElement from '~/components/LayoutFormElement/LayoutFormElement';

export default {
  name: 'BaseRadio',
  status: 'under-review',

  components: { LayoutFormElement },

  props: {
    /**
     * ID of the checkbox input tag
     */
    id: {
      type: String,
      default: null,
    },
    /**
     * BaseBadge for the checkbox
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * Name of the checkbox input tag
     */
    name: {
      type: String,
      default: null,
    },
    /**
     * Value of the checkbox input tag
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * Whether the checkbox is disabled or not
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether the checkbox is checked or not
     */
    checked: {
      type: Boolean,
      default: false,
    },
  },

  data: function () {
    return {
      isChecked: this.checked,
      content: this.value,
    };
  },

  computed: {
    computedClasses() {
      return {
        'vue--radio--disabled': this.disabled,
      };
    },
  },

  created() {
    this.$root.$on('group-change', (value, name) => {
      if (this.name === name && this.content !== value) {
        this.isChecked = false;
      }
    });
  },

  methods: {
    onChange() {
      this.$root.$emit('group-change', this.content, this.name);
      this.isChecked = !this.isChecked;
      this.$emit('change', this.content, this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--radio {
  $self: &;

  display: block;
  line-height: rem(30px);
  padding: 0 0 0 1.5em;
  position: relative;

  &__toggle {
    @include fieldStyles();
    @include hoverState();

    border-radius: 50%;
    height: 1em;
    left: 0;
    padding: 0;
    position: absolute;
    top: rem(6px);
    width: 1em;
  }

  &__input {
    display: none;

    &:checked ~ #{$self}__toggle {
      box-shadow: inset 0 0 0 1px color(action), 0 0 0 2px transparent,
        inset 0 0 0 4px color(ui, white), inset 0 0 0 8px color(action);
      transition: box-shadow 0.2s ease;

      &:focus,
      &:hover {
        box-shadow: inset 0 0 0 1px color(action), 0 0 0 1px color(action),
          inset 0 0 0 4px color(ui, white), inset 0 0 0 8px color(action);
        outline: none;
      }
    }
  }

  &--disabled {
    #{$self}__toggle {
      @include disabledState();
    }

    #{$self}__input:checked ~ #{$self}__toggle {
      border: none;
      box-shadow: inset 0 0 0 1px color(disabled, border), 0 0 0 2px transparent,
        inset 0 0 0 4px color(disabled, bg),
        inset 0 0 0 8px color(disabled, border);
    }
  }
}
</style>
