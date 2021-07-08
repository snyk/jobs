<template>
  <span
    :aria-hidden="decorative"
    :aria-label="title"
    class="material-design-icon license-icon"
    role="img"
    @click="$emit('click', $event)"
  >
    <svg
      :fill="fillColor"
      :width="size"
      :height="size"
      class="material-design-icon__svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 4h-4.2A3 3 0 0 0 12 2a3 3 0 0 0-2.8 2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-7 0c.6 0 1 .5 1 1s-.4 1-1 1a1 1 0 0 1-1-1c0-.5.4-1 1-1zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V20z"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'LicenseIcon',
  props: {
    title: {
      type: String,
      default: 'License Icon',
    },
    decorative: {
      type: Boolean,
      default: false,
    },
    fillColor: {
      type: String,
      default: 'currentColor',
    },
    size: {
      type: Number,
      default: 24,
    },
  },
};
</script>
