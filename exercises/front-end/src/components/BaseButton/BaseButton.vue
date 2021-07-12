<template>
  <component
    :is="wrapper"
    :class="computedClasses"
    :type="computedType"
    class="vue--button"
    role="button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
import { isInList } from '~/lib/prop-validators';

export const variants = [
  'cta',
  'inverted',
  'danger',
  'basic',
  'link',
  'inverted-link',
  'dimmed-link',
  'cta-link',
  'decorative',
  'decorative-animated-pulse',
  'decorative-animated-shimmer',
];
export const ghostTypes = ['cta', 'inverted', 'danger', 'basic'];

export default {
  name: 'BaseButton',

  status: 'ready',

  inheritAttrs: false,

  props: {
    /**
     * Set the wrapper for the button.
     */
    wrapper: {
      type: String,
      default: 'button',
      validator: isInList(['button', 'a']),
    },
    /**
     * Variant of button to render. Available modifiers: cta, approval, denial, sickness.
     */
    variant: {
      type: String,
      default: 'cta',
      validator: isInList(variants),
    },
    /**
     * Render as a ghost/hollow button.
     */
    ghost: {
      type: Boolean,
      default: false,
    },
    /**
     * Size of button.
     */
    size: {
      type: String,
      default: null,
      validator: isInList(['small', 'large', 'extra-large']),
    },
    /**
     * @ignore
     */
    state: {
      type: String,
      default: null,
      validator: isInList([null, 'hover', 'focus']),
    },
    /**
     * Button contains only an icon (no text).
     */
    icon: {
      type: Boolean,
      default: false,
    },
  },

  data: () => {
    return {
      variants,
    };
  },

  computed: {
    computedClasses() {
      return {
        [`vue--button--${this.variant}`]: true,
        'vue--button--ghost': this.ghost,
        [`vue--button--${this.size}`]: !!this.size,
        'vue--button--icon': this.icon,
        [`${this.state}`]: !!this.state,
      };
    },
    computedType() {
      return this.wrapper === 'button' ? this.$attrs.type : null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

@mixin buttonStates($context, $bgColor, $textColor: null) {
  $outlineColor: $textColor;

  @if $textColor == null {
    $textColor: color(base, inverted);
    $outlineColor: color(ui, white);
  }

  &:not(#{$context}--ghost) {
    background-color: $bgColor;
    color: $textColor;

    ::v-deep svg {
      fill: $textColor;
    }

    &:hover,
    &.hover,
    &:focus,
    &.focus {
      border-color: lighten($bgColor, 5%);
      background-color: lighten($bgColor, 5%);
    }

    &:focus,
    &.focus {
      box-shadow: inset 0 0 0 1px $outlineColor;
      outline: none;
    }
  }
}

@mixin ghostButtonStates(
  $context,
  $bgColor,
  $textColor: null,
  $invertedTextColor: null
) {
  $outlineColor: $invertedTextColor;

  @if $textColor == null {
    $textColor: $bgColor;
  }

  @if $invertedTextColor == null {
    $invertedTextColor: color(base, inverted);
    $outlineColor: color(ui, white);
  }

  &#{$context}--ghost {
    background-color: transparent;
    border-color: $bgColor;
    color: $textColor;

    svg {
      fill: $textColor;
    }

    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: lighten($bgColor, 5%);
      border-color: lighten($bgColor, 5%);
      color: $invertedTextColor;

      svg {
        fill: $invertedTextColor;
      }
    }

    &:focus,
    &.focus {
      border-width: 2px;
      box-shadow: inset 0 0 0 1px $outlineColor;
      outline: none;
    }
  }
}

@mixin linkStates($context, $textColor) {
  color: $textColor;

  &:hover,
  &.hover,
  &:focus,
  &.focus {
    box-shadow: none;
    color: $textColor;
    text-decoration: underline;
  }
}

.vue--button {
  $self: &;

  @include font-stack(regular, sans-serif);

  border: 2px solid transparent;
  border-radius: global(border-radius, half);
  cursor: pointer;
  display: inline-block;
  height: rem(38px);
  line-height: 2;
  padding: 0 space(m) * 0.75 - 1px;
  transition: background-color ease 0.2s, color ease 0.2s,
    border-color ease 0.2s, box-shadow ease 0.2s;
  transform: scale(1.001); // Fix for icon jiggle jiggle bug in Chrome.
  white-space: nowrap;

  + #{$self} {
    margin-left: space(s);
  }

  &:hover,
  &.hover {
    text-decoration: none;
  }

  // Automatically position icons for
  // buttons that also have text. (Left aligned).
  .material-design-icon {
    position: relative;
    left: -6px;
    right: 0;
    top: -2px;
  }

  // Automatically position BaseBadge
  // used within buttons. (Right aligned).
  .vue--label,
  .vue--badge {
    position: relative;
    right: -#{space(xxs)};
    margin-top: -1px;
  }

  &[disabled] {
    cursor: no-drop;
    opacity: 0.6;

    &:not(#{$self}--ghost) {
      background-color: color(neutral, 84);
      color: color(neutral, 24);
    }

    &#{$self}--ghost {
      background-color: transparent;
      border-color: color(disabled, border);
      color: color(disabled, text);
    }
  }

  /**
   * Ghost style modifier.
   */
  &--ghost {
    border-width: 1px;
    padding: 0 space(m) * 0.75;

    &:focus,
    &.focus {
      padding: 0 space(m) * 0.75 - 1px;
    }

    &#{$self}--large {
      &:focus,
      &.focus {
        padding: 0 space(m) - 1px;
      }
    }
    &#{$self}--extra-large {
      &:focus,
      &.focus {
        padding: 0 space(m) - 1px;
      }
    }

    &#{$self}--small {
      &:focus,
      &.focus {
        padding: 0 space(s) - 1px;
      }
    }

    &#{$self}--basic {
      &:focus,
      &.focus {
        box-shadow: none;
        padding: 0 space(m) * 0.75;
      }

      &#{$self}--large {
        &:focus,
        &.focus {
          padding: 0 space(m);
        }
      }

      &#{$self}--extra-large {
        &:focus,
        &.focus {
          padding: 0 space(m);
        }
      }

      &#{$self}--small {
        &:focus,
        &.focus {
          padding: 0 space(s);
        }
      }
    }
  }

  /**
   * Solid (and Ghost) style Variant modifiers.
   */
  &--cta:not([disabled]) {
    @include buttonStates($self, color(action, create));
    @include ghostButtonStates($self, color(action, create));
  }

  &--danger:not([disabled]) {
    @include buttonStates($self, color(action, destroy));
    @include ghostButtonStates($self, color(action, destroy));
  }

  &--inverted:not([disabled]) {
    @include buttonStates($self, color(ui, white), color(neutral, 24));
    @include ghostButtonStates(
      $self,
      color(ui, white),
      color(ui, white),
      color(neutral, 24)
    );

    &:hover,
    &.hover {
      border-width: 2px;
      box-shadow: inset 0 0 0 1px color(neutral, 24);
      outline: none;
      padding: 0 space(m) * 0.75 - 1px;
    }

    &#{$self}--large {
      &:hover,
      &.hover {
        padding: 0 space(m);
      }
    }

    &#{$self}--extra-large {
      &:hover,
      &.hover {
        padding: 0 space(m);
      }
    }

    &#{$self}--small {
      &:hover,
      &.hover {
        padding: 0 space(s);
      }
    }

    &#{$self}--ghost {
      &#{$self}--large {
        &:hover,
        &.hover {
          padding: 0 space(m) - 1px;
        }
      }

      &#{$self}--extra-large {
        &:hover,
        &.hover {
          padding: 0 space(m) - 1px;
        }
      }

      &#{$self}--small {
        &:hover,
        &.hover {
          padding: 0 space(s) - 1px;
        }
      }
    }
  }

  &--basic:not([disabled]) {
    &#{$self}--ghost {
      background-color: transparent;
      border-color: color(neutral, 84);
      color: color(neutral, 24);

      svg {
        fill: color(neutral, 24);
      }

      &:hover,
      &.hover,
      &:focus,
      &.focus {
        background-color: transparent !important;
        color: color(neutral, 24);
        border-color: color(action);
      }
    }
  }

  &--decorative,
  &--animated-pulse-decorative,
  &--animated-shimmer-decorative {
    padding: 0 space(m) * 0.75 + 1px;

    &#{$self}--small {
      padding: 0 space(s) + 2px;
    }
    &#{$self}--large {
      padding: 0 space(m) + 2px;
    }
  }

  &--decorative {
    background: linear-gradient(
      to right,
      color(gradient, purple-start),
      color(gradient, purple-end)
    );
    border: 2px;
    color: color(ui, white);
    opacity: 1;
    padding: 0 space(m) * 0.75 + 1px;

    &:hover {
      color: color(ui, white);
      opacity: 0.9;
    }
  }

  &--decorative-animated-pulse {
    animation: pulse 2s infinite;
    background: linear-gradient(
      to right,
      color(gradient, purple-start),
      color(gradient, purple-end)
    );
    border: 2px;
    color: color(ui, white);
    padding: 0 space(m) * 0.75 + 1px;

    &:hover {
      color: color(ui, white);
      opacity: 0.9;
    }
  }

  &--decorative-animated-shimmer {
    background: linear-gradient(
      to right,
      color(gradient, purple-start),
      color(gradient, purple-end)
    );
    border: 2px;
    color: color(ui, white);
    opacity: 0.8;
    opacity: 1;
    overflow: hidden;
    position: relative;
    padding: 0 space(m) * 0.75 + 1px;

    &:hover {
      color: color(ui, white);
      opacity: 1;
      opacity: 0.9;
    }

    &::after {
      animation: shimmer 6s ease-in-out 0.2s infinite;
      animation-fill-mode: forwards;
      content: '';
      position: absolute;
      top: 0;
      left: -200%;
      width: 200%;
      height: 100%;
      opacity: 0;

      background: rgba(255, 255, 255, 0.13);
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.13) 0%,
        rgba(255, 255, 255, 0.13) 77%,
        rgba(255, 255, 255, 0.7) 92%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  /**
   * Link style variant modifiers.
   */
  &--cta-link,
  &--inverted-link,
  &--dimmed-link,
  &--link {
    background-color: transparent;
    border: none;
    color: color(base, anchor);
    height: auto;
    line-height: inherit;
    padding: 0;

    .material-design-icon {
      margin-right: space(xxs);
      left: 0;
    }

    .vue--label {
      padding-right: space(xxs);
    }

    &#{$self}--small,
    &#{$self}--large {
      padding: 0;
    }
  }

  &--cta-link:not([disabled]) {
    @include linkStates($self, color(action, create));
  }

  &--link:not([disabled]) {
    @include linkStates($self, color(base, anchor));
  }

  &--inverted-link:not([disabled]) {
    @include linkStates($self, color(ui, white));
  }

  &--dimmed-link:not([disabled]) {
    @include linkStates($self, color(base, dimmed));
  }

  &--cta-link[disabled]:not(&--ghost),
  &--inverted-link[disabled]:not(&--ghost),
  &--dimmed-link[disabled]:not(&--ghost),
  &--link[disabled]:not(&--ghost) {
    background-color: transparent;
    opacity: 0.5;
  }

  /**
   * Size modifiers.
   */
  &--large {
    font-size: rem(18px);
    height: rem(44px);
    padding: 0 space(m);

    &#{$self}--cta-link,
    &#{$self}--link,
    &#{$self}--inverted-link,
    &#{$self}--dimmed-link {
      height: auto;
    }

    .material-design-icon {
      top: -1px;

      ::v-deep svg {
        height: 28px;
        width: 28px;
      }
    }

    .vue--label {
      top: -2px;
    }
  }
  &--extra-large {
    font-size: rem(18px);
    height: rem(50px);
    padding: 0 space(m);

    &#{$self}--cta-link,
    &#{$self}--link,
    &#{$self}--inverted-link,
    &#{$self}--dimmed-link {
      height: auto;
    }

    .material-design-icon {
      top: -1px;

      ::v-deep svg {
        height: 30px;
        width: 30px;
      }
    }

    .vue--label {
      top: -2px;
    }
  }

  &--small {
    font-size: 0.875rem;
    height: rem(32px);
    line-height: 2;
    padding: 0 space(s);

    + #{$self}--small {
      margin-left: space(xxs);
    }

    &#{$self}--cta-link,
    &#{$self}--link,
    &#{$self}--inverted-link,
    &#{$self}--dimmed-link {
      height: auto;
      line-height: 1.5;
    }

    .material-design-icon {
      top: -1px;

      ::v-deep svg {
        height: 18px;
        width: 18px;
      }
    }
  }

  /**
   * Icon modifier.
   */
  &--icon {
    &#{$self}--cta,
    &#{$self}--danger,
    &#{$self}--inverted {
      .material-design-icon {
        left: auto;
        right: auto;
      }
    }
    &#{$self}--cta-link,
    &#{$self}--inverted-link,
    &#{$self}--dimmed-link,
    &#{$self}--link {
      .material-design-icon {
        margin-right: 0;
        left: auto;
        right: auto;
        top: 0;
      }

      &:focus,
      &.focus {
        outline: global(focusState, outline);
      }
    }
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(color(gradient, purple-start), 0.6);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(color(gradient, purple-start), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(color(gradient, purple-start), 0);
  }
}

@keyframes shimmer {
  10% {
    opacity: 1;
    left: -30%;
    transition-property: left, opacity;
    transition-duration: 10s, 0.15s;
    transition-timing-function: ease;
  }
  100% {
    opacity: 0;
    left: -30%;
    transition-property: left, opacity;
  }
}
</style>
