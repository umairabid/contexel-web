<template>
  <form class="writer-form">
    <div :class="{error: hasError('name')}" class="form-control">
      <label>Enter Name of Writer</label>
      <input placeholder="e.g. John Doe" type="text" v-model="name">
      <small v-bind:key="index" v-for="(error, index) in errors.name">{{ error }}</small>
    </div>

    <div :class="{error: hasError('email')}" class="form-control">
      <label>Enter Email of Writer</label>
      <input placeholder="e.g. john@gmail.com" type="text" v-model="email">
      <small v-bind:key="index" v-for="(error, index) in errors.password">{{ error }}</small>
    </div>

    <div :class="{error: hasError('password')}" class="form-control">
      <label>Enter Password for Writer</label>
      <input type="password" v-model="password">
      <small v-bind:key="index" v-for="(error, index) in errors.password">{{ error }}</small>
    </div>

    <div :class="{error: hasError('rate_per_word')}" class="form-control">
      <label>Enter Rate Per Word</label>
      <input placeholder="eg .60" type="text" v-model="rate_per_word">
      <small v-bind:key="index" v-for="(error, index) in errors.rate_per_word">{{ error }}</small>
    </div>

    <button @click="save" class="btn primary">Save</button>
  </form>
</template>

<script>

import { generateFormState } from "../../helpers/functions";
import { validateWriter } from "../../utils/validator";

const formElements = ['name', 'email', 'password', 'rate_per_word'];

export default {
  data() {
    return {
      ...generateFormState(formElements)
    }
  },

  methods: {
    hasError(field) {
      console.log(field, this.errors)
      return this.errors[field].length > 0;
    },
    save(e) {
      e.preventDefault();
      const result = validateWriter(this.$data);
      this.errors = result.errors;
      if(result.isValid) this.$emit('save', this.parseWriter())
    },
    parseWriter() {
      const { name, email, password, rate_per_word } = this;
      return {
        name,
        email,
        password,
        rate_per_word
      }
    }
  }
}
</script>

<style lang="scss">
.writer-form {
  min-width: 450px;
  padding: $ver_space $hor_space;
  .btn {
    width: 100%;
  }
}
</style>
