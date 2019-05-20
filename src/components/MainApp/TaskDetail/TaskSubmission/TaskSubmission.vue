<template>
  <app-modal :title="title" @close="close" class="task-submission-modal">
    <section id="task-submission-screen">
      <article class="submission-panel submission-content-box">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      </article>
      <aside class="submission-panel"></aside>
      <footer></footer>
    </section>
  </app-modal>
</template>

<script src="./TaskSubmission.js"></script>
<style lang="scss" src="./TaskSubmission.scss"></style>