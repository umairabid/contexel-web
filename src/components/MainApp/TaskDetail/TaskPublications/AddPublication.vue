<template>
  <form class="add-publication-form">
    <div :class="{error: hasError('submission_id')}" class="form-control">
      <select v-model="values.submission_id">
        <option value>Select Submission</option>
        <option
          :value="submission.id"
          :key="submission.id"
          v-for="submission in submissions"
        >{{ submission.id }} - {{ submission.created_at | moment }}</option>
      </select>
      <div v-if="hasError('submission_id')">
        <small v-bind:key="index" v-for="(error, index) in errors.submission_id">{{ error }}</small>
      </div>
    </div>
    <div :class="{error: hasError('platform_id')}" class="form-control">
      <select v-model="values.platform_id">
        <option value>Select Platform</option>
        <option
          :value="platform.id"
          :key="platform.id"
          v-for="platform in platforms"
        >{{ platformLabels[platform.name] }}</option>
      </select>
      <div v-if="hasError('platform_id')">
        <small v-bind:key="index" v-for="(error, index) in errors.platform_id">{{ error }}</small>
      </div>
    </div>
    <button @click="save" class="btn primary">Publish</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import { validateAddPubication } from "../../../../utils/validator";
import { PLATFORMS, PLATFORM_LABELS } from "../../../../helpers/constants";

export default {
  created() {
    this.getSubmissions(this.currentTask.id);
    this.getPlatforms();
  },
  data() {
    return {
      platformLabels: PLATFORM_LABELS,
      values: { submission_id: "", platform_id: "" },
      errors: {}
    };
  },
  computed: {
    ...mapGetters(["currentTask", "platforms"]),
    submissions: function() {
      return this.currentTask.task_submissions.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
      );
    }
  },
  methods: {
    ...mapActions(["getSubmissions", "getPlatforms"]),
    hasError(field) {
      return this.errors[field] && this.errors[field].length > 0;
    },
    save(e) {
      e.preventDefault();
      const validationResult = validateAddPubication(this.values);
      this.errors = validationResult.errors;
      if (validationResult.isValid) this.$emit("save", this.values);
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  }
};
</script>

<style lang="scss">
.add-publication-form {
  padding: $ver_space $hor_space;
  overflow: auto;
  max-height: 500px;
  .btn.primary {
    width: 300px;
    margin: $ver_space auto;
  }
}
</style>

