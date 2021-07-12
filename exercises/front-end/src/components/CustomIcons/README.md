Icons are a special component type akin to Elements, but we adhere to a stricter format in creating our Icon components.

We follow the format of Material Design Icons and make use of a wrapper (https://www.npmjs.com/package/vue-material-design-icons) when reusing existing Material Design Icons.

## Getting started

If you want a new icon first check https://materialdesignicons.com/ to see if it is already present. If so, please use that version unless the design differs greatly.

In this case we use the existing icon like this:

```js static
<template>
  <MenuIcon />
</template>

<script>
import MenuIcon from "Icons/Menu";

export default {
  components: {
    MenuIcon;
  }
}
</script>
```

If you need to make your own icon using an SVG by design team please follow the same conventions as Material Design Icons.

We've included an example template here for you to use:

```js static
<template>
  <span
    :aria-hidden="decorative"
    :aria-label="title"
    class="material-design-icon YOUR-ICON-NAME-icon"
    role="img"
    @click="$emit('click', $event)"
  >
    <svg
      :fill="fillColor"
      class="material-design-icon__svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
    >
      >>YOUR SVG HERE<<
    </svg>
  </span>
</template>

<script>
export default {
  name: "YourIconName",
  props: {
    title: {
      type: String,
      default: "Your Icon Name icon",
    },
    decorative: {
      type: Boolean,
      default: false,
    },
    fillColor: {
      type: String,
      default: "currentColor",
    },
    size: {
      type: Number,
      default: 24,
    },
  },
};
</script>

```
