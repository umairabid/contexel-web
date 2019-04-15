<template>
  <img :class="className" :src="src" />
</template>

<script>

export default {
  name: "UserAvatar",
  props: {
    user: { type: Object },
    className: { type: String }
  },
  data() {
    return {
      src: this.user.avatar || '/placeholders/avatar-placeholder.png'
    }
  }
}

</script>