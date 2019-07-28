<template>
  <div id="task-submissions-block" class="content-block">
    <div class="content-block-head">
      <div class="content-block-title">Task Submissions</div>
      <div class="content-block-actions">
        <router-link
          :to="{name: 'CreateTaskSubmission', params: { id: currentTask.id }}"
          class="btn primary"
        >
          Add
          <i class="material-icons md-18">add_circle_outline</i>
        </router-link>
      </div>
    </div>
    <div class="content-block-body">
      <router-link
        :to="{ name: 'UpdateTaskSubmission', params: { id: currentTask.id, submissionId: submission.id }}"
        :key="submission.id"
        v-for="submission in currentTask.task_submissions"
        class="submission-list-item"
      >
        <p>
          <user-avatar :user="submission.writer" />Submitted By
          <strong>{{ submission.writer.name }}</strong>
          on
          <strong>{{ submission.created_at | moment }}</strong>
        </p>
        <i class="material-icons">keyboard_arrow_right</i>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script src="./TaskSubmissions.js"></script>
<style lang="scss" src="./TaskSubmissions.scss"></style>