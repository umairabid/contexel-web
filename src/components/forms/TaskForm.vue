<template>
  <form class="task-form">
    <div class="form-control">
      <label>Title</label>
      <input placeholder="How to article for life hacker blog" type="text">
    </div>

    <div class="fields-row">
      <div class="form-control">
        <label>Due Date</label>
        <datepicker></datepicker>
      </div>
      <div class="form-control">
        <label>Assignee</label>
        <select>
          <option :value="writer.id" :key="writer.id" v-for="writer in writers">{{ writer.name }}</option>
        </select>
      </div>
      <div class="form-control">
        <label>Status</label>
        <select>
          <option value="open">Open</option>
          <option value="inprogress">In Progress</option>
          <option value="submitted">Submitted</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>

    <div class="form-control">
      <label>Description</label>
      <wysiwyg></wysiwyg>
    </div>

    <div class="fields-row">
      <div class="form-control">
        <label>Maximum Plagarism Ratio</label>
        <div class="iconized-input">
          <input type="number">
          <span class="icon">%</span>
        </div>
      </div>
      <div class="form-control">
        <label>Maximum Mistakes</label>
        <div class="iconized-input">
          <input type="number">
          <span class="icon">%</span>
        </div>
      </div>
    </div>

    <div class="fields-row">
      <div class="form-control">
        <label>Payment Type</label>
        <select>
          <option>Fixed</option>
          <option>Per Word</option>
        </select>
      </div>
      <div class="form-control">
        <label>Payment</label>
        <input type="number">
      </div>
    </div>

    <h3>Keywords</h3>

    <div :key="index" v-for="(kw, index) in keywords" class="fields-row">
      <div class="form-control">
        <label>Name</label>
        <input type="number">
      </div>
      <div class="form-control">
        <label>Density</label>
        <div class="iconized-input">
          <input type="number">
          <span class="icon">%</span>
        </div>
      </div>
    </div>
    <button @click="addKeyword" class="btn btn-link">Add Keyword</button>
    <button class="btn primary">Create Task</button>
  </form>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    datepicker: Datepicker
  },
  props: {
    writers: Array
  },
  data() {
    return {
      keywords: []
    };
  },
  methods: {
    hasError() {},
    addKeyword(e) {
      e.preventDefault();
      this.keywords.push({});
    }
  }
};
</script>

<style lang="scss">
.task-form {
  padding: $ver_space $hor_space;
  width: 720px;
  height: 450px;
  overflow: auto;
  .btn.primary {
    width: 100%;
    margin: $ver_space 0;
  }
}
</style>
