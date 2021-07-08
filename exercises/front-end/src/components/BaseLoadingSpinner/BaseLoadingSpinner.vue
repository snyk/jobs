<template>
  <div
    :class="computedClasses"
    class="vue--loading-spinner"
    data-snyk-test="LoadingSpinner"
  >
    <div class="vue--loading-spinner__image">
      <SpinnerIcon />
    </div>
    <div v-if="text" class="vue--loading-spinner__text" v-text="text" />
  </div>
</template>

<script>
import SpinnerIcon from '~/components/CustomIcons/Spinner';
import { isInList } from '~/lib/prop-validators';

export default {
  name: 'BaseLoadingSpinner',

  status: 'ready',

  components: {
    SpinnerIcon,
  },

  props: {
    /**
     * Size of the loading spinner. Available sizes: `extra-small`, `small`, `medium`, `large`, `extra-large`.
     */
    size: {
      type: String,
      default: 'extra-small',
      validator: isInList([
        'extra-small',
        'small',
        'medium',
        'large',
        'extra-large',
      ]),
    },
    /**
     * Text for the loading spinner.
     */
    text: {
      type: String,
      default: null,
    },
    /**
     * Whether the loading spinner is displayed inline.
     * `true, false`
     */
    inline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClasses() {
      return {
        [`vue--loading-spinner--${this.size}`]: true,
        'vue--loading-spinner--inline': this.inline,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--loading-spinner {
  $self: &;

  @include typeset(text);

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  &__image {
    animation: spinner 1.2s infinite;
    animation-fill-mode: forwards;
    height: 33px;
    width: 33px;
  }

  &--extra-small {
    #{$self}__image,
    ::v-deep svg {
      height: 20px;
      width: 20px;
    }

    #{$self}__text {
      font-size: rem(14px);
      margin-top: space(xs);
    }
  }

  &--small {
    #{$self}__image,
    ::v-deep svg {
      height: 24px;
      width: 24px;
    }

    #{$self}__text {
      font-size: rem(14px);
      margin-top: space(xs);
    }
  }

  &--medium {
    #{$self}__image,
    ::v-deep svg {
      height: 33px;
      width: 33px;
    }

    #{$self}__text {
      margin-top: space(xs);
    }
  }

  &--large {
    #{$self}__image,
    ::v-deep svg {
      height: 40px;
      width: 40px;
    }

    #{$self}__text {
      @include typeset(display1, 1, 400);

      margin-top: space(s);
    }
  }

  &--extra-large {
    #{$self}__image,
    ::v-deep svg {
      height: 48px;
      width: 48px;
    }

    #{$self}__text {
      @include typeset(display2, 1, 400);

      margin-top: space();
    }
  }

  &--inline {
    display: inline-flex;
    justify-content: flex-start;
    flex-direction: row;

    #{$self}__text {
      margin: 0 0 0 space(xs);
    }
  }

  &--inverse {
    color: color(ui, white);
  }

  &--hidden {
    opacity: 0;
  }
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
