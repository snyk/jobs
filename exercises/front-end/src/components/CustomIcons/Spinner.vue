<template>
  <span
    :aria-hidden="decorative"
    :aria-label="title"
    class="material-design-icon spinner-icon"
    role="img"
    @click="$emit('click', $event)"
  >
    <svg
      :fill="fillColor"
      :height="size"
      :width="size"
      class="material-design-icon__svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M17.83 12H22c0-5.5-4.5-10-10-10v4.17c3.17 0 5.83 2.6 5.83 5.83z"
      />
      <path
        d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 15.83c3.2 0 5.83-2.62 5.83-5.83 0-3.2-2.62-5.83-5.83-5.83A5.85 5.85 0 0 0 6.17 12c0 3.2 2.62 5.83 5.83 5.83z"
        opacity=".2"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'SpinnerIcon',

  status: 'ready',

  props: {
    title: {
      type: String,
      default: 'Spinner',
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
