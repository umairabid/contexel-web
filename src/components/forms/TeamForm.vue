<template>
  <form class="writer-form">
    <div :class="{error: hasError('name')}" class="form-control">
      <label>Enter Name of Writer</label>
      <input placeholder="e.g. Social Media Team" type="text" v-model="name">
      <small v-bind:key="index" v-for="(error, index) in errors.name">{{ error }}</small>
    </div>

    <div :class="{error: hasError('description')}" class="form-control">
      <label>Enter Email of Writer</label>
      <textarea v-model="description"></textarea>
      <small v-bind:key="index" v-for="(error, index) in errors.description">{{ error }}</small>
    </div>

    <button @click="save" class="btn primary">Save</button>
  </form>
</template>

<script>
import { generateFormState } from "../../helpers/functions";
import { validateTeam } from "../../utils/validator";

const formElements = ["id", "name", "description"];

export default {
  props: {
    team: Object
  },
  data() {
    return {
      ...generateFormState(formElements),
      ...this.team
    };
  },
  methods: {
    hasError(field) {
      return this.errors[field].length > 0;
    },
    save(e) {
      e.preventDefault();
      const result = validateTeam(this.$data);
      this.errors = result.errors;
      if (result.isValid) this.$emit("save", this.parseWriter());
    },
    parseWriter() {
      const { id, name, description } = this;
      return { id, name, description };
    }
  }
};
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
