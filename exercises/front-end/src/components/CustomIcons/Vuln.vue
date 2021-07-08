<template>
  <span
    :aria-hidden="decorative"
    :aria-label="title"
    class="material-design-icon vuln-icon"
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
        d="M12 2l-8.182 3.636v5.455c0 5.045 3.491 9.764 8.182 10.909 4.691-1.145 8.182-5.864 8.182-10.909v-5.455l-8.182-3.636zM12 11.991h6.364c-0.482 3.745-2.982 7.082-6.364 8.127v-8.118h-6.364v-5.182l6.364-2.827v8z"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'VulnIcon',
  props: {
    title: {
      type: String,
      default: 'Vuln Icon',
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
