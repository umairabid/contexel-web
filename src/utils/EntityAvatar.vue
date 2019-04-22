<template>
  <img :class="className" :src="src">
</template>

<script>
export default {
  name: "EntityAvatar",
  props: {
    entity: { type: Object },
    className: { type: String }
  },
  data() {
    return {
      src:
        (this.entity && this.entity.avatar) ||
        "https://loremflickr.com/48/48?random=" + Math.random()
    };
  }
};
</script>