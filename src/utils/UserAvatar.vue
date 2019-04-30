<template>
  <div v-if="initials" :class="className" class="user-avatar">
    <img v-if="!initials" :src="user.avatar">
    <div :style="{backgroundColor}" v-if="initials">{{ initials }}</div>
  </div>
</template>

<script>
import { getUserInitials } from "../helpers/functions.js";

export default {
  name: "UserAvatar",
  props: {
    user: { type: Object },
    className: { type: String }
  },
  data() {
    var initials = "";
    var colors = ["red", "green", "blue", "orange"];
    if (!this.user.avatar) initials = getUserInitials(this.user.name);
    return {
      initials: initials,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)]
    };
  }
};
</script>

<style lang="scss">
.user-avatar {
  display: inline-block;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color_white;
    width: $small_avatar_size;
    height: $small_avatar_size;
    border-radius: 100%;
  }
}
</style>
