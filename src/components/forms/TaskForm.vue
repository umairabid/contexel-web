<template>
  <form class="task-form">
    <div :class="{error: hasError('title')}" class="form-control">
      <label>Title</label>
      <input placeholder="How to article for life hacker blog" type="text" v-model="values.title">
      <div v-if="hasError('title')">
        <small v-bind:key="index" v-for="(error, index) in errors.title">{{ error }}</small>
      </div>
    </div>

    <div class="fields-row">
      <div :class="{error: hasError('due_date')}" class="form-control">
        <label>Due Date</label>
        <datepicker :value="values.due_date"></datepicker>
        <div v-if="hasError('due_date')">
          <small v-bind:key="index" v-for="(error, index) in errors.due_date">{{ error }}</small>
        </div>
      </div>
      <div class="form-control">
        <label>Assignee</label>
        <select v-model="values.user_id">
          <option
            :value="assignee.user_id"
            :key="assignee.id"
            v-for="assignee in assignees"
          >{{ assignee.name }}</option>
        </select>
      </div>
      <div class="form-control">
        <label>Status</label>
        <select :disabled="!values.id" v-model="values.current_status">
          <option value="1">Open</option>
          <option value="2">In Progress</option>
          <option value="3">Submitted</option>
          <option value="4">Completed</option>
        </select>
      </div>
    </div>

    <div class="form-control">
      <label>Description</label>
      <wysiwyg v-model="values.description"></wysiwyg>
    </div>

    <div class="fields-row">
      <div :class="{error: hasError('max_plagiarism')}" class="form-control">
        <label>Maximum Plagarism Ratio</label>
        <div class="iconized-input">
          <input v-model="values.max_plagiarism" type="number">
          <span class="icon">%</span>
        </div>
        <div v-if="hasError('max_plagiarism')">
          <small v-bind:key="index" v-for="(error, index) in errors.max_plagiarism">{{ error }}</small>
        </div>
      </div>
      <div :class="{error: hasError('max_mistakes')}" class="form-control">
        <label>Maximum Mistakes</label>
        <div class="iconized-input">
          <input v-model="values.max_mistakes" type="number">
          <span class="icon">%</span>
        </div>
        <div v-if="hasError('max_mistakes')">
          <small v-bind:key="index" v-for="(error, index) in errors.max_mistakes">{{ error }}</small>
        </div>
      </div>
      <div :class="{error: hasError('min_word')}" class="form-control">
        <label>Minimum Words</label>
        <input v-model="values.min_word" type="number">
        <div v-if="hasError('min_word')">
          <small v-bind:key="index" v-for="(error, index) in errors.min_word">{{ error }}</small>
        </div>
      </div>
    </div>

    <div class="fields-row">
      <div class="form-control">
        <label>Payment Type</label>
        <select v-model="values.payment_type">
          <option value="1">Fixed</option>
          <option value="2">Per Word</option>
        </select>
      </div>
      <div :class="{error: hasError('payment_value')}" class="form-control">
        <label>Payment</label>
        <input v-model="values.payment_value" type="number">
        <div v-if="hasError('payment_value')">
          <small v-bind:key="index" v-for="(error, index) in errors.payment_value">{{ error }}</small>
        </div>
      </div>
    </div>

    <h3>Keywords</h3>

    <div :key="index" v-for="(kw, index) in values.keywords" class="fields-row">
      <div class="form-control">
        <label>Name</label>
        <input v-model="kw.name" type="text">
      </div>
      <div class="form-control">
        <label>Density</label>
        <div class="iconized-input">
          <input v-model="kw.density" type="number">
          <span class="icon">%</span>
        </div>
      </div>
    </div>
    <button @click="addKeyword" class="btn btn-link">Add Keyword</button>
    <button @click="save" class="btn primary">Create Task</button>
  </form>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { TaskKeyword } from "../../store/models/taskModels.js";
import { validateTask } from "../../utils/validator.js";
import { mapActions, mapGetters } from "vuex";
import { getUser } from "../../utils/storage";
import Vue from "vue";

export default {
  components: {
    datepicker: Datepicker
  },
  props: {
    task: Object
  },
  created() {
    if (this.writers.length === 0) this.getWriters();
  },
  computed: {
    ...mapGetters(["writers"]),
    assignees() {
      const user = getUser();
      const assignees = this.writers.concat([
        {
          user_id: user.id,
          name: user.name
        }
      ]);
      return assignees;
    }
  },
  data() {
    return {
      values: Vue.util.extend({}, this.task),
      errors: {}
    };
  },
  methods: {
    hasError(field) {
      return this.errors[field] && this.errors[field].length > 0;
    },
    save(e) {
      e.preventDefault();
      const validationResult = validateTask(this.values);
      this.errors = validationResult.errors;
      if (validationResult.isValid) this.$emit("save", this.values);
    },
    addKeyword(e) {
      e.preventDefault();
      this.values.keywords.push(new TaskKeyword());
    },
    ...mapActions(["getWriters"])
  }
};
</script>

<style lang="scss">
.task-form {
  padding: $ver_space $hor_space;
  overflow: auto;
  .btn.primary {
    width: 100%;
    margin: $ver_space 0;
  }
}
</style>
