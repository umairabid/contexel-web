<template>
  <app-modal :title="title" @close="close" class="task-submission-modal">
    <section id="task-submission-screen">
      <article class="submission-panel">
        <div class="form-control">
          <input
            placeholder="Enter title for your submission"
            type="text"
            v-model="submission.title"
          />
        </div>
        <editor
          v-model="submission.submission"
          :init="editorConfig"
          api-key="440bb73tq6dkx1ncdu2ejhonylaxqty3m5p7f7rqqyv3fa3c"
        ></editor>
      </article>
      <aside class="submission-panel">
        <criteria-widget :task="currentTask" :content="submission.submission" />
        <keyword-widget :task="currentTask" :content="submission.submission" />
      </aside>
    </section>
    <footer>
      <button @click="close" class="btn danger">Close</button>
      <button @click="save" class="btn primary">Save</button>
    </footer>
  </app-modal>
</template>

<script src="./TaskSubmission.js"></script>
<style lang="scss" src="./TaskSubmission.scss"></style>