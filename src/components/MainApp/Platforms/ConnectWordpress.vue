<template>
  <form class="connect-wordpress-form">
    <div :class="{error: hasError('url')}" class="form-control">
      <input placeholder="wordpress.com" type="text" v-model="values.url" />
      <div v-if="hasError('url')">
        <small v-bind:key="index" v-for="(error, index) in errors.url">{{ error }}</small>
      </div>
    </div>
    <div :class="{error: hasError('username')}" class="form-control">
      <input placeholder="admin" type="text" v-model="values.username" />
      <div v-if="hasError('username')">
        <small v-bind:key="index" v-for="(error, index) in errors.username">{{ error }}</small>
      </div>
    </div>
    <div :class="{error: hasError('password')}" class="form-control">
      <input type="password" v-model="values.password" />
      <div v-if="hasError('password')">
        <small v-bind:key="index" v-for="(error, index) in errors.password">{{ error }}</small>
      </div>
    </div>
    <button @click="save" class="btn primary">Connect with Wordpress</button>
  </form>
</template>

<script>
import { validateConnectWordpress } from "../../../utils/validator.js";

export default {
  data() {
    return {
      values: { url: "", username: "", password: "" },
      errors: {}
    };
  },
  methods: {
    hasError(field) {
      return this.errors[field] && this.errors[field].length > 0;
    },
    save(e) {
      e.preventDefault();
      const validationResult = validateConnectWordpress(this.values);
      this.errors = validationResult.errors;
      if (validationResult.isValid) this.$emit("save", this.values);
    }
  }
};
</script>

<style lang="scss">
.connect-wordpress-form {
  padding: $ver_space $hor_space;
  overflow: auto;
  max-height: 500px;
  .btn.primary {
    width: 300px;
    margin: $ver_space auto;
  }
}
</style>
