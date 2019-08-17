<template>
  <form class="generate-invoice-form">
    <div :class="{error: hasError('writer_id')}" class="form-control">
      <label>Writer</label>
      <select v-model="values.writer_id">
        <option
          :value="writer.id"
          :key="writer.id"
          v-for="writer in writerOptions"
        >{{ writer.name }}</option>
      </select>
      <div v-if="hasError('writer_id')">
        <small v-bind:key="index" v-for="(error, index) in errors.url">{{ writer_id }}</small>
      </div>
    </div>
    <div :class="{error: hasError('period_from')}" class="form-control">
      <label>Period From</label>
      <datepicker :disabled-dates="{from: new Date()}" v-model="values.period_from"></datepicker>
      <div v-if="hasError('period_from')">
        <small v-bind:key="index" v-for="(error, index) in errors.period_from">{{ error }}</small>
      </div>
    </div>
    <div :class="{error: hasError('period_to')}" class="form-control">
      <label>Period To</label>
      <datepicker
        :disabled-dates="{to: new Date(values.period_from), from: new Date()}"
        v-model="values.period_to"
      ></datepicker>
      <div v-if="hasError('period_to')">
        <small v-bind:key="index" v-for="(error, index) in errors.period_to">{{ error }}</small>
      </div>
    </div>
    <button @click="save" class="btn primary">Generate Invoice</button>
  </form>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { validateGenerateInvoice } from "../../../utils/validator.js";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    datepicker: Datepicker
  },
  created() {
    this.getWriters();
  },
  data() {
    return {
      values: { writer_id: "", period_from: "", period_to: "" },
      errors: {}
    };
  },
  computed: {
    ...mapGetters(["writers"]),
    writerOptions: function() {
      return [{ id: "", name: "Select Writer" }].concat(this.writers);
    }
  },
  methods: {
    ...mapActions(["getWriters"]),
    hasError(field) {
      return this.errors[field] && this.errors[field].length > 0;
    },
    save(e) {
      e.preventDefault();
      const validationResult = validateGenerateInvoice(this.values);
      this.errors = validationResult.errors;
      if (validationResult.isValid) this.$emit("save", this.values);
    }
  }
};
</script>

<style lang="scss">
.generate-invoice-form {
  padding: $ver_space $hor_space;
  overflow: auto;
  max-height: 500px;
  .btn.primary {
    width: 300px;
    margin: $ver_space auto;
  }
}
</style>
