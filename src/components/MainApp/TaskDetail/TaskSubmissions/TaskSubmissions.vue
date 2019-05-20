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
      <table class="table-bordered pure-table">
        <tr>
          <th></th>
          <th>Submitted By</th>
          <th>Submitted On</th>
          <th>Status</th>
          <th></th>
        </tr>
      </table>
    </div>
    <router-view></router-view>
  </div>
</template>

<script src="./TaskSubmissions.js"></script>
<style lang="scss" src="./TaskSubmissions.scss"></style>