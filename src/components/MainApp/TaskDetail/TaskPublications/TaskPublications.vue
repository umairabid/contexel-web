<template>
  <div id="task-submissions-block" class="content-block">
    <div class="content-block-head">
      <div class="content-block-title">Task Publications</div>
      <div class="content-block-actions">
        <button @click="showModal = true" class="btn primary">
          Add
          <i class="material-icons md-18">add_circle_outline</i>
        </button>
      </div>
    </div>
    <div class="content-block-body">
      <div
        v-if="currentTask.task_publications.length == 0"
        class="no-records total-center"
      >You do not have any publications.</div>
    </div>
    <app-modal title="Add Publication" v-if="showModal" @close="showModal = false">
      <add-publication />
    </app-modal>
  </div>
</template>

<script src="./TaskPublications.js"></script>
<style lang="scss" src="./TaskPublications.scss"></style>

